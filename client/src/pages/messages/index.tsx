import { useEffect, useRef, useState } from 'react';
import { useGetCurrentUser } from '../../app/hooks/useUser';
import SEND from '../../assets/14_messages/send.png';
import Breadcrumbs from '../../components/Breadcrumbs';
import {
  Conversation as ConversationType,
  Message as MessageType,
} from '../../types';
import api from '../../utils/api';
import sharedSocket from '../../utils/socket';
import Conversation from './components/conversation';
import ConversationFilter from './components/conversation-filter';
import EmptyMessage from './components/empty-message';
import Message from './components/message';
import MessageHeader from './components/message-header';

function Index() {
  const [conversations, setConversations] = useState<ConversationType[]>([]);
  const [currentChat, setCurrentChat] = useState<ConversationType | null>(null);
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [arrivalMessage, setArrivalMessage] = useState<MessageType | null>(
    null
  );

  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [searchTimer, setSearchTimer] = useState<number | null>(null);

  const user = useGetCurrentUser();

  const scrollRef = useRef<HTMLDivElement | null>(null);

  const getConversations = async () => {
    try {
      const { data } = await api.get(`/conversations/${user && user._id}`);
      setConversations(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    console.log('Socket useEffect triggered');
    sharedSocket.on('getMessage', (data) => {
      console.log('getMessage event triggered:', data);
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: new Date(),
      });
    });
  }, []);

  useEffect(() => {
    arrivalMessage &&
      currentChat?.members.includes(arrivalMessage.sender) &&
      setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentChat]);

  useEffect(() => {
    sharedSocket.emit('addUser', user?._id);
  }, [user]);

  useEffect(() => {
    getConversations();
  }, [user]);

  useEffect(() => {
    const getMessages = async () => {
      try {
        const { data } = await api.get('/messages/' + currentChat?._id);
        setMessages(data);
      } catch (error) {
        console.log(error);
      }
    };
    getMessages();
  }, [currentChat]);

  useEffect(() => {
    scrollRef?.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = async () => {
    // Ensure that user is not null before accessing its properties
    if (!user) {
      console.error('User is null');
      return;
    }

    const message = {
      sender: user._id,
      text: newMessage,
      conversationId: currentChat?._id,
    };

    const receiverId = currentChat?.members.find(
      (member) => member !== user._id
    );

    sharedSocket.emit('sendMessage', {
      senderId: user?._id,
      receiverId,
      text: newMessage,
    });
    try {
      const { data } = await api.post('/messages', message);
      setMessages([...messages, data]);
      setNewMessage('');
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = async () => {
    try {
      if (searchQuery.trim() !== '') {
        const { data } = await api.get(`/users/search/${searchQuery}`);
        setSearchResults(data);
      } else {
        setSearchResults([]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearchOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);

    // Clear the previous search timer
    if (searchTimer) {
      clearTimeout(searchTimer);
    }

    // Set a new timer to perform the search after a delay
    const timer = setTimeout(() => {
      handleSearch();
    }, 500); // You can adjust the delay (in milliseconds) according to your needs
    // @ts-ignore
    setSearchTimer(timer);
  };

  const handleStartConversation = async (targetUserId: string) => {
    try {
      // Check if a conversation with the target user already exists
      const existingConversation = conversations.find(
        (conversation) =>
          conversation.members.includes(user?._id!) &&
          conversation.members.includes(targetUserId)
      );

      if (existingConversation) {
        setCurrentChat(existingConversation);
      } else {
        // Create a new conversation
        const { data } = await api.post('/conversations', {
          senderId: user?._id,
          receiverId: targetUserId,
        });

        setCurrentChat(data);
      }

      setSearchQuery('');
      setSearchResults([]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='container mx-auto'>
      <div className='mb-4'>
        <Breadcrumbs />
      </div>

      <section className='bg-white rounded-xl p-6 drop-shadow  mx-2'>
        <h2 className='text-2xl font-semibold mb-6'>Messages</h2>

        <div className='grid grid-cols-1 md:grid-cols-3 border border-[#EDECF1] rounded-xl'>
          {/* Left Column */}
          <div className='md:border-r md:border-[#EDECF1] md:col-span-1'>
            <div className='grid grid-rows-7 gap-2'>
              <ConversationFilter />
              <input
                placeholder='Search to chat'
                className='w-full p-2 mx-auto'
                value={searchQuery}
                onChange={handleSearchOnChange}
              />
              {searchResults.map((user) => (
                <div
                  key={user._id}
                  onClick={() => handleStartConversation(user._id)}
                  className='cursor-pointer hover:bg-[#F3F1FB]'
                >
                  {/* Display user information */}
                  <div>
                    {user.firstName} {user.lastName}
                  </div>
                </div>
              ))}
              {conversations.map((conversation) => (
                <div
                  key={conversation._id}
                  onClick={() => setCurrentChat(conversation)}
                  className='cursor-pointer hover:bg-[#F3F1FB]'
                >
                  <Conversation
                    conversation={conversation}
                    currentUser={user}
                  />
                </div>
              ))}
            </div>
          </div>
          {/* Right Column */}
          <div className='md:col-span-2 grid grid-rows-7 h-full'>
            {currentChat ? (
              <>
                <MessageHeader conversation={currentChat} currentUser={user} />

                <div className='border-b border-[#EDECF1] row-span-5 p-4 h-full overflow-y-scroll'>
                  <div className='max-h-[780px] space-y-3'>
                    {messages.map((message: any) => (
                      <div key={message._id} ref={scrollRef}>
                        <Message
                          key={message._id}
                          message={message}
                          own={message.sender === user?._id}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className='row-span-1 p-4 flex items-center'>
                  <textarea
                    placeholder='Write Your Message'
                    className='flex-1 border-none p-2 ring-0 focus:ring-0 focus-visible:ring-offset-0'
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    rows={4}
                  />
                  <button onClick={handleSubmit}>
                    <img
                      src={SEND}
                      alt='send'
                      className='object-scale-down w-12 h-12'
                    />
                  </button>
                </div>
              </>
            ) : (
              <EmptyMessage />
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Index;
