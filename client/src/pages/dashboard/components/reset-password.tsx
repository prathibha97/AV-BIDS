import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { setAlertWithTimeout } from "../../../app/features/alerts/alertSlice";
import { clearUser, updateUser } from "../../../app/features/user/userSlice";
import { useAppDispatch } from "../../../app/hooks";
import { useGetCurrentUser } from "../../../app/hooks/useUser";
import api from "../../../utils/api";
import {
  ResetPasswordFormSchema,
  ResetPasswordFormValues,
} from "../../../utils/validations/reset-password-form-validation";

import {
  MdOutlineError,
  MdDeleteOutline,
  MdCancelPresentation,
} from "react-icons/md";

//Delete account confirmation
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

const ResetPassword = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const user = useGetCurrentUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordFormValues>({
    resolver: zodResolver(ResetPasswordFormSchema),
    defaultValues: {
      password: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (values: ResetPasswordFormValues) => {
    try {
      const { data } = await api.post("/auth/reset-password", {
        email: user?.email,
        password: values.newPassword,
      });
      dispatch(updateUser(data.user));
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

  const handleDeleteAccount = async () => {
    try {
      await api.delete(`/users/${user?._id}`);
      dispatch(clearUser());
      localStorage.removeItem("userInfo");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  //Delete confirmation function
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);
  return (
    <section className="bg-[#fff] px-8 py-8 rounded-xl drop-shadow mb-6 mx-2">
      <h2 className="text-[20px] font-semibold mb-4">Change Password</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 gap-4">
          <div>
            <p className="mb-2">Current password</p>

            <div className="bg-input_background rounded-full">
              <Input
                className="rounded-full !border !border-gray-300 text-gray-900 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                labelProps={{
                  className: "hidden",
                }}
                containerProps={{ className: "min-w-[100px]" }}
                type="password"
                placeholder="********"
                crossOrigin=""
                {...register("password")}
              />
              {errors.password && <span>Password is required</span>}
            </div>
          </div>

          <div>
            <p className="mb-2">New Password</p>
            <div className="bg-input_background rounded-full">
              <Input
                className="rounded-full !border !border-gray-300 text-gray-900 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                labelProps={{
                  className: "hidden",
                }}
                containerProps={{ className: "min-w-[100px]" }}
                type="password"
                placeholder="New Password"
                crossOrigin=""
                {...register("newPassword")}
              />
              {errors.password && <span>New Password is required</span>}
            </div>
          </div>
          <div>
            <p className="mb-2">Confirm New Password</p>
            <div className="bg-input_background rounded-full">
              <Input
                className="rounded-full !border !border-gray-300 text-gray-900 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                labelProps={{
                  className: "hidden",
                }}
                containerProps={{ className: "min-w-[100px]" }}
                type="password"
                placeholder="Confirm New Password"
                crossOrigin=""
                {...register("confirmPassword")}
              />
              {errors.password && <span>Passwords does not match</span>}
            </div>
          </div>
        </div>

        <>
          {/* <Button onClick={handleOpen} variant="gradient">
            Open Dialog
          </Button> */}
          <Dialog open={open} handler={handleOpen}>
            <div
              className="flex justify-end p-2 text-[#829ab1] cursor-pointer"
              onClick={handleOpen}
            >
              <MdCancelPresentation className="text-[35px]" />
            </div>
            <DialogHeader className="flex justify-center">
              <h2 className="text-[#102a43] text-[30px] text-center pt-6">
                Delete Account?
              </h2>
            </DialogHeader>
            <DialogBody>
              <p className="text-[#102a43] text-center text-[20px]">
                Are you sure you want to delete{" "}
                <span className="font-medium">"account name"</span>?
              </p>

              <p className="text-[#102a43] text-center text-[20px]">
                You can't undo this action.
              </p>

              <div className="bg-[#ffe8d9] rounded-md border-l-4 border-[#f97443] mt-6 mx-10 px-4 py-6">
                <div className="flex items-center gap-4">
                  <MdOutlineError className="text-[40px] text-[#f35627] self-start" />
                  <div>
                    <p className="text-[#810c02] font-medium text-[20px] mb-2 mt-1">
                      Warning
                    </p>

                    <p className="text-[#c21d0c] text-[18px]">
                      By choosing to delete this account, please note that all
                      data associated with AV bids will be permanently removed
                      as well.
                    </p>
                  </div>
                </div>
              </div>
            </DialogBody>
            <DialogFooter className="flex items-center justify-center gap-6 mt-4">
              <Button
                variant="filled"
                className="mr-1 bg-primary  w-[165px] h-[45px] rounded-full"
                onClick={handleOpen}
              >
                <span className="normal-case  text-[#fff]">Cancel</span>
              </Button>
              <Button
                variant="filled"
                className="bg-[#e12929] w-[165px] h-[45px] rounded-full"
                onClick={handleOpen}
              >
                <div className="flex items-center justify-center gap-2">
                  <span className="normal-case text-[#fff]">
                    Delete Account
                  </span>
                  <MdDeleteOutline className="text-[22px]" />
                </div>
              </Button>
            </DialogFooter>
          </Dialog>
        </>

        <div className="flex items-center justify-between mt-4">
          <Button
            variant="filled"
            color="indigo"
            size="sm"
            className="w-30 py-3 mt-4 px-6 bg-primary font-poppins rounded-full"
            type="submit"
          >
            <span className="text-white normal-case">Submit</span>
          </Button>
          <Button
            variant="filled"
            color="indigo"
            size="sm"
            type="button"
            className="w-30 py-3 mt-4 px-6 bg-[#E12929] font-poppins rounded-full"
            // onClick={handleDeleteAccount}
            onClick={handleOpen}
          >
            <span className="text-white normal-case">Delete Account</span>
          </Button>
        </div>
      </form>
    </section>
  );
};

export default ResetPassword;
