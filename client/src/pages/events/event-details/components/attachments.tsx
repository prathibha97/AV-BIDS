import { FC } from "react";
import DOWN_ARROW from "../../../../assets/13_event_details_page/down-arrow.png";
import { Event } from "../../../../types";

interface AttachmentsProps {
  event: Event | null;
}

const Attachments: FC<AttachmentsProps> = ({ event }) => {
  const handleDownload = (fileUrl: string, fileName: string) => {
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;
    link.click();
  };

  return (
    <div className="bg-[#F3F1FB] mt-8 p-6 rounded-lg">
      <h2 className="text-[18px] sm:text-[20px]">Attachments</h2>

      {event?.files?.map((file) => (
        <div
          key={file._id}
          className="flex items-center gap-20 bg-[#fff] rounded-lg p-6 mb-4"
        >
          <p className="text-[18px]">{file.fileName}</p>
          <button
            className="flex items-center justify-center rounded-full w-10 h-10 bg-purple_two"
            onClick={() =>
              handleDownload(
                `https://av-bids-bucket.s3.ap-south-1.amazonaws.com/${file.url}`,
                file.fileName
              )
            }
          >
            <img
              src={DOWN_ARROW}
              alt="download"
              className="object-scale-down w-[15px]"
            />
          </button>
        </div>
      ))}
      {event?.files?.length === 0 && (
        <p className="text-[16px] mt-2">No attachments available</p>
      )}
    </div>
  );
};

export default Attachments;
