import React from "react";
import { Button } from "@material-tailwind/react";

import { Card, Typography, Select, Option } from "@material-tailwind/react";

const TABLE_HEAD = ["Title", "Event Created", "Proposals", ""];

const TABLE_ROWS = [
  {
    name: "General Session & 4 Breakouts",
    job: "13 Aug, 2022",
    date: "130 Proposals",
  },
  {
    name: "Alexa Liras",
    job: "13 Aug, 2022",
    date: "130 Proposals",
  },
  {
    name: "Laurent Perrier",
    job: "13 Aug, 2022",
    date: "130 Proposals",
  },
  {
    name: "Michael Levi",
    job: "13 Aug, 2022",
    date: "130 Proposals",
  },
  {
    name: "Richard Gran",
    job: "13 Aug, 2022",
    date: "130 Proposals",
  },
];

function index() {
  return (
    // <div>event_planner</div>
    <div className="container mx-auto">
      <section className="bg-[#fff] px-8 py-8 rounded-xl drop-shadow mb-6">
        <div className="flex items-center justify-between mb-4 ">
          <h2 className="text-[20px] font-semibold ">My Events</h2>
          <div className="">
            <Select label="Sort: Active" className="rounded-lg bg-[#F3F1FB]">
              <Option>Date Posted</Option>
              <Option>Expiring Soonest</Option>
              <Option>Active</Option>
            </Select>
          </div>
        </div>
        <Card className="h-full w-full shadow-none rounded-full">
          <table className="w-full min-w-max table-auto text-left ">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-b border-blue-gray-100 bg-blue-gray-50 p-4 bg-[#e7daff]"
                  >
                    <p className="font-medium leading-none text-black text-[14px]">
                      {head}
                    </p>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TABLE_ROWS.map(({ name, job, date }, index) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={name}>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {name}
                        <div>
                          <div className="rounded-full w-20 py-1 bg-[#E4FFEA] font-poppins">
                            <p className="text-black text-[#178751] text-center text-[12px] font-semibold">
                              In-Person
                            </p>
                          </div>
                        </div>
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {job}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {date}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        as="a"
                        href="#"
                        variant="small"
                        color="blue-gray"
                        className="font-medium"
                      >
                        Edit
                      </Typography>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Card>
      </section>
    </div>
  );
}

export default index;
