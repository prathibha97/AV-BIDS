import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import {
  Card,
  Typography,
  Button,
  CardBody,
  CardFooter,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";

import FolderIcon from "../../../assets/proposals-tab/folder icon.png";
const TABLE_HEAD = ["Name", "Company", "Submitted", "Preview", "Download"];

const TABLE_ROWS = [
  {
    name: "av_proposal.pdf",
    company: "Standard AV LLC",
    submitted: "2021-11-04",
    time: "11:54",
  },
  {
    name: "llc_event.pdf",
    company: "ACME AV INC.",
    submitted: "2021-11-03",
    time: "22:00",
  },
  {
    name: "eventproposal.pdf",
    company: "American AV LLC",
    submitted: "2021-11-02",
    time: "11:09",
  },
  {
    name: "event_prop1.pdf",
    company: "Corporate AV Group",
    submitted: "2021-10-31",
    time: "17:24",
  },
];

export function Proposals_table() {
  return (
    <Card className="h-full w-full !shadow-none">
      <CardBody className="px-0 py-2">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS.map(({ name, company, submitted, time }, index) => {
              const isLast = index === TABLE_ROWS.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={name}>
                  <td className={classes}>
                    <div className="flex items-center gap-3">
                      <img src={FolderIcon} alt="" className="!rounded-none" />
                      <div className="flex flex-col">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {name}
                        </Typography>
                      </div>
                    </div>
                  </td>
                  <td className={classes}>
                    <div className="flex flex-col">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {company}
                      </Typography>
                    </div>
                  </td>
                  <td className={classes}>
                    <div className="w-max">
                      <div className="flex items-center gap-2">
                        {" "}
                        <div>{submitted}</div>
                        <div>{time}</div>
                      </div>
                    </div>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      <Button className="normal-case bg-[#4676FB]">View</Button>
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Tooltip content="Edit User">
                      <IconButton variant="text">
                        <Button className="normal-case bg-[#4676FB]">
                          Download
                        </Button>
                      </IconButton>
                    </Tooltip>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </CardBody>
      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Typography variant="small" color="blue-gray" className="font-normal">
          Page 1 of 10
        </Typography>
        <div className="flex gap-2">
          <Button variant="outlined" size="sm">
            Previous
          </Button>
          <Button variant="outlined" size="sm">
            Next
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}

export default Proposals_table;
