import SEND from '../../assets/14_messages/send.png';
import Conversation from './components/conversation';
import ConversationFilter from './components/conversation-filter';
import EmptyMessage from './components/empty-message';
import Message from './components/message';
import MessageHeader from './components/message-header';

function Index() {
  const messagesAvailable = true;

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
              <Conversation messagesAvailable={messagesAvailable} />
            </div>
          </div>

          {/* Right Column */}
          <div className='col-span-2 grid grid-rows-7 h-full'>
            {messagesAvailable ? (
              <>
                <MessageHeader />

                <div className='border-b border-[#EDECF1] row-span-5 p-4 h-full overflow-y-scroll'>
                  <div className='max-h-[780px] space-y-3'>
                    <Message />
                    <Message own={true} />
                    <Message />
                    <Message own={true} />
                    <Message />
                    <Message own={true} />
                    <Message />
                    <Message />
                  </div>
                </div>

                <div className='row-span-1 p-4 flex items-center'>
                  <textarea
                    placeholder='Write Your Message'
                    className='flex-1 border-none p-2 ring-0 focus:ring-0 focus-visible:ring-offset-0'
                    rows={4}
                  />
                  <button>
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
