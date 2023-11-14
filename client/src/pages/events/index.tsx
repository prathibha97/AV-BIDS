import Sidebar from "./components/sidebar";
import EventLists from "./components/eventLists";
import { Select, Option, Button } from "@material-tailwind/react";

export function index() {
  return (
    <div>
      <div>
        <h2 className="text-center text-primary mb-16">Event Listings</h2>
      </div>

      <div className="flex justify-center gap-8">
        {/* <Card className="h-[calc(125vh-2rem)] w-full max-w-[20rem] p-4  bg-[#F3F1FB]">
          <div className="mb-2 p-4">
            <div className="mb-4">
              <h6>Event Type</h6>
              <div className="flex  items-center">
                <Checkbox defaultChecked crossOrigin="" />{" "}
                <span>In-Person</span>
              </div>
              <div className="flex  items-center">
                <Checkbox defaultChecked crossOrigin="" /> <span>Virtual</span>
              </div>
              <div className="flex  items-center">
                <Checkbox defaultChecked crossOrigin="" /> <span>Hybrid</span>
              </div>
            </div>

            <div className="mb-4">
              <h6>Event Categories</h6>
              <div className="flex  items-center">
                <Checkbox defaultChecked crossOrigin="" />{" "}
                <span>Corporate</span>
              </div>
              <div className="flex  items-center">
                <Checkbox defaultChecked crossOrigin="" />{" "}
                <span>Non-Corporate</span>
              </div>
            </div>

            <div className="mb-4">
              <h6 className="mb-4">Coporate Categories</h6>
              <div className="w-72">
                <Select label="Select Version">
                  <Option>All</Option>
                  <Option>Awards</Option>
                  <Option>Banquet</Option>
                  <Option>Board Meeting</Option>
                  <Option>Breakout Session</Option>
                </Select>
              </div>
            </div>

            <div className="mb-4">
              <h6>Price Range</h6>
              <div className="flex  items-center">
                <Checkbox defaultChecked crossOrigin="" /> <span>$70,000</span>
              </div>
              <div className="flex  items-center">
                <Checkbox defaultChecked crossOrigin="" />
                <span>$70,000 - $150,000</span>
              </div>
              <div className="flex  items-center">
                <Checkbox defaultChecked crossOrigin="" />
                <span>$150,000 - $500,000</span>
              </div>
              <div className="flex  items-center">
                <Checkbox defaultChecked crossOrigin="" />
                <span>$150,000 - $1,000,000</span>
              </div>
              <div className="flex  items-center">
                <Checkbox defaultChecked crossOrigin="" />{" "}
                <span>$1,000,000+</span>
              </div>
            </div>

            <div>
              <h6>Audience Size </h6>
              <div className="flex  items-center">
                <Checkbox defaultChecked crossOrigin="" /> <span>Any</span>
              </div>
              <div className="flex  items-center">
                <Checkbox defaultChecked crossOrigin="" />
                <span>10 - 100</span>
              </div>
              <div className="flex  items-center">
                <Checkbox defaultChecked crossOrigin="" />
                <span>100 - 250</span>
              </div>
              <div className="flex  items-center">
                <Checkbox defaultChecked crossOrigin="" />
                <span>250 - 750</span>
              </div>
              <div className="flex  items-center">
                <Checkbox defaultChecked crossOrigin="" />
                <span>750 - 1,500</span>
              </div>

              <div className="flex  items-center">
                <Checkbox defaultChecked crossOrigin="" />
                <span>1,500 - 5,000</span>
              </div>

              <div className="flex  items-center">
                <Checkbox defaultChecked crossOrigin="" />
                <span>5,000 - 10,000</span>
              </div>

              <div className="flex  items-center">
                <Checkbox defaultChecked crossOrigin="" />
                <span>over 10,000</span>
              </div>
            </div>

            <div>
              <Button
                variant="filled"
                color="indigo"
                size="sm"
                className="rounded-md  py-4 mt-4 px-8 bg-primary font-poppins"
              >
                <span className="text-white">Apply Filters</span>
              </Button>
            </div>
          </div>
        </Card> */}

        <div className="hidden sm:block">
          <Sidebar />
        </div>

        <div>
          <div className="flex justify-between items-center mb-6">
            <p>500 events Found</p>
            <div className="w-[200px]">
              <Select label="Sort: Ending Soonest ">
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

export default index;
