import { Card, Option, Select, Typography } from "@material-tailwind/react";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setEvent } from "../../../app/features/events/eventSlice";
import { useAppSelector } from "../../../app/hooks";
import { RootState } from "../../../app/store";
import { Event } from "../../../types";
import api from "../../../utils/api";
import Spinner from "../../../components/spinner";

import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

const TABLE_HEAD = ["Title", "Event Created", "Proposals", ""];

function Index() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useAppSelector((state: RootState) => state.user.user);

  const [myEvents, setMyEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMyEvents = async () => {
      try {
        const { data } = await api.get(`/events/user/${user?._id}`);
        setMyEvents(data);
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMyEvents();
  }, [user?._id]);

  const handleEdit = (event: Event) => {
    dispatch(setEvent(event));
    navigate(`/events/edit/${event._id}`);
  };
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
        {loading ? (
          <div className="flex items-center justify-center h-32">
            <Spinner />
          </div>
        ) : myEvents.length === 0 ? (
          <p>No events found.</p>
        ) : (
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
                {Array.isArray(myEvents) &&
                  myEvents?.map((event, index) => {
                    return (
                      <tr key={event._id}>
                        <td
                          className="p-4 border-b border-blue-gray-50 cursor-pointer"
                          onClick={() => navigate(`/events/${event._id}`)}
                        >
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {event.title}
                            <div>
                              <div className="rounded-full w-20 py-1 bg-[#E4FFEA] font-poppins">
                                <p className="text-black text-center text-[12px] font-semibold">
                                  {event.eventType}
                                </p>
                              </div>
                            </div>
                          </Typography>
                        </td>
                        <td className="p-4 border-b border-blue-gray-50">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {format(new Date(event.createdAt), "dd MMM yyyy")}
                          </Typography>
                        </td>
                        <td className="p-4 border-b border-blue-gray-50">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {/* {date} */}
                            <p>10 Proposals</p>
                          </Typography>
                        </td>
                        <td className="p-4 border-b border-blue-gray-50">
                          <Typography
                            as="a"
                            variant="small"
                            color="blue-gray"
                            className="font-medium cursor-pointer"
                            onClick={() => handleEdit(event)}
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
        )}

        <div className="flex justify-end">
          <nav className="mt-8">
            <ul className="flex">
              <li>
                <a
                  className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300"
                  href="#"
                  aria-label="Previous"
                >
                  <span className="material-icons text-sm">
                    <MdArrowBackIosNew />
                  </span>
                </a>
              </li>
              <li>
                <a
                  className="mx-1 flex h-9 w-9 items-center justify-center rounded-full bg-primary p-0 text-sm text-white shadow-md transition duration-150 ease-in-out"
                  href="#"
                >
                  1
                </a>
              </li>
              <li>
                <a
                  className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300"
                  href="#"
                >
                  2
                </a>
              </li>
              <li>
                <a
                  className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300"
                  href="#"
                >
                  3
                </a>
              </li>
              <li>
                <a
                  className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300"
                  href="#"
                  aria-label="Next"
                >
                  <span className="material-icons text-sm">
                    <MdArrowForwardIos />
                  </span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </div>
  );
}

export default Index;
