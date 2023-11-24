import { Avatar } from "@material-tailwind/react";
import PROFILE_PHOTO from "../../../assets/14_messages/profile photo.jpg";
import { FC, useEffect, useState } from "react";
import { User, Conversation } from "../../../types";
import api from "../../../utils/api";
import Spinner from "../../../components/spinner";

interface MessageHeaderProps {
  currentUser: User | null;
  conversation: Conversation;
}

const MessageHeader: FC<MessageHeaderProps> = ({
  conversation,
  currentUser,
}) => {
  const [otherUser, setOtherUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const otherMember = conversation.members.filter(
    (member) => member !== currentUser?._id
  );

  useEffect(() => {
    const fetchOtherUser = async () => {
      try {
        const { data } = await api.get(`/users/${otherMember}`);
        setOtherUser(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchOtherUser();
  }, [conversation]);

  return (
    <div className="border-b border-[#EDECF1] row-span-1 p-4 ">
      {loading ? (
        <div className="flex items-center justify-center h-32">
          <Spinner />
        </div>
      ) : (
        <div className="flex items-center gap-4">
          <Avatar
            variant="circular"
            size="sm"
            alt="avatar"
            className="border border-gray-900"
            src={PROFILE_PHOTO}
          />

          <div className="flex flex-col">
            <h2 className="text-[20px] font-semibold">
              {otherUser?.firstName} {otherUser?.lastName}
            </h2>
            <p>ACME AV</p>
            <p>Subject: AV Requirements</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MessageHeader;
