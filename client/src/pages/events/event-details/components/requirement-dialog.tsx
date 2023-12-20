import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "@material-tailwind/react";
import { FC, useRef } from "react";
// @ts-ignore
import html2pdf from "html2pdf.js";
import {
  Communication,
  Electrical,
  Event,
  Lighting,
  Microphones,
  Mixers,
  PresenterTools,
  Projection,
  Scenic,
  Screens,
  Speaksers,
  Staff,
  VideoCamera,
  VideoProcessing,
} from "../../../../types";

interface RequirementDialogProps {
  open: boolean;
  event: Event | null;
  handleOpen: () => void;
}

const RequirementDialog: FC<RequirementDialogProps> = ({
  handleOpen,
  open,
  event,
}) => {
  const pdfContainer = useRef<HTMLDivElement>(null);

  const renderSection = (
    title: string,
    requirements:
      | Record<string, number>
      | undefined
      | Microphones
      | Speaksers
      | Mixers
      | Communication
      | Projection
      | Screens
      | VideoCamera
      | VideoProcessing
      | PresenterTools
      | Lighting
      | Scenic
      | Electrical
      | Staff
  ) => {
    return (
      requirements && (
        <div className="mb-6 bg-[#F3F1FB] rounded-md">
          <h3 className="font-bold mb-2 bg-[#dcd4fc] rounded-md p-2 border-l-4 border-indigo-500">
            {title}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-3">
            {Object.entries(requirements).map(([key, value]) => {
              const formattedKey = key
                .replace(/_/g, " ") // Replace underscores with spaces
                .replace(/([a-z])([A-Z])/g, "$1 $2"); // Split camelCase with spaces
              return (
                value > 0 && (
                  <p key={key} className="text-sm">
                    {`${formattedKey}: ${value}`}
                  </p>
                )
              );
            })}
          </div>
        </div>
      )
    );
  };

  const downloadPDF = () => {
    if (pdfContainer.current) {
      const content = pdfContainer.current;
      const options = {
        margin: 10,
        filename: "AV_Requirements.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      };

      html2pdf(content, options);
    }
  };

  return (
    <Dialog open={open} handler={handleOpen}>
      <DialogHeader>{event?.title} - AV Requirements</DialogHeader>
      <DialogBody className="max-h-[500px] overflow-y-auto">
        <div ref={pdfContainer}>
          {renderSection("General Requirements", {
            "Room Count": event?.roomCount!,
            "General Session Count": event?.generalSessionCount!,
            "Breakout Session Count": event?.breakoutSessionCount!,
            "Presenter Count": event?.presenterCount!,
          })}

          {renderSection("Microphone Requirements", event?.microphones)}

          {renderSection("Speakers Requirements", event?.speakers)}

          {renderSection("Mixer Requirements", event?.mixers)}

          {renderSection("Communication Requirements", event?.communication)}

          {renderSection("Screens Requirements", event?.screens)}

          {renderSection("Projection Requirements", event?.projection)}

          {renderSection("Video Camera Requirements", event?.videoCamera)}

          {renderSection(
            "Video Processing Requirements",
            event?.videoProcessing
          )}

          {renderSection("Presenter Tools Requirements", event?.presenterTools)}

          {renderSection("Lighting Requirements", event?.lighting)}

          {renderSection("Scenic Requirements", event?.scenic)}

          {renderSection("Electrical Requirements", event?.electrical)}

          {renderSection("Staff Requirements", event?.staff)}

          {renderSection(
            "Other Requirements",
            // @ts-ignore
            {
              // @ts-ignore
              ...event?.otherRequirements.reduce((acc, req) => {
                if ((req.count as number) > 0) {
                  acc[req.label] = req.count;
                }
                return acc;
              }, {}),
            }
          )}
        </div>
      </DialogBody>
      <DialogFooter className="flex justify-between">
        <Button color="red" onClick={handleOpen} className="mr-1">
          <span>Close</span>
        </Button>
        <Button className="bg-primary" onClick={downloadPDF}>
          <span>Download</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
};

export default RequirementDialog;
