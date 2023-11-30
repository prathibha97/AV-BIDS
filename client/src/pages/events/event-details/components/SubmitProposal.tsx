import { Button, Textarea } from "@material-tailwind/react";
import { useState } from "react";
import Dragdrop from "./dragdrop-files";
import { MdOutlineCloudUpload } from "react-icons/md";
import UPLOAD_ICON from "../../../../assets/10_event_details_page/Upload icon.png";

export function SubmitProposal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  return (
    <div className="bg-[#F8F8FF] border-dashed border-2 border-[#6f7070] m-6 p-4 h-[400px] flex items-center cursor-pointer">
      <div>
        <div className="flex items-center justify-center mb-4">
          <img
            src={UPLOAD_ICON}
            alt="aad"
            className="object-scale-down w-[50px]"
          />
        </div>

        <Dragdrop />
      </div>
    </div>
  );
}

export default SubmitProposal;
