import { useEffect, useRef, useState } from 'react';
import { useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store';
import SEND from '../../assets/14_messages/send.png';
import api from '../../utils/api';
import Conversation from './components/conversation';
import ConversationFilter from './components/conversation-filter';
import EmptyMessage from './components/empty-message';
import Message from './components/message';
import MessageHeader from './components/message-header';

function Index() {
  const messagesAvailable = true;

  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const user = useAppSelector((state: RootState) => state.user.user);

  const scrollRef = useRef(null);

  useEffect(() => {
    const getConversations = async () => {
      try {
        const { data } = await api.get(`/conversations/${user && user._id}`);
        setConversations(data);
      } catch (err) {
        console.log(err);
      }
    };
    getConversations();
  }, [user && user._id]);

  useEffect(() => {
    const getMessages = async () => {
      try {
        // @ts-ignore
        const { data } = await api.get('/messages/' + currentChat?._id);
        setMessages(data);
      } catch (error) {
        console.log(error);
      }
    };
    getMessages();
  }, [currentChat]);

  useEffect(() => {
    // @ts-ignore
    scrollRef?.current?.scrollIntoView({ bevior: 'smooth' });
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    const message = {
      // @ts-ignore
      sender: user._id,
      text: newMessage,
      // @ts-ignore
      conversationId: currentChat?._id,
    };
    try {
      const { data } = await api.post('/messages', message);
      // @ts-ignore
      setMessages([...messages, data]);
      setNewMessage('');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='container mx-auto'>
      <section className='bg-white rounded-xl p-6'>
        <h2 className='text-2xl font-semibold mb-6'>Messages</h2>

        <div className='grid grid-cols-3 border border-[#EDECF1] rounded-xl'>
          {/* Left Column */}
          <div className='border-r border-[#EDECF1]'>
            <div className='grid grid-rows-7 gap-2'>
              <ConversationFilter />
              <input
                placeholder='Search to chat'
                className='w-full p-2 mx-auto'
              />
              {conversations.map((conversation) => (
                <div
                  // @ts-ignore
                  key={conversation._id}
                  onClick={() => setCurrentChat(conversation)}
                  className='cursor-pointer hover:bg-[#F3F1FB]'
                >
                  <Conversation
                    conversation={conversation}
                    // @ts-ignore
                    currentUser={user}
                    messagesAvailable={messagesAvailable}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className='col-span-2 grid grid-rows-7 h-full'>
            {currentChat ? (
              <>
                <MessageHeader />

                <div className='border-b border-[#EDECF1] row-span-5 p-4 h-full overflow-y-scroll'>
                  <div className='max-h-[780px] space-y-3'>
                    {messages.map((message: any) => (
                      <div ref={scrollRef}>
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
                  {/* @ts-ignore */}
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
