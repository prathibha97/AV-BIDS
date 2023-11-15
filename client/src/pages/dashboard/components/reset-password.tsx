import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input } from "@material-tailwind/react";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { clearUser, updateUser } from "../../../app/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { RootState } from "../../../app/store";
import api from "../../../utils/api";
import {
  ResetPasswordFormSchema,
  ResetPasswordFormValues,
} from "../../../utils/validations/reset-password-form-validation";

interface ResetPasswordProps {}

const ResetPassword: FC<ResetPasswordProps> = ({}) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const user = useAppSelector((state: RootState) => state.user.user);

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
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteAccount = async () => {
    try {
      await api.delete(`/users/${user?._id}`);
      navigate("/");
      dispatch(clearUser());
      localStorage.removeItem("userInfo");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="bg-[#fff] px-8 py-8 rounded-xl drop-shadow mb-6">
      <h2 className="text-[20px] font-semibold mb-4">Change Password</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 gap-4">
          <div>
            <p className="mb-2">Current password</p>

            <div className="w-72 bg-input_background rounded-full">
              <Input
                className="rounded-full !border !border-gray-300 text-gray-900 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10 rounded-full"
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
            <div className="w-72 bg-input_background rounded-full">
              <Input
                className="rounded-full !border !border-gray-300 text-gray-900 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10 rounded-full"
                labelProps={{
                  className: "hidden",
                }}
                containerProps={{ className: "min-w-[100px]" }}
                type="password"
                placeholder="********"
                crossOrigin=""
                {...register("newPassword")}
              />
              {errors.password && <span>New Password is required</span>}
            </div>
          </div>
          <div>
            <p className="mb-2">Confirm New Password</p>
            <div className="w-72 bg-input_background rounded-full">
              <Input
                className="rounded-full !border !border-gray-300 text-gray-900 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10 rounded-full"
                labelProps={{
                  className: "hidden",
                }}
                containerProps={{ className: "min-w-[100px]" }}
                type="password"
                placeholder="********"
                crossOrigin=""
                {...register("confirmPassword")}
              />
              {errors.password && <span>Passwords does not match</span>}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mt-4">
          <Button
            variant="filled"
            color="indigo"
            size="sm"
            type="button"
            className="w-30 py-3 mt-4 px-6 bg-primary font-poppins rounded-full"
            onClick={handleDeleteAccount}
          >
            <span className="text-white normal-case">Delete Account</span>
          </Button>

          <Button
            variant="filled"
            color="indigo"
            size="sm"
            className="w-30 py-3 mt-4 px-6 bg-primary font-poppins rounded-full"
            type="submit"
          >
            <span className="text-white normal-case">Submit</span>
          </Button>
        </div>
      </form>
    </section>
  );
};

export default ResetPassword;
