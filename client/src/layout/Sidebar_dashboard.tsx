import React from "react";
import { Typography, Card } from "@material-tailwind/react";
import {
  UserCircleIcon,
  Cog6ToothIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";

import { List, ListItem, ListItemPrefix } from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  InboxIcon,
} from "@heroicons/react/24/solid";

import DASHBOARD from "../assets/sidebar/dashboard.png";
import EVENT from "../assets/sidebar/my events.png";
import MESSAGES from "../assets/sidebar/message.png";

export function Sidebar_dashboard() {
  return (
    <div>
      <Card className="h-[calc(100vh-2rem)] w-full max-w-[15rem] p-4 bg-[#fff]">
        <div className="mb-2 p-4">
          <Typography variant="h5" color="blue-gray">
            Sidebar
          </Typography>
        </div>
        <List>
          <ListItem>
            <ListItemPrefix>
              <img
                src={DASHBOARD}
                alt="aad"
                className="object-scale-down w-[18px]"
              />
            </ListItemPrefix>
            Dashboard
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <img
                src={EVENT}
                alt="aad"
                className="object-scale-down w-[18px]"
              />
            </ListItemPrefix>
            My Event
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <img
                src={MESSAGES}
                alt="aad"
                className="object-scale-down w-[18px]"
              />
            </ListItemPrefix>
            Messages
          </ListItem>
          {/* <ListItem>
            <ListItemPrefix>
              <UserCircleIcon className="h-5 w-5" />
            </ListItemPrefix>
            Profile
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <Cog6ToothIcon className="h-5 w-5" />
            </ListItemPrefix>
            Settings
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <PowerIcon className="h-5 w-5" />
            </ListItemPrefix>
            Log Out
          </ListItem> */}
        </List>
      </Card>
      ;
    </div>
  );
}
