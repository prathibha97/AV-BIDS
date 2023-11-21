import { Option, Select } from '@material-tailwind/react';
import EventLists from './components/eventLists';
import Sidebar from './components/sidebar';

export function Index() {
  return (
    <div>
      <div>
        <h2 className='text-center text-primary mb-16'>Event Listings</h2>
      </div>

      <div className='flex justify-center gap-8'>
        <div>{<Sidebar />}</div>

        <div>
          <div className='flex items-center justify-between mb-6 mx-4'>
            <p className='text-[14px]'>500 events Found</p>

            <div className='w-[200px] '>
              <Select label='Sort: Ending Soonest '>
                <Option>Ending Soonest</Option>
                <Option>Budget Lowest</Option>
                <Option>Budget Highest</Option>
                <Option>Audience Size Lowest</Option>
                <Option>Audience Size Highest</Option>
              </Select>
            </div>
          </div>

          <EventLists />
          <EventLists />
          <EventLists />
          <EventLists />
          <EventLists />
          <EventLists />
        </div>
      </div>
    </div>
  );
}

export default Index;
