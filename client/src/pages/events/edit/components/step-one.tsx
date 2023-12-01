import { Button, Input, Option, Select } from "@material-tailwind/react";
import axios from "axios";
import { FC, useState } from "react";
import { UseFormRegister, UseFormReturn } from "react-hook-form";
import DELETE_BUTTON from "../../../../assets/12_edit_event/ep_delete.png";
import {
  eventBudgetOptions,
  eventCategories,
  eventSubCategories,
  eventTypes,
  usStates,
} from "../../../../constants";
import api from "../../../../utils/api";
import { EventFormFormValues } from "../../../../utils/validations/event-form-validation";
import RichTextEditor from "./rich-text-editor";

interface UploadedFile extends File {
  fileName: string;
  url?: string; // Set to optional as it will be updated after upload
  progress: number;
}

interface StepOneProps {
  control: UseFormReturn<any>["control"];
  register: UseFormRegister<EventFormFormValues>;
  updateFormData: any;
  formData: any;
}

const StepOne: FC<StepOneProps> = ({
  control,
  register,
  updateFormData,
  formData,
}) => {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const updatedFiles = Array.from(files);
      // @ts-ignore
      setUploadedFiles((prevFiles) => [...prevFiles, ...updatedFiles]);

      // Iterate over the newly added files and update formData
      for (let i = 0; i < updatedFiles.length; i++) {
        await uploadFileToS3(files[i], i);
      }
    }
  };

  const uploadFileToS3 = async (file: File, index: number) => {
    // @ts-ignore
    const fileExtension = file.name.split(".").pop().toLowerCase();

    if (fileExtension) {
      try {
        // Get S3 upload config
        const uploadConfig = await api.get("/upload?type=" + fileExtension);

        // Upload file to S3
        await axios.put(uploadConfig.data.url, file, {
          headers: {
            "Content-Type": file.type,
          },
          onUploadProgress: (progressEvent) => {
            const percentCompleted = Math.round(
              // @ts-ignore
              (progressEvent.loaded * 100) / progressEvent.total
            );

            setUploadedFiles((prevFiles) =>
              prevFiles.map((prevFile, i) =>
                i === index
                  ? { ...prevFile, progress: percentCompleted }
                  : prevFile
              )
            );
          },
        });

        // Update form data or do any other actions with the uploaded file info
        updateFormData((prevData: any) => ({
          ...prevData,
          // Add logic to store file info as needed
          files: [
            ...(prevData.files || []), // Previous files, if any
            {
              fileName: file.name,
              url: uploadConfig.data.key,
            },
          ],
        }));
      } catch (error) {
        console.error(error);
      } finally {
        setUploadedFiles((prevFiles) =>
          prevFiles.map((prevFile, i) =>
            i === index ? { ...prevFile, progress: 0 } : prevFile
          )
        );
      }
    }
  };

  const handleInputChange = (name: string, value: string) => {
    updateFormData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelect = (name: string, value: string) => {
    updateFormData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="mx-2">
      <p className="font-medium text-[18px] mb-4">Event Details</p>

      <form>
        <div className="grid grid-cols-2 gap-x-16 gap-y-4 font-medium text-[16px] text-[#353535]">
          <div className="col-span-2">
            <p className="mb-2 font-medium">
              Event Title <span className="text-[#DE5753]">*</span>
            </p>
            <div className="mb-8 bg-input_background rounded-full">
              <Input
                placeholder="Ex: 2023 Meeting Expo San Deigo"
                crossOrigin=""
                className="rounded-full !border !border-gray-300 text-gray-900 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10 rounded-full"
                labelProps={{
                  className: "hidden",
                }}
                containerProps={{ className: "min-w-[100px]" }}
                {...register("title")}
                onChange={(e: any) => {
                  handleInputChange("title", e.target.value);
                }}
                value={formData.title}
              />
            </div>

            <div className="">
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                <div>
                  <p className="mb-2 font-medium">Proposal Due Date</p>
                  <div className="mb-5 bg-input_background rounded-full">
                    <Input
                      placeholder="Enter Date"
                      crossOrigin=""
                      className="rounded-full !border !border-gray-300 text-gray-900 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10 rounded-full"
                      labelProps={{
                        className: "hidden",
                      }}
                      containerProps={{ className: "min-w-[100px]" }}
                    />
                  </div>
                </div>
                <div>
                  <p className="mb-2 font-medium">Event Start Date</p>
                  <div className="mb-5 bg-input_background rounded-full">
                    <Input
                      placeholder="Enter Date"
                      crossOrigin=""
                      className="rounded-full !border !border-gray-300 text-gray-900 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10 rounded-full"
                      labelProps={{
                        className: "hidden",
                      }}
                      containerProps={{ className: "min-w-[100px]" }}
                    />
                  </div>
                </div>
                <div>
                  <p className="mb-2 font-medium">Event End Date</p>
                  <div className="mb-5 bg-input_background rounded-full">
                    <Input
                      placeholder="Enter Date"
                      crossOrigin=""
                      className="rounded-full !border !border-gray-300 text-gray-900 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10 rounded-full"
                      labelProps={{
                        className: "hidden",
                      }}
                      containerProps={{ className: "min-w-[100px]" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-16 gap-y-4 font-medium text-[16px] text-[#353535] justify-items-center">
          <div className="col-span-1">
            <p className="mb-2 font-medium">
              Event Description <span className="text-[#DE5753]">*</span>
            </p>
            <div className="mb-5">
              {/* @ts-ignore */}
              <RichTextEditor
                control={control}
                handleInputChange={handleInputChange}
                formData={formData}
              />
            </div>
          </div>
          <div className="">
            <p className="mb-2 font-medium">
              Event Type<span className="text-[#DE5753]">*</span>{" "}
            </p>
            <div className="mb-5">
              <Select
                label="In-Person"
                className="!bg-input_background"
                name="eventType"
                onChange={(e: any) => {
                  handleSelect("eventType", e);
                }}
                value={formData.eventType}
              >
                {eventTypes.map((type) => (
                  <Option key={type.value} value={type.value}>
                    {type.label}
                  </Option>
                ))}
              </Select>
            </div>
          </div>
          <div className="">
            <p className="mb-2 font-medium">
              Event Category<span className="text-[#DE5753]">*</span>{" "}
            </p>
            <div className="mb-5">
              <Select
                label="Coporate"
                className="!bg-input_background"
                name="eventCategory"
                onChange={(e: any) => {
                  handleSelect("eventCategory", e);
                }}
                value={formData.eventCategory}
              >
                {eventCategories.map((category) => (
                  <Option key={category.value} value={category.value}>
                    {category.label}
                  </Option>
                ))}
              </Select>
            </div>
          </div>
          <div className="">
            <p className="mb-2 font-medium">Event Sub Category</p>
            <div className=" mb-5">
              <Select
                label="General Meeting"
                className="!bg-input_background"
                name="eventSubCategory"
                onChange={(e: any) => {
                  handleSelect("eventSubCategory", e);
                }}
                value={formData.eventSubCategory}
              >
                {eventSubCategories.map((category) => (
                  <Option key={category.value} value={category.value}>
                    {category.label}
                  </Option>
                ))}
              </Select>
            </div>
          </div>
          <div className="">
            <p className="mb-2 font-medium">Event Budget</p>
            <div className=" mb-8">
              <Select
                label="$70,000 - $150,000"
                className="!bg-input_background"
                name="eventBudget"
                onChange={(e: any) => {
                  handleSelect("eventBudget", e);
                }}
                value={formData.eventBudget}
              >
                {eventBudgetOptions.map((budget) => (
                  <Option key={budget.value} value={budget.value}>
                    {budget.label}
                  </Option>
                ))}
              </Select>
            </div>
          </div>

          <div className="">
            <p className="mb-2 font-medium">Audience Size</p>
            <div className=" mb-8">
              <Select
                label="750 - 1,500"
                className="!bg-input_background"
                name="eventBudget"
                onChange={(e: any) => {
                  handleSelect("eventBudget", e);
                }}
                value={formData.eventBudget}
              >
                <Option>option 1</Option>
                <Option>option 2</Option>
                <Option>option 3</Option>
              </Select>
            </div>
          </div>
        </div>

        <p className="font-medium text-[18px] mb-4">Address & Location</p>
        <div className="grid grid-cols-2 gap-x-16 gap-y-4 mb-4 font-medium text-[16px] text-[#353535]">
          <div className="">
            <p className="mb-2 font-medium">Venue Name</p>
            <div className="mb-5 bg-input_background rounded-full">
              <Input
                className="rounded-full !border !border-gray-300 text-gray-900 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10 rounded-full"
                labelProps={{
                  className: "hidden",
                }}
                containerProps={{ className: "min-w-[100px]" }}
                placeholder="Venue Name"
                crossOrigin=""
                {...register("address.venueName")}
                onChange={(e: any) => {
                  handleSelect("address.venueName", e.target.value);
                }}
                value={formData.address?.venueName || ""}
              />
            </div>
          </div>

          <div className="...">
            <p className="mb-2 font-medium">Address</p>
            <div className="mb-5 bg-input_background rounded-full">
              <Input
                className="rounded-full !border !border-gray-300 text-gray-900 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10 rounded-full"
                labelProps={{
                  className: "hidden",
                }}
                containerProps={{ className: "min-w-[100px]" }}
                placeholder="Address"
                crossOrigin=""
                {...register("address.venueAddress")}
                onChange={(e: any) => {
                  handleSelect("address.venueAddress", e.target.value);
                }}
                value={formData.address?.venueAddress}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-x-16 gap-y-4 font-medium text-[16px] text-[#353535]">
          <div className="...">
            <p className="mb-2 font-medium">
              City<span className="text-[#DE5753]">*</span>
            </p>
            <div className="mb-5 bg-input_background rounded-full">
              <Input
                className="rounded-full !border !border-gray-300 text-gray-900 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10 rounded-full"
                labelProps={{
                  className: "hidden",
                }}
                containerProps={{ className: "min-w-[100px]" }}
                placeholder="Enter City"
                crossOrigin=""
                {...register("address.city")}
                onChange={(e: any) => {
                  handleSelect("address.city", e.target.value);
                }}
                value={formData.address?.city}
              />
            </div>
          </div>

          <div className="...">
            <p className="mb-2 font-medium">State</p>
            <div className="mb-5">
              <Select
                label="Select State"
                className="!bg-input_background"
                name="address.state"
                onChange={(e: any) => {
                  handleSelect("address.state", e);
                }}
                value={formData.address?.state}
              >
                {usStates.map((state) => (
                  <Option key={state.value} value={state.value}>
                    {state.label}
                  </Option>
                ))}
              </Select>
            </div>
          </div>

          <div className="...">
            <p className="mb-2 font-medium">Zip</p>
            <div className="mb-8 bg-input_background rounded-full">
              <Input
                className="rounded-full !border !border-gray-300 text-gray-900 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10 rounded-full"
                labelProps={{
                  className: "hidden",
                }}
                containerProps={{ className: "min-w-[100px]" }}
                placeholder="Enter Zip Code"
                crossOrigin=""
                {...register("address.zipCode")}
                onChange={(e: any) => {
                  handleSelect("address.zipCode", e.target.value);
                }}
                value={formData.address?.zipCode}
              />
            </div>
          </div>
        </div>
        <p className="font-medium text-[18px] mb-4">File Attachment</p>

        {uploadedFiles.length > 0 && (
          <div className="grid grid-cols-2 gap-x-16 gap-y-4 font-medium text-[18px] text-black mb-2">
            {uploadedFiles.map((file, index) => (
              <div key={index} className="mb-4">
                <div className="flex items-center gap-4">
                  <p>{file.name}</p>
                  <img
                    src={DELETE_BUTTON}
                    alt="delete"
                    className="object-scale-down w-[34px]"
                  />
                </div>
                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200">
                        {file.progress}%
                      </span>
                    </div>
                  </div>
                  <div className="flex h-2 mb-4 overflow-hidden bg-gray-200 rounded">
                    <div
                      style={{ width: `${file.progress}%` }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-teal-500"
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        {formData.files && formData.files.length > 0 ? (
          <div className="grid grid-cols-2 gap-x-16 gap-y-4 font-medium text-[18px] text-black mb-2">
            {formData.files.map((file: any, index: number) => (
              <div key={index} className="mb-4">
                <div className="flex items-center gap-4">
                  <p>{file.fileName}</p>
                  <img
                    src={DELETE_BUTTON}
                    alt="delete"
                    className="object-scale-down w-[34px]"
                  />
                </div>
                {/* (Progress bar code here if needed) */}
              </div>
            ))}
          </div>
        ) : (
          <p>No files uploaded</p>
        )}
        <Button
          variant="filled"
          color="indigo"
          size="sm"
          className="rounded-md py-2 mt-4 px-4 bg-primary font-poppins"
        >
          <label className="text-white normal-case font-medium">
            Upload File
            <input
              type="file"
              accept=".pdf, .doc, .docx, .jpg, .jpeg, .png"
              onChange={handleFileUpload}
              className="hidden" // This hides the file input element
              multiple
            />
          </label>
        </Button>
      </form>
    </div>
  );
};

export default StepOne;
