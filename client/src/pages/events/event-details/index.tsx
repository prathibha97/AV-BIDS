import EVENTDETAILS_03 from "../../../assets/13_event_details_page/Rectangle 3759.png";
import EVENTDETAILS_02 from "../../../assets/13_event_details_page/carbon_time.png";
import { MdOutlineCancel } from "react-icons/md";
import SPAM_ICON from "../../../assets/13_event_details_page/spam.png";

import { Button, Textarea, Dialog } from "@material-tailwind/react";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Event, UserWithReviewWithEvent } from "../../../types";
import api from "../../../utils/api";
import Attachments from "./components/attachments";
import EventInfo from "./components/event-info";
import EventPlanner from "./components/event-planner";
import OtherEvents from "./components/other-events";
import Spinner from "../../../components/spinner";
import SubmitProposal from "./components/SubmitProposal";

export function Index() {
  const { id } = useParams();
  const [event, setEvent] = useState<Event | null>(null);
  const [userEvents, setUserEvents] = useState<Event[]>([]);
  const [planner, setPlanner] = useState<UserWithReviewWithEvent | null>(null);
  const [loading, setLoading] = useState(false);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  const fetchEventDetails = async () => {
    try {
      setLoading(true);
      const { data } = await api.get(`/events/${id}`);
      setEvent(data);
    } catch (error) {
      console.error("Error fetching event details:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchUserEvents = async (createdBy: string | undefined) => {
    try {
      setLoading(true);
      if (createdBy) {
        const { data } = await api.get(`/events/user/${createdBy}`);
        setUserEvents(data);
      }
    } catch (error) {
      console.error("Error fetching user events:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchEventPlanner = async (createdBy: string | undefined) => {
    try {
      setLoading(true);
      if (createdBy) {
        const { data } = await api.get(`/users/${createdBy}`);
        setPlanner(data);
      }
    } catch (error) {
      console.error("Error fetching planner info:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSaveEvent = async () => {
    try {
      await api.post(`/events/save/${event?._id}`);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchEventDetails();
  }, []);

  useEffect(() => {
    fetchUserEvents(event?.createdBy);
  }, [event?.createdBy]);

  useEffect(() => {
    fetchEventPlanner(event?.createdBy);
  }, [event?.createdBy]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-32">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="mx-auto mt-16">
      <div className="grid lg:grid-cols-3 gap-4 content-center">
        <div className="col-span-2 flex justify-center items-center px-8">
          <section>
            <div>
              <div>
                <h2 className="text-primary text-[40px] mb-4">
                  {event?.title}
                </h2>
              </div>
              <div className="flex items-center mb-4 gap-8">
                <div className="flex items-center gap-2">
                  <img
                    src={EVENTDETAILS_02}
                    alt="aad"
                    className="object-scale-down w-[22px]"
                  />
                  <p>
                    Posted on{" "}
                    {event?.createdAt
                      ? format(new Date(event.createdAt), "M/dd/yyyy")
                      : "N/A"}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <img
                    src={EVENTDETAILS_02}
                    alt="aad"
                    className="object-scale-down w-[22px]"
                  />
                  <p>
                    Updated on{" "}
                    {event?.createdAt
                      ? format(new Date(event.updatedAt), "M/dd/yyyy")
                      : "N/A"}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <p className="font-semibold">Status:</p>
                  <div className="bg-[#FF7256] rounded-full px-4 py-0.5 ">
                    <p className="text-[#fff] text-center">Expired</p>
                  </div>
                </div>
              </div>
              <div className="mb-6">
                <img
                  src={EVENTDETAILS_03}
                  alt="aad"
                  className="object-scale-down"
                />
              </div>
              <div className="bg-[#F3F1FB] p-6 mb-16 rounded-lg">
                <h2 className="text-[20px] mb-4">Description</h2>
                <div
                  dangerouslySetInnerHTML={{ __html: event?.description! }}
                />
              </div>
              <div>
                <h2 className="text-[20px] mb-4">
                  Submit a question about the event
                </h2>
                <p className="text-[20px] mb-2">Description</p>
                <div className="rounded-lg">
                  <div className="mb-6">
                    <Textarea
                      label="Description"
                      className="!bg-[#F3F1FB] border-solid border-2 border-[#E4E4E4]"
                    />
                  </div>

                  <div className="flex justify-end mb-16">
                    <Button
                      variant="filled"
                      color="indigo"
                      size="sm"
                      className="rounded-full w-30 py-3 px-6 mt-4  bg-primary font-poppins"
                    >
                      <span className="text-white normal-case text-[14px]">
                        Submit
                      </span>
                    </Button>
                  </div>
                </div>
              </div>
              <OtherEvents events={userEvents} />
            </div>
          </section>
          {/* ///////////////////////////////// */}
          <section>
            <Dialog open={open} handler={handleOpen} size="xs">
              <div className="flex justify-end p-3">
                <MdOutlineCancel
                  size={32}
                  className="text-black cursor-pointer"
                  onClick={handleOpen}
                />
              </div>
              <SubmitProposal />
            </Dialog>
          </section>
          {/* //////////////////////////////// */}
        </div>
        <div className="flex items-start">
          <section>
            <div className="mb-4">
              <Button
                variant="filled"
                color="indigo"
                size="sm"
                className="rounded-full w-full py-4 mt-4 px-8 bg-primary font-poppins"
                onClick={handleOpen}
              >
                <span className="text-white normal-case text-[14px]">
                  Submit Proposal
                </span>
              </Button>

              {/* <div>
                <p>hello</p>
                <Dragdrop />
              </div> */}

              <Button
                variant="outlined"
                size="sm"
                className="rounded-full w-full py-4 mt-4 px-8 font-poppins"
                onClick={() => handleSaveEvent()}
              >
                <span className=" text-black normal-case text-[14px]">
                  Save Event
                </span>
              </Button>
            </div>

            <div className="flex items-center justify-center gap-3 mb-6 ">
              <img
                src={SPAM_ICON}
                alt="aad"
                className="object-scale-down w-[24px]"
              />
              <p className="text-[18px] underline">Flag as spam</p>
            </div>
            <EventInfo event={event} />
            <Attachments event={event} />
            <EventPlanner planner={planner} />
          </section>
        </div>
      </div>
    </div>
  );
}

export default Index;
