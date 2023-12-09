import { useState } from "react";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
} from "@material-tailwind/react";

import { MdNotifications } from "react-icons/md";
import { MdLens } from "react-icons/md";
interface NotificationStates {
  notification1: boolean;
  notification2: boolean;
  notification3: boolean;
  notification4: boolean;
}

export function Notification_bell() {
  const [unreadCount, setUnreadCount] = useState(2);

  const [notificationStates, setNotificationStates] =
    useState<NotificationStates>({
      notification1: true,
      notification2: false,
      notification3: true,
      notification4: false,
    });

  const markNotificationAsRead = (notificationKey: string) => {
    if ((notificationStates as any)[notificationKey]) {
      setUnreadCount((prevCount) => prevCount - 1);
    }

    setNotificationStates((prevState) => ({
      ...prevState,
      [notificationKey]: false,
    }));
  };

  return (
    <Popover placement="top-end">
      <PopoverHandler>
        {/* <Button>
          Popover
          {unreadCount > 0 && (
            <span className="ml-2 bg-red-500 rounded-full px-2">
              {unreadCount}
            </span>
          )}
        </Button> */}

        <div className="relative">
          {unreadCount > 0 && (
            <span className="bg-red-500 text-white rounded-full px-2 py-0.5 absolute top-0 right-0 -mt-1 -mr-1 text-[12px]">
              {unreadCount}
            </span>
          )}

          <MdNotifications className="text-[35px] text-black" />
        </div>
      </PopoverHandler>
      <PopoverContent>
        <div className="bg-[#334434] cursor-pointer">
          <div
            onClick={() => markNotificationAsRead("notification1")}
            className={`p-3 ${
              notificationStates.notification1 ? "bg-[#F3F1FB]" : "bg-white"
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-1">
                <p className="text-[#909090] text-[14px]">Bruce Wayne</p>
                <div className="flex items-center gap-1">
                  <p className="text-[#000] text-[14px] font-medium">Today</p>

                  <MdLens className="text-[6px]" />
                </div>
              </div>

              <p className="text-[#000] text-[16px] font-medium mb-1">
                Created a new event #05
              </p>
              <p className="text-[#909090] text-[14px]">AV Bids</p>
            </div>
          </div>
          <div
            onClick={() => markNotificationAsRead("notification2")}
            className={`p-3 ${
              notificationStates.notification2 ? "bg-[#F3F1FB]" : "bg-white"
            }`}
          >
            Notification 02
          </div>
          <div
            onClick={() => markNotificationAsRead("notification3")}
            className={`p-3 ${
              notificationStates.notification3 ? "bg-[#F3F1FB]" : "bg-white"
            }`}
          >
            Notification 03
          </div>
          <div
            onClick={() => markNotificationAsRead("notification4")}
            className={`p-3 ${
              notificationStates.notification4 ? "bg-[#F3F1FB]" : "bg-white"
            }`}
          >
            Notification 04
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

export default Notification_bell;
