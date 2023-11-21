import {
  Button,
  Card,
  Checkbox,
  Option,
  Select,
} from '@material-tailwind/react';
import { FC } from 'react';

interface SidebarProps {
  selectedEventType: string[];
  setSelectedEventType: React.Dispatch<React.SetStateAction<string[]>>;
  selectedEventCategory: string[];
  setSelectedEventCategory: React.Dispatch<React.SetStateAction<string[]>>;
  selectedPriceRange: string[];
  setSelectedPriceRange: React.Dispatch<React.SetStateAction<string[]>>;
  selectedAudienceSize: string[];
  setSelectedAudienceSize: React.Dispatch<React.SetStateAction<string[]>>;
  applyFilters: (filters: any) => void;
  selectedEventSubCategory: string;
  setSelectedEventSubCategory: React.Dispatch<React.SetStateAction<string>>;
}

const Sidebar: FC<SidebarProps> = ({
  applyFilters,
  selectedAudienceSize,
  selectedEventCategory,
  selectedEventType,
  selectedPriceRange,
  setSelectedAudienceSize,
  setSelectedEventCategory,
  setSelectedEventType,
  setSelectedPriceRange,
  selectedEventSubCategory,
  setSelectedEventSubCategory,
}) => {
  const handleCheckboxChange = (value: any, setState: any, state: any) => {
    console.log('Before Update:', state);
    const updatedState = [...state];
    const index = updatedState.indexOf(value);

    if (index === -1) {
      updatedState.push(value);
    } else {
      updatedState.splice(index, 1);
    }
    console.log('After Update:', updatedState);
    setState(updatedState);
  };


  // Apply filters button click handler
  const handleApplyFilters = () => {
    applyFilters({
      eventType: selectedEventType,
      eventCategory: selectedEventCategory,
      eventSubCategory: selectedEventSubCategory,
      priceRange: selectedPriceRange,
      audienceSize: selectedAudienceSize,
    });
  };
  return (
    <div className='mb-6'>
      <h2 className='text-primary text-[16px] mb-2'>Filters: </h2>
      <Card className='h-[calc(125vh-2rem)] w-full max-w-[18rem] p-4  bg-[#F3F1FB]'>
        <div className='mb-2 p-4'>
          <div className='mb-4'>
            <h6>Event Type</h6>
            <div className='flex  items-center'>
              <Checkbox
                defaultChecked
                crossOrigin=''
                checked={selectedEventType.includes('In-Person')}
                onChange={() =>
                  handleCheckboxChange(
                    'In-Person',
                    setSelectedEventType,
                    selectedEventType
                  )
                }
              />{' '}
              <span>In-Person</span>
            </div>
            <div className='flex  items-center'>
              <Checkbox
                defaultChecked
                crossOrigin=''
                checked={selectedEventType.includes('Virtual')}
                onChange={() =>
                  handleCheckboxChange(
                    'Virtual',
                    setSelectedEventType,
                    selectedEventType
                  )
                }
              />{' '}
              <span>Virtual</span>
            </div>
            <div className='flex  items-center'>
              <Checkbox
                defaultChecked
                crossOrigin=''
                checked={selectedEventType.includes('Hybrid')}
                onChange={() =>
                  handleCheckboxChange(
                    'Hybrid',
                    setSelectedEventType,
                    selectedEventType
                  )
                }
              />{' '}
              <span>Hybrid</span>
            </div>
          </div>

          <div className='mb-4'>
            <h6>Event Categories</h6>
            <div className='flex  items-center'>
              <Checkbox
                defaultChecked
                crossOrigin=''
                checked={selectedEventCategory.includes('Corporate')}
                onChange={() =>
                  handleCheckboxChange(
                    'Corporate',
                    setSelectedEventCategory,
                    selectedEventCategory
                  )
                }
              />{' '}
              <span>Corporate</span>
            </div>
            <div className='flex  items-center'>
              <Checkbox
                defaultChecked
                crossOrigin=''
                checked={selectedEventCategory.includes('Non-Corporate')}
                onChange={() =>
                  handleCheckboxChange(
                    'Non-Corporate',
                    setSelectedEventCategory,
                    selectedEventCategory
                  )
                }
              />{' '}
              <span>Non-Corporate</span>
            </div>
          </div>

          <div className='mb-4'>
            <h6 className='mb-4'>Coporate Categories</h6>
            <div className='w-full '>
              <Select
                label='Select Sub Category'
                className='bg-white'
                value={selectedEventSubCategory}
                onChange={(value:any) => setSelectedEventSubCategory(value)}
              >
                <Option value=''>All</Option>
                <Option value='Awards'>Awards</Option>
                <Option value='Banquet'>Banquet</Option>
                <Option value='Board Meeting'>Board Meeting</Option>
                <Option value='Breakout Session'>Breakout Session</Option>
              </Select>
            </div>
          </div>

          <div className='mb-4'>
            <h6>Price Range</h6>
            <div className='flex  items-center'>
              <Checkbox
                defaultChecked
                crossOrigin=''
                checked={selectedPriceRange.includes('$70,000')}
                onChange={() =>
                  handleCheckboxChange(
                    '$70,000',
                    setSelectedPriceRange,
                    selectedPriceRange
                  )
                }
              />{' '}
              <span>$70,000</span>
            </div>
            <div className='flex  items-center'>
              <Checkbox
                defaultChecked
                crossOrigin=''
                checked={selectedPriceRange.includes('$70,000 - $150,000')}
                onChange={() =>
                  handleCheckboxChange(
                    '$70,000 - $150,000',
                    setSelectedPriceRange,
                    selectedPriceRange
                  )
                }
              />
              <span>$70,000 - $150,000</span>
            </div>
            <div className='flex  items-center'>
              <Checkbox
                defaultChecked
                crossOrigin=''
                checked={selectedPriceRange.includes('$150,000 - $500,000')}
                onChange={() =>
                  handleCheckboxChange(
                    '$150,000 - $500,000',
                    setSelectedPriceRange,
                    selectedPriceRange
                  )
                }
              />
              <span>$150,000 - $500,000</span>
            </div>
            <div className='flex  items-center'>
              <Checkbox
                defaultChecked
                crossOrigin=''
                checked={selectedPriceRange.includes('$150,000 - $1,000,000')}
                onChange={() =>
                  handleCheckboxChange(
                    '$150,000 - $1,000,000',
                    setSelectedPriceRange,
                    selectedPriceRange
                  )
                }
              />
              <span>$150,000 - $1,000,000</span>
            </div>
            <div className='flex  items-center'>
              <Checkbox
                defaultChecked
                crossOrigin=''
                checked={selectedPriceRange.includes('$1,000,000+')}
                onChange={() =>
                  handleCheckboxChange(
                    '$1,000,000+',
                    setSelectedPriceRange,
                    selectedPriceRange
                  )
                }
              />{' '}
              <span>$1,000,000+</span>
            </div>
          </div>

          <div>
            <h6>Audience Size </h6>
            <div className='flex  items-center'>
              <Checkbox defaultChecked crossOrigin='' /> <span>Any</span>
            </div>
            <div className='flex  items-center'>
              <Checkbox defaultChecked crossOrigin='' />
              <span>10 - 100</span>
            </div>
            <div className='flex  items-center'>
              <Checkbox defaultChecked crossOrigin='' />
              <span>100 - 250</span>
            </div>
            <div className='flex  items-center'>
              <Checkbox defaultChecked crossOrigin='' />
              <span>250 - 750</span>
            </div>
            <div className='flex  items-center'>
              <Checkbox defaultChecked crossOrigin='' />
              <span>750 - 1,500</span>
            </div>

            <div className='flex  items-center'>
              <Checkbox defaultChecked crossOrigin='' />
              <span>1,500 - 5,000</span>
            </div>

            <div className='flex  items-center'>
              <Checkbox defaultChecked crossOrigin='' />
              <span>5,000 - 10,000</span>
            </div>

            <div className='flex  items-center'>
              <Checkbox defaultChecked crossOrigin='' />
              <span>over 10,000</span>
            </div>
          </div>

          <div>
            <Button
              variant='filled'
              color='indigo'
              size='sm'
              className='rounded-md  py-2 mt-4 px-6 bg-primary font-poppins'
              onClick={handleApplyFilters}
            >
              <span className='text-white normal-case'>Apply Filters</span>
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Sidebar;
