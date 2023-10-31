import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Checkbox,
  Select,
  Option,
  Button,
} from "@material-tailwind/react";

import EVENTS_01 from "../../assets/09_events/events01.png";
import EVENTS_02 from "../../assets/09_events/location.png";

export function index() {
  return (
    <div>
      <div>
        <h2 className="text-center text-primary mb-16">Event Listings</h2>
      </div>
      <div className="flex justify-center w-full gap-8 mb-6">
        <Card className="h-[calc(125vh-2rem)] w-full max-w-[20rem] p-4  bg-[#F3F1FB]">
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
        </Card>

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
          <div className="flex items-center justify-center bg-[#fff] drop-shadow gap-8 p-8 h-40 rounded-lg w-max">
            <div>
              <img
                src={EVENTS_01}
                alt="aad"
                className="object-scale-down w-[73px]"
              />
            </div>

            <div>
              <h2 className="text-[20px]">General Session & 4 Breakouts</h2>

              <div className="flex gap-36">
                <p className="text-[18px]">
                  Event Date: 10/10/2023 - 10/15/2023
                </p>
                <p className="text-[18px]">$70,000 - $150,000</p>
              </div>

              <div className="flex items-center gap-16 mt-4">
                <div className="flex gap-8 items-center">
                  <img
                    src={EVENTS_02}
                    alt="aad"
                    className="object-scale-down w-[20px]"
                  />
                  <p className="text-[16px] text-[#9381FF]">Phoenix, Arizona</p>
                </div>

                <p className="text-[16px]">Corporate, General Meeting</p>
                <Button
                  variant="filled"
                  color="green"
                  size="sm"
                  className="rounded-full w-30 py-2 px-3 bg-[#B5F9C4] font-poppins"
                >
                  <h2 className="text-[#178751] text-[12px]">Virtual</h2>
                </Button>
              </div>
            </div>

            <div className="ml-24">
              <Button
                variant="filled"
                color="indigo"
                size="sm"
                className="rounded-md w-36 py-4 mt-4 px-8 bg-primary font-poppins"
              >
                <span className="text-white">Apply Now</span>
              </Button>
              <p className="text-[16px] mt-4">23 days left to apply</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
