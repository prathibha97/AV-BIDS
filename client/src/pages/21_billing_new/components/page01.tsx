import React from "react";
import { Button } from "@material-tailwind/react";
import Yealy from "../../../assets/17_billing/yearly.png";
import Monthly from "../../../assets/17_billing/monthly.png";
import Done_icon from "../../../assets/17_billing/done.png";

import Discover from "../../../assets/17_billing/Discover.png";
import Master from "../../../assets/17_billing/Mastercard.png";
import Visa from "../../../assets/17_billing/Visa.png";
import Subscription_photo from "../../../assets/17_billing/subscription_photo.png";

interface Page01Props {
  onNext: () => void;
}

const Page01: React.FC<Page01Props> = ({ onNext }) => {
  return (
    // <div>
    //   <h1 className="text-[30px] font-bold mb-4 text-primary_font_color text-center mt-16">
    //     AV Bids - Powering Event Connections.
    //   </h1>
    //   <p className="text-primary_font_color text-[18px] mb-10 text-center">
    //     Flexible Plans & Pricing
    //   </p>

    //   <div className="grid grid-cols-3 gap-4">
    //     <div className="flex items-center justify-center bg-[#f3f1fb] border border-[#8645ff] ">
    //       <div className="">
    //         <div className="flex items-center justify-center">
    //           <img
    //             src={Yealy}
    //             alt="aad"
    //             className="object-scale-down w-[80px] my-8"
    //           />
    //         </div>

    //         <p className="text-[18px] font-medium text-primary_font_color mb-2 text-center">
    //           Yearly
    //         </p>

    //         <p className="mb-6">
    //           <span className="font-semibold text-18px text-primary_font_color mr-1 text-center">
    //             $399
    //           </span>
    //           / year
    //         </p>

    //         <div
    //           className="bg-[#8645ff] w-max text-[#fff] font-medium px-5 py-1.5 rounded-2xl mb-8 cursor-pointer"
    //           onClick={onNext}
    //         >
    //           Subscribe
    //         </div>
    //       </div>
    //     </div>

    //     <div className="flex items-center justify-center bg-[#f3f1fb] border border-[#8645ff]">
    //       <div>
    //         <div className="flex items-center justify-center">
    //           <img
    //             src={Monthly}
    //             alt="aad"
    //             className="object-scale-down w-[80px] my-8"
    //           />
    //         </div>
    //         <p className="text-[18px] font-medium text-center text-primary_font_color mb-2">
    //           Monthly
    //         </p>

    //         <p className="mb-6 text-primary_font_color text-center">
    //           <span className="font-semibold text-18px text-center  mr-1">
    //             $349
    //           </span>
    //           / monthly
    //         </p>

    //         <div
    //           className="bg-[#8645ff] w-max text-[#fff] font-medium px-5 py-1.5 rounded-2xl mb-8 cursor-pointer"
    //           onClick={onNext}
    //         >
    //           Subscribe
    //         </div>
    //       </div>
    //     </div>

    //     <div className="text-primary_font_color px-8 pt-4">
    //       <p className="font-medium mb-4 text-primary_font_color ">
    //         Each Package Includes
    //       </p>
    //       <div className="flex items-center gap-2">
    //         <img
    //           src={Done_icon}
    //           alt="aad"
    //           className="object-scale-down w-[16px]"
    //         />
    //         <p className="mb-2">Explore Opportunities</p>
    //       </div>

    //       <div className="flex items-center gap-2">
    //         <img
    //           src={Done_icon}
    //           alt="aad"
    //           className="object-scale-down w-[16px]"
    //         />
    //         <p className="mb-2">Build Your Team</p>
    //       </div>

    //       <div className="flex items-center gap-2">
    //         <img
    //           src={Done_icon}
    //           alt="aad"
    //           className="object-scale-down w-[16px]"
    //         />
    //         <p className="mb-2">Effortless Submissions</p>
    //       </div>

    //       <div className="flex items-center gap-2">
    //         <img
    //           src={Done_icon}
    //           alt="aad"
    //           className="object-scale-down w-[16px]"
    //         />
    //         <p className="mb-2">Direct Communication</p>
    //       </div>

    //       <div className="flex items-center gap-2">
    //         <img
    //           src={Done_icon}
    //           alt="aad"
    //           className="object-scale-down w-[16px]"
    //         />
    //         <p className="mb-2">Centralized Invoicing</p>
    //       </div>

    //       <div className="flex items-center gap-2">
    //         <img
    //           src={Done_icon}
    //           alt="aad"
    //           className="object-scale-down w-[16px]"
    //         />
    //         <p>One-Stop Solution</p>
    //       </div>

    //       <div className="flex items-center mt-4 gap-4">
    //         <img
    //           src={Discover}
    //           alt="aad"
    //           className="object-scale-down w-[40px]"
    //         />

    //         <img
    //           src={Master}
    //           alt="aad"
    //           className="object-scale-down w-[40px]"
    //         />

    //         <img src={Visa} alt="aad" className="object-scale-down w-[40px]" />
    //       </div>
    //     </div>
    //   </div>
    //   {/* <Button onClick={onNext} className="bg-primary normal-case mt-6">
    //     Next
    //   </Button> */}
    // </div>

    <div className="relative">
      <img
        src={Subscription_photo}
        alt="aad"
        className="object-scale-down w-full"
      />

      <div
        className="absolute bottom-[110px] left-[542px] transform  w-[220px] -translate-x-1/2 -translate-y-1/2 border-solid border-2 border-[#8645ff] hover:bg-[#8645ff] hover:text-white cursor-pointer"
        onClick={onNext}
      >
        <p className="text-[#8645ff] text-[18px] text-center px-4 py-2 hover:text-white">
          Subscribe
        </p>
      </div>

      <div
        className="absolute bottom-[110px] left-[942px] transform w-[220px] -translate-x-1/2 -translate-y-1/2 border-solid border-2 border-[#8645ff] bg-[#8645ff] hover:bg-[#752dfb] hover:text-white cursor-pointer mt-4"
        onClick={onNext}
      >
        <p className="text-[#fff] text-[18px] text-center px-4 py-2 hover:text-white">
          Subscribe
        </p>
      </div>
    </div>
  );
};

export default Page01;
