import { Option, Select } from '@material-tailwind/react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Event } from '../../types';
import api from '../../utils/api';
import EventListingCard from './components/eventListingCard';
import Sidebar from './components/sidebar';
import Pagination from '../../components/pagination';

export function Index() {
  const navigate = useNavigate();
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedSortOption, setSelectedSortOption] = useState<string>('');

  const [selectedEventType, setSelectedEventType] = useState<string[]>([]);
  const [selectedEventCategory, setSelectedEventCategory] = useState<string[]>(
    []
  );
  const [selectedPriceRange, setSelectedPriceRange] = useState<string[]>([]);
  const [selectedAudienceSize, setSelectedAudienceSize] = useState<string[]>(
    []
  );
  const [selectedEventSubCategory, setSelectedEventSubCategory] =
    useState<string>('');

  const [currentPage, setCurrentPage] = useState(1);

  const eventsPerPage = 10;

  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;

  let currentEvents = events?.slice(indexOfFirstEvent, indexOfLastEvent);

  useEffect(() => {
    setCurrentPage(1);
  }, [events]);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    applyFilters({
      eventType: selectedEventType,
      eventCategory: selectedEventCategory,
      eventSubCategory: selectedEventSubCategory,
      priceRange: selectedPriceRange,
      audienceSize: selectedAudienceSize,
      sortOption: selectedSortOption,
    });
  }, [
    selectedEventType,
    selectedEventCategory,
    selectedEventSubCategory,
    selectedPriceRange,
    selectedAudienceSize,
    selectedSortOption,
  ]);

  const applyFilters = async (filters: any) => {
    try {
      setLoading(true);

      // Check if the value is truthy before including it in the API call
      const filteredParams = Object.fromEntries(
        Object.entries(filters).filter(([key, value]) => Boolean(value))
      );

      const { data } = await api.get('/events', { params: filteredParams });
      setEvents(data);
    } catch (error) {
      console.log('API Error:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p>Loading...</p>;
  return (
    <div>
      <div>
        <h2 className='text-center text-primary mb-16'>Event Listings</h2>
      </div>

      <div className='flex justify-center gap-8'>
        <Sidebar
          selectedEventType={selectedEventType}
          setSelectedEventType={setSelectedEventType}
          selectedEventCategory={selectedEventCategory}
          setSelectedEventCategory={setSelectedEventCategory}
          selectedEventSubCategory={selectedEventSubCategory}
          setSelectedEventSubCategory={setSelectedEventSubCategory}
          selectedPriceRange={selectedPriceRange}
          setSelectedPriceRange={setSelectedPriceRange}
          selectedAudienceSize={selectedAudienceSize}
          setSelectedAudienceSize={setSelectedAudienceSize}
          applyFilters={applyFilters}
        />

        <div>
          <div className='flex items-center justify-between mb-6 mx-4'>
            <p className='text-[14px]'>{events.length} events Found</p>

            <div className='w-[200px] '>
              <Select
                label='Sort: Ending Soonest'
                value={selectedSortOption}
                onChange={(value: any) => setSelectedSortOption(value)}
              >
                <Option value='Ending Soonest'>Ending Soonest</Option>
                <Option value='Budget Lowest'>Budget Lowest</Option>
                <Option value='Budget Highest'>Budget Highest</Option>
                <Option value='Audience Size Lowest'>
                  Audience Size Lowest
                </Option>
                <Option value='Audience Size Highest'>
                  Audience Size Highest
                </Option>
              </Select>
            </div>
          </div>
          {currentEvents?.map((event) => (
            <div
              key={event._id}
              className='hover:cursor-pointer'
              onClick={() => navigate(`/events/${event._id}`)}
            >
              <EventListingCard event={event} />
            </div>
          ))}
        <div className='flex justify-end mr-5'>
          <Pagination
            currentPage={currentPage}
            totalItems={events.length || 0}
            itemsPerPage={eventsPerPage}
            onPageChange={handlePageChange}
          />
        </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
