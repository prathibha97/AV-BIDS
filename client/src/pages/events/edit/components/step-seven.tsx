import { Textarea } from "@material-tailwind/react";
import { FC, useEffect, useState } from "react";
import { Scenic, Staff } from "../../../../types";
import CardDetails from "./card-details";

interface StepSevenProps {
  formData: any;
  updateFormData: (field: string, value: number | Requirement[]) => void;
}

interface Requirement {
  label: string;
  count: number;
}

const StepSeven: FC<StepSevenProps> = ({ formData, updateFormData }) => {
  const [staff, setStaff] = useState({
    Audio_Tech: formData.staff?.Audio_Tech ?? 0,
    Video_Tech: formData.staff?.Video_Tech ?? 0,
    Lighting_Tech: formData.staff?.Lighting_Tech ?? 0,
    Project_Manager: formData.staff?.Project_Manager ?? 0,
  });

  const [scenic, setScenic] = useState({
    Mobile_Hotspot_up_to_15_devices:
      formData.scenic?.Mobile_Hotspot_up_to_15_devices ?? 0,
    Event_WIFI_Network_more_than_15_devices:
      formData.scenic?.Event_WIFI_Network_more_than_15_devices ?? 0,
    Laptops_PC: formData.scenic?.Laptops_PC ?? 0,
    Laptops_Mac: formData.scenic?.Laptops_Mac ?? 0,
  });

  const [otherRequirements, setOtherRequirements] = useState<Requirement[]>(
    formData.otherRequirements || [
      { label: "", count: 0 },
      { label: "", count: 0 },
      { label: "", count: 0 },
      { label: "", count: 0 },
      { label: "", count: 0 },
    ]
  );

  const [comments, setComments] = useState(formData.comments || "");

  useEffect(() => {
    // Update formData when otherRequirements changes
    updateFormData("otherRequirements", otherRequirements);
  }, [otherRequirements]);

  const handleAdjust = (
    field: string,
    value: number | string,
    index?: number
  ) => {
    if (field === "count" && typeof value === "number" && index !== undefined) {
      setOtherRequirements((prevRequirements) => {
        const updatedRequirements = prevRequirements.map((requirement, i) => {
          if (index !== undefined && i === index) {
            return {
              ...requirement,
              count: Math.max(0, value),
            };
          }
          return requirement;
        });

        // Pass the correct label to updateFormData directly from the updated state
        updateFormData("otherRequirements", updatedRequirements);

        return updatedRequirements;
      });
    } else if (
      field === "label" &&
      typeof value === "string" &&
      index !== undefined
    ) {
      setOtherRequirements((prevRequirements) => {
        const updatedRequirements = prevRequirements.map((requirement, i) => {
          if (index !== undefined && i === index) {
            return {
              ...requirement,
              label: String(value),
            };
          }
          return requirement;
        });

        updateFormData("otherRequirements", updatedRequirements);

        return updatedRequirements;
      });
    } else if (field === "comments" && typeof value === "string") {
      setComments(value);
      // @ts-ignore
      updateFormData("comments", value);
    }
  };

  const handleAdjustStaff = (field: keyof Staff, value: number) => {
    let updatedValue = Math.max(0, staff[field] + value);
    setStaff((prev) => ({ ...prev, [field]: updatedValue }));

    if (!isNaN(updatedValue)) {
      updateFormData(field as string, updatedValue);
    }
  };

  const handleAdjustScenic = (field: keyof Scenic, value: number) => {
    // @ts-ignore
    let updatedValue = Math.max(0, scenic[field] + value);
    setScenic((prev) => ({ ...prev, [field]: updatedValue }));

    if (!isNaN(updatedValue)) {
      updateFormData(field as string, updatedValue);
    }
  };

  return (
    <div className="grid grid-cols-2 gap-6">
      <div className="bg-[#F3F1FB] rounded-lg p-6 col-span-2 sm:col-span-1">
        <p className="text-[18px] font-medium mb-4">Staff</p>
        <CardDetails
          name="Audio Tech"
          value={staff.Audio_Tech}
          onDecrease={() => handleAdjustStaff("Audio_Tech", -1)}
          onIncrease={() => handleAdjustStaff("Audio_Tech", 1)}
        />
        <CardDetails
          name="Video Tech"
          value={staff.Video_Tech}
          onDecrease={() => handleAdjustStaff("Video_Tech", -1)}
          onIncrease={() => handleAdjustStaff("Video_Tech", 1)}
        />
        <CardDetails
          name="Lighting Tech"
          value={staff.Lighting_Tech}
          onDecrease={() => handleAdjustStaff("Lighting_Tech", -1)}
          onIncrease={() => handleAdjustStaff("Lighting_Tech", 1)}
        />
        <CardDetails
          name="Project Manager"
          value={staff.Project_Manager}
          onDecrease={() => handleAdjustStaff("Project_Manager", -1)}
          onIncrease={() => handleAdjustStaff("Project_Manager", 1)}
        />
      </div>
      <div className="bg-[#F3F1FB] rounded-lg p-6 col-span-2 sm:col-span-1">
        <p className="text-[18px] font-medium mb-4">Scenic</p>
        <CardDetails
          name="Mobile Hotspot (up to 15 devices)"
          value={scenic.Mobile_Hotspot_up_to_15_devices}
          onDecrease={() =>
            handleAdjustScenic("Mobile_Hotspot_up_to_15_devices", -1)
          }
          onIncrease={() =>
            handleAdjustScenic("Mobile_Hotspot_up_to_15_devices", 1)
          }
        />
        <CardDetails
          name="Event WIFI Network (more than 15 devices)"
          value={scenic.Event_WIFI_Network_more_than_15_devices}
          onDecrease={() =>
            handleAdjustScenic("Event_WIFI_Network_more_than_15_devices", -1)
          }
          onIncrease={() =>
            handleAdjustScenic("Event_WIFI_Network_more_than_15_devices", 1)
          }
        />
        <CardDetails
          name="Laptops-PC"
          value={scenic.Laptops_PC}
          onDecrease={() => handleAdjustScenic("Laptops_PC", -1)}
          onIncrease={() => handleAdjustScenic("Laptops_PC", 1)}
        />
        <CardDetails
          name="Laptops-Mac"
          value={scenic.Laptops_Mac}
          onDecrease={() => handleAdjustScenic("Laptops_Mac", -1)}
          onIncrease={() => handleAdjustScenic("Laptops_Mac", 1)}
        />
      </div>

      <div className="bg-[#F3F1FB] rounded-lg p-6 col-span-2 sm:col-span-1">
        <p className="text-[18px] font-medium mb-4">Other Requirements</p>
        {otherRequirements.map((requirement, index) => (
          <RequirementInput
            key={index}
            label={`Requirement ${index + 1}`}
            requirement={requirement}
            onRequirementChange={(newRequirement) => {
              handleAdjust("label", newRequirement.label, index);
              handleAdjust("count", newRequirement.count, index);
            }}
          />
        ))}
      </div>

      <div className="bg-[#F3F1FB] rounded-lg p-6 col-span-2 sm:col-span-1">
        <p className="text-[18px] font-medium mb-4">Comments</p>

        <div>
          <Textarea
            className="bg-white border border-[#E4E4E4]"
            value={comments}
            onChange={(e) => handleAdjust("comments", e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default StepSeven;

interface RequirementInputProps {
  label: string;
  requirement: Requirement;
  onRequirementChange: (newRequirement: Requirement) => void;
}

function RequirementInput(props: RequirementInputProps) {
  const { label, requirement, onRequirementChange } = props;

  const handleLabelChange = (newLabel: string) => {
    onRequirementChange({
      ...requirement,
      label: newLabel,
    });
  };

  const handleCountChange = (newCount: number) => {
    onRequirementChange({
      ...requirement,
      count: Math.max(0, newCount),
    });
  };

  return (
    <div className="flex items-center space-x-8">
      <input
        className="border rounded-lg p-2 mb-4 border-[#E4E4E4] w-[140px]"
        placeholder={label}
        value={requirement.label}
        onChange={(e) => handleLabelChange(e.target.value)}
      />

      <div className="flex items-center gap-2 mb-4">
        <div className="flex items-center justify-center rounded-full w-7 h-7 bg-[#fff] text-[#000]">
          <button
            type="button"
            onClick={() => handleCountChange(requirement.count - 1)}
          >
            <p className="font-semibold">-</p>
          </button>
        </div>
        <p>{requirement.count}</p>
        <div className="flex items-center justify-center rounded-full w-7 h-7 bg-[#fff] text-[#000]">
          <button
            type="button"
            onClick={() => handleCountChange(requirement.count + 1)}
          >
            <p className="font-semibold">+</p>
          </button>
        </div>
      </div>
    </div>
  );
}
