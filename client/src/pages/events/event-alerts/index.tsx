import {
  Card,
  Typography,
  Popover,
  PopoverHandler,
  PopoverContent,
  Select,
  Option,
} from "@material-tailwind/react";

import {
  MdMoreVert,
  MdOutlineRemoveRedEye,
  MdDeleteOutline,
} from "react-icons/md";

import Breadcrumbs from "../../../components/Breadcrumbs";

const TABLE_HEAD = ["Title", "Event Created", "Expires", "Update", ""];

const TABLE_ROWS = [
  {
    name: "General Session & 4 Breakouts",
    job: "13 Aug, 2022",
    date: "24 Aug, 2022",
    update: "New Updates",
  },
  {
    name: "General Session & 4 Breakouts",
    job: "13 Aug, 2022",
    date: "24 Aug, 2022",
    update: "New Updates",
  },
  {
    name: "General Session & 4 Breakouts",
    job: "13 Aug, 2022",
    date: "24 Aug, 2022",
    update: "New Updates",
  },
  {
    name: "General Session & 4 Breakouts",
    job: "13 Aug, 2022",
    date: "24 Aug, 2022",
    update: "New Updates",
  },
  {
    name: "General Session & 4 Breakouts",
    job: "13 Aug, 2022",
    date: "24 Aug, 2022",
    update: "New Updates",
  },
];
function index() {
  return (
    <div className="w-full">
      <Breadcrumbs />

      <section className="bg-[#fff] px-8 py-8 rounded-xl drop-shadow mb-6 mx-2">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-[20px] font-semibold mb-4">
            Billing & Membership
          </h2>
          <div className="w-[200px]">
            <Select
              label="Sort: Date Posted"
              className="bg-[#F3F1FB] w-[200px]"
            >
              <Option>Date Posted</Option>
              <Option>Expiring Soonest</Option>
            </Select>
          </div>
        </div>

        <Card className="w-full shadow-none">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-b border-blue-gray-100 bg-blue-gray-50 p-4 bg-[#e7daff]"
                  >
                    <Typography
                      variant="small"
                      className="font-medium leading-none !text-[#000]"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TABLE_ROWS.map(({ name, job, date, update }, index) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={name}>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="black"
                        className="font-bold !text-[#000]"
                      >
                        {name}
                        <p className="text-[#178751] bg-[#E4FFEA] w-max px-3 py-1 rounded-full mt-2 font-semibold">
                          In-Person
                        </p>
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
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {update}
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
                        <Popover placement="bottom-start">
                          <PopoverHandler>
                            <div>
                              <MdMoreVert className="text-[18px]" />
                            </div>
                          </PopoverHandler>
                          <PopoverContent>
                            <div>
                              <div className="flex items-center gap-2 mb-3">
                                <MdOutlineRemoveRedEye className="text-[20px]" />
                                <p>View</p>
                              </div>

                              <div className="flex items-center gap-2">
                                <MdDeleteOutline className="text-[20px]" />
                                <p>Delete</p>
                              </div>
                            </div>
                          </PopoverContent>
                        </Popover>
                      </Typography>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Card>

        <div className="flex justify-end"></div>
      </section>
    </div>
  );
}

export default index;
