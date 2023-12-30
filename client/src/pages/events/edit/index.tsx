import { Button, Step, Stepper } from "@material-tailwind/react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { setAlertWithTimeout } from "../../../app/features/alerts/alertSlice";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { RootState } from "../../../app/store";
import api from "../../../utils/api";
import {
  EventFormFormValues,
  EventFormSchema,
} from "../../../utils/validations/event-form-validation";
import StepFive from "./components/step-five";
import StepFour from "./components/step-four";
import StepOne from "./components/step-one";
import StepSeven from "./components/step-seven";
import StepSix from "./components/step-six";
import StepThree from "./components/step-three";
import StepTwo from "./components/step-two";
import { setEvent } from "../../../app/features/events/eventSlice";
// import Stepper from "./components/stepper";

interface Requirement {
  label: string;
  count: number;
}

export function Index() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [activeStep, setActiveStep] = useState(0);
  const [isLastStep, setIsLastStep] = useState(false);
  const [isFirstStep, setIsFirstStep] = useState(false);

  const event = useAppSelector((state: RootState) => state.event.event);

  const { register, control } = useForm<EventFormFormValues>({
    resolver: zodResolver(EventFormSchema),
  });
  const [formData, setFormData] = useState({});

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const onSubmit = async () => {
    try {
      const { data } = await api.put(`/events/${event?._id}`, {
        ...formData,
      });
      navigate("/events/my-events");
      dispatch(
        setAlertWithTimeout({
          message: data.message,
          color: "green",
          open: true,
        })
      );
    } catch (error: any) {
      if (error.response) {
        dispatch(
          setAlertWithTimeout({
            message: error.response.data.error,
            color: "red",
            open: true,
          })
        );
      } else if (error.request) {
        console.log("No response received from the server.");
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error while setting up the request:", error.message);
      }
    }
  };

  const handlePublish = async () => {
    try {
      const { data } = await api.put(`/events/${event?._id}`, {
        ...formData,
        status: "Active",
      });
      dispatch(setEvent(data.event));
      navigate("/events/my-events");
      dispatch(
        setAlertWithTimeout({
          message: "Event has been published successfully",
          color: "green",
          open: true,
        })
      );
    } catch (error: any) {
      if (error.response) {
        dispatch(
          setAlertWithTimeout({
            message: error.response.data.error,
            color: "red",
            open: true,
          })
        );
      } else if (error.request) {
        console.log("No response received from the server.");
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error while setting up the request:", error.message);
      }
    }
  };

  const handleSaveAsDraft = async () => {
    try {
      const { data } = await api.put(`/events/${event?._id}`, {
        ...formData,
        status: "Draft",
      });
      dispatch(setEvent(data.event));
      navigate("/events/my-events");
      dispatch(
        setAlertWithTimeout({
          message: "Event updated as a draft",
          color: "green",
          open: true,
        })
      );
    } catch (error: any) {
      if (error.response) {
        dispatch(
          setAlertWithTimeout({
            message: error.response.data.error,
            color: "red",
            open: true,
          })
        );
      } else if (error.request) {
        console.log("No response received from the server.");
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error while setting up the request:", error.message);
      }
    }
  };

  useEffect(() => {
    // Populate formData with event data when component mounts
    if (event) {
      setFormData({
        ...event,
      });
    }
  }, [event]);

  const updateFormData = (
    field: string,
    value: number | Requirement[] | Requirement
  ) => {
    setFormData((prevData) => ({
      ...prevData,
      // @ts-ignore
      [field]: Array.isArray(prevData[field])
        ? // @ts-ignore
          value.map((req: Requirement) => ({ ...req }))
        : value,
    }));
  };

  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

  return (
    <div className="container sm:mx-auto mb-8 mx-2">
      <section className="bg-white px-8 py-8 rounded-xl drop-shadow-md">
        <h2 className="text-[20px] font-semibold mb-6">Edit Event </h2>

        <div className="flex justify-center mb-10">
          <div>
            <div>
              <div className="mx-12 mb-4">
                <Stepper
                  activeStep={activeStep}
                  isLastStep={(value) => setIsLastStep(value)}
                  isFirstStep={(value) => setIsFirstStep(value)}
                >
                  <Step
                    onClick={() => setActiveStep(0)}
                    className="!bg-[#42D27A]"
                  >
                    <span>1</span>
                  </Step>

                  <Step
                    onClick={() => setActiveStep(1)}
                    className={activeStep === 1 ? "active-step" : ""}
                  >
                    <span>2</span>
                  </Step>
                </Stepper>

                <div className="w-full flex justify-between"></div>

                <style>
                  {`.active-step {
          background-color: #42D27A;
        }`}
                </style>
              </div>
            </div>

            <div className="flex items-center justify-between gap-16">
              <div>
                <p className="font-medium text-[16px] text-center">
                  Update Information
                </p>
              </div>

              <div>
                <p className="text-[16px] font-medium text-center mr-3 sm:mr-0">
                  Update Settings
                </p>
              </div>
            </div>
          </div>
        </div>

        {currentStep === 1 && (
          <StepOne
            register={register}
            control={control}
            updateFormData={setFormData}
            formData={formData}
          />
        )}
        {currentStep === 2 && (
          <StepTwo
            // @ts-ignore
            formData={formData}
            updateStepTwoData={(field: any, value: any) => {
              setFormData({
                ...formData,
                [field]: value,
              });
            }}
          />
        )}
        {currentStep === 3 && (
          <StepThree
            formData={formData}
            updateFormData={(field: any, value: any) => {
              setFormData({
                ...formData,
                [field]: value,
              });
            }}
          />
        )}
        {currentStep === 4 && (
          <StepFour
            formData={formData}
            updateFormData={(field: any, value: any) => {
              setFormData({
                ...formData,
                [field]: value,
              });
            }}
          />
        )}
        {currentStep === 5 && (
          <StepFive
            formData={formData}
            updateFormData={(field: any, value: any) => {
              setFormData({
                ...formData,
                [field]: value,
              });
            }}
          />
        )}
        {currentStep === 6 && (
          <StepSix
            formData={formData}
            updateFormData={(field: any, value: any) => {
              setFormData({
                ...formData,
                [field]: value,
              });
            }}
          />
        )}
        {currentStep === 7 && (
          <StepSeven formData={formData} updateFormData={updateFormData} />
        )}

        <div className="hidden sm:block">
          <div className="flex items-center justify-between mt-6 ">
            <div>
              <Button
                variant="outlined"
                size="sm"
                className="rounded-full  py-3 px-6 mt-4 bg-[#EBEBEB] font-poppins normal-case border-none w-[135px]"
                onClick={() => navigate("/events/my-events")}
              >
                <span className="text-black">Cancel </span>
              </Button>
            </div>

            <div>
              {event?.status === "Draft" ? (
                <Button
                  variant="outlined"
                  color="indigo"
                  size="sm"
                  className="rounded-full  py-2 px-0 mt-4  font-poppins normal-case border-primary w-[135px] mr-6"
                  onClick={handlePublish}
                >
                  <span className="text-primary text-[10px]">
                    Publish Event
                  </span>
                </Button>
              ) : (
                <Button
                  variant="outlined"
                  color="indigo"
                  size="sm"
                  className="rounded-full  py-3 px-6 mt-4  font-poppins normal-case border-primary w-[135px] mr-6"
                  onClick={handleSaveAsDraft}
                >
                  <span className="text-primary ">Save as Draft</span>
                </Button>
              )}

              {currentStep > 1 && (
                <Button
                  variant="outlined"
                  size="sm"
                  className="rounded-full py-3 px-6 mt-4 bg-[#EBEBEB] font-poppins normal-case border-none w-[135px] mr-4"
                  onClick={() => {
                    handlePrev();
                    handlePrevStep();
                  }}
                >
                  <span className="text-black">Previous</span>
                </Button>
              )}

              {currentStep < 7 ? (
                <Button
                  variant="filled"
                  color="indigo"
                  size="sm"
                  className="rounded-full py-3 px-6 mt-4 font-poppins normal-case bg-primary w-[135px]"
                  onClick={() => {
                    handleNext();
                    handleNextStep();
                  }}
                >
                  <span className="text-white">Next</span>
                </Button>
              ) : (
                <Button
                  variant="filled"
                  color="indigo"
                  size="sm"
                  className="rounded-full py-3 px-6 mt-4 font-poppins normal-case bg-primary w-[135px]"
                  type="button"
                  onClick={onSubmit}
                >
                  <span className="text-white">Submit</span>
                </Button>
              )}
            </div>
          </div>
        </div>

        <div className="block sm:hidden">
          <div className="mt-6">
            <div>
              <div className="flex items-center justify-center">
                <div>
                  {event?.status === "Draft" ? (
                    <Button
                      variant="outlined"
                      color="indigo"
                      size="sm"
                      className="rounded-full  py-2 px-0 mt-4  font-poppins normal-case border-primary w-[90px] mr-6"
                      onClick={handlePublish}
                    >
                      <span className="text-primary text-[10px]">
                        Publish Event
                      </span>
                    </Button>
                  ) : (
                    <Button
                      variant="outlined"
                      color="indigo"
                      size="sm"
                      className="rounded-full py-2 px-0 mt-4  font-poppins normal-case border-primary w-[90px] mr-6"
                      onClick={handleSaveAsDraft}
                    >
                      <span className="text-primary text-[10px]">
                        Save as Draft
                      </span>
                    </Button>
                  )}
                </div>

                <div>
                  {currentStep > 1 && (
                    <Button
                      variant="outlined"
                      size="sm"
                      className="rounded-full py-2 px-0 mt-4 bg-[#EBEBEB] font-poppins normal-case border-none w-[90px] mr-4"
                      onClick={() => {
                        handlePrev();
                        handlePrevStep();
                      }}
                    >
                      <span className="text-black text-[10px]">Previous</span>
                    </Button>
                  )}
                </div>

                <div>
                  {currentStep < 7 ? (
                    <Button
                      variant="filled"
                      color="indigo"
                      size="sm"
                      className="rounded-full py-2 px-0 mt-4 font-poppins normal-case bg-primary w-[90px]"
                      onClick={() => {
                        handleNext();
                        handleNextStep();
                      }}
                    >
                      <span className="text-white text-[10px]">Next </span>
                    </Button>
                  ) : (
                    <Button
                      variant="filled"
                      color="indigo"
                      size="sm"
                      className="rounded-full py-2 px-0 mt-4 font-poppins normal-case bg-primary w-[90px]"
                      type="button"
                      onClick={onSubmit}
                    >
                      <span className="text-white text-[10px]">Submit</span>
                    </Button>
                  )}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <Button
                variant="outlined"
                size="sm"
                className="rounded-full  py-2 px-0 mt-4 bg-[#EBEBEB] font-poppins normal-case border-none w-[90px]"
                onClick={() => navigate("/events/my-events")}
              >
                <span className="text-black text-[10px]">Cancel</span>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Index;
