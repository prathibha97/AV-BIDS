import { Option, Select } from '@material-tailwind/react';
import { useEffect, useState } from 'react';
import { useGetCurrentUser } from '../../../app/hooks/useUser';
import Pagination from '../../../components/pagination';
import EventListingCard from './components/eventListingCard';

function Index() {
  const user = useGetCurrentUser();
  const [currentPage, setCurrentPage] = useState(1);
  const [sortingOption, setSortingOption] = useState('datePosted'); // Default sorting option
  const eventsPerPage = 5;

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

  const handlePageChange = (pageNumber: number) => {
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
          <Pagination
            currentPage={currentPage}
            totalItems={user?.savedEvents?.length || 0}
            itemsPerPage={eventsPerPage}
            onPageChange={handlePageChange}
          />
        </div>
      </section>
    </div>
  );
}

export default Index;
