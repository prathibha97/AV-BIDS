// import { Option, Select } from '@material-tailwind/react';
// import { useEffect, useState } from 'react';
// import { MdArrowForwardIos } from 'react-icons/md';
// import { useGetCurrentUser } from '../../../app/hooks/useUser';
// import EventListingCard from './components/eventListingCard';

// function Index() {
//   const user = useGetCurrentUser();
//   const [currentPage, setCurrentPage] = useState(1);
//   const eventsPerPage = 10;

//   useEffect(() => {
//     setCurrentPage(1);
//   }, [user?.savedEvents]);

//   const indexOfLastEvent = currentPage * eventsPerPage;
//   const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
//   const currentEvents = user?.savedEvents?.slice(
//     indexOfFirstEvent,
//     indexOfLastEvent
//   );

//   const pageNumbers = [];
//   for (
//     let i = 1;
//     i <= Math.ceil(user?.savedEvents?.length! / eventsPerPage);
//     i++
//   ) {
//     pageNumbers.push(i);
//   }

//   const handlePageChange = (pageNumber: any) => {
//     setCurrentPage(pageNumber);
//   };

//   return (
//     <div className='container mx-auto'>
//       <section className='bg-[#fff] px-8 py-8 rounded-xl drop-shadow mb-6'>
//         <div className='flex items-center justify-between'>
//           <h2 className='text-2xl font-semibold mb-6'>Saved Events</h2>
//           <div className='w-48'>
//             <Select label='Select Version' className='!bg-[#F3F1FB]'>
//               <Option>Date Posted</Option>
//               <Option>Expiring Soonest</Option>
//             </Select>
//           </div>
//         </div>

//         <div className='mt-8'>
//           {currentEvents?.length! > 0 ? (
//             currentEvents?.map((event) => (
//               <div key={event._id}>
//                 <EventListingCard event={event} />
//               </div>
//             ))
//           ) : (
//             <p>Saved events will appear here</p>
//           )}
//         </div>

//         <div className='flex justify-end'>
//           <nav className='mt-8'>
//             <ul className='flex'>
//               {pageNumbers.map((number) => (
//                 <li key={number}>
//                   <button
//                     className={`mx-1 flex h-9 w-9 items-center justify-center rounded-full ${
//                       currentPage === number
//                         ? 'bg-primary text-white shadow-md'
//                         : 'border border-blue-gray-100 bg-transparent text-blue-gray-500 hover:bg-light-300'
//                     } p-0 text-sm transition duration-150 ease-in-out`}
//                     onClick={() => handlePageChange(number)}
//                     disabled={currentPage === number}
//                   >
//                     {number}
//                   </button>
//                 </li>
//               ))}
//               <li>
//                 <button
//                   className='mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300'
//                   onClick={() => handlePageChange(currentPage + 1)}
//                   disabled={currentPage === pageNumbers.length}
//                   aria-label='Next'
//                 >
//                   <span className='material-icons text-sm'>
//                     <MdArrowForwardIos />
//                   </span>
//                 </button>
//               </li>
//             </ul>
//           </nav>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Index;

import { Option, Select } from '@material-tailwind/react';
import { useEffect, useState } from 'react';
import { MdArrowForwardIos } from 'react-icons/md';
import { useGetCurrentUser } from '../../../app/hooks/useUser';
import EventListingCard from './components/eventListingCard';

function Index() {
  const user = useGetCurrentUser();
  const [currentPage, setCurrentPage] = useState(1);
  const [sortingOption, setSortingOption] = useState('datePosted'); // Default sorting option
  const eventsPerPage = 10;

  useEffect(() => {
    setCurrentPage(1);
  }, [user?.savedEvents]);

  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;

  let currentEvents = user?.savedEvents?.slice(
    indexOfFirstEvent,
    indexOfLastEvent
  );

  // Sorting logic
  if (sortingOption === 'expiringSoonest') {
    currentEvents = currentEvents?.sort(
      (a, b) =>
        // @ts-ignore
        new Date(a.expiryDate as string).getTime() -
        // @ts-ignore
        new Date(b.expiryDate as string).getTime()
    );
  } else {
    // Default sorting by datePosted
    currentEvents = currentEvents?.sort(
      (a, b) =>
        new Date(a.createdAt as unknown as string).getTime() -
        new Date(b.createdAt as unknown as string).getTime()
    );
  }

  const pageNumbers = [];
  for (
    let i = 1;
    i <= Math.ceil(user?.savedEvents?.length! / eventsPerPage);
    i++
  ) {
    pageNumbers.push(i);
  }

  const handlePageChange = (pageNumber: any) => {
    setCurrentPage(pageNumber);
  };

  const handleSortingChange = (option: any) => {
    setSortingOption(option);
  };

  return (
    <div className='container mx-auto'>
      <section className='bg-[#fff] px-8 py-8 rounded-xl drop-shadow mb-6'>
        <div className='flex items-center justify-between'>
          <h2 className='text-2xl font-semibold mb-6'>Saved Events</h2>
          <div className='flex items-center'>
            <span className='mr-2'>Sort By:</span>
            <Select
              // label='Select Version'
              className='!bg-[#F3F1FB]'
              onChange={(e) => handleSortingChange(e)}
              value={sortingOption}
            >
              <Option value='datePosted'>Date Posted</Option>
              <Option value='expiringSoonest'>Expiring Soonest</Option>
            </Select>
          </div>
        </div>

        <div className='mt-8'>
          {currentEvents?.length! > 0 ? (
            currentEvents?.map((event) => (
              <div key={event._id}>
                <EventListingCard event={event} />
              </div>
            ))
          ) : (
            <p>Saved events will appear here</p>
          )}
        </div>

        <div className='flex justify-end'>
          <nav className='mt-8'>
            <ul className='flex'>
              {pageNumbers.map((number) => (
                <li key={number}>
                  <button
                    className={`mx-1 flex h-9 w-9 items-center justify-center rounded-full ${
                      currentPage === number
                        ? 'bg-primary text-white shadow-md'
                        : 'border border-blue-gray-100 bg-transparent text-blue-gray-500 hover:bg-light-300'
                    } p-0 text-sm transition duration-150 ease-in-out`}
                    onClick={() => handlePageChange(number)}
                    disabled={currentPage === number}
                  >
                    {number}
                  </button>
                </li>
              ))}
              <li>
                <button
                  className='mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300'
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === pageNumbers.length}
                  aria-label='Next'
                >
                  <span className='material-icons text-sm'>
                    <MdArrowForwardIos />
                  </span>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </div>
  );
}

export default Index;
