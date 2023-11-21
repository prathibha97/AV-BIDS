import { FC } from "react";
import { Rating } from "@material-tailwind/react";
import { UserWithReviewWithEvent } from "../../../../types";
// import Rating from "./rating";

interface EventPlannerProps {
  planner: UserWithReviewWithEvent;
}

const EventPlanner: FC<EventPlannerProps> = ({ planner }) => {
  // Calculate the average rating
  const averageRating =
    planner.reviews?.reduce((sum, review) => sum + review.rating, 0) /
    planner.reviews?.length;

  return (
    <div className="bg-[#F3F1FB] mt-8 p-6 rounded-lg">
      <h2 className="text-[22px] mb-6">About the event planner</h2>
      <div className="flex items-center gap-4">
        <div className="flex items-center">
          {/* Display stars based on the average rating */}

          {/* {Array.from({ length: 5 }, (_, index) => (
            <img
              key={index}
              src={index < Math.floor(averageRating) ? STAR_ICON : STAR_OUTLINE}
              alt="star"
              className="object-scale-down w-[26px]"
            />
          ))} */}

          <Rating
            value={averageRating}
            unratedColor="amber"
            ratedColor="amber"
          />
        </div>
        <div>
          <p className="text-18px">{`${averageRating.toFixed(2)} of ${
            planner.reviews?.length
          } reviews`}</p>
        </div>
      </div>

      <div className="flex items-center gap-12 mt-4">
        <div>
          {/* @ts-ignore */}
          <h2 className="text-[18px] text-red-500">United States</h2>
          {/* @ts-ignore */}
          <p className="text-[18px] text-red-500">Arizona</p>
        </div>

        <div>
          <h2 className="text-[18px]">{`${planner.events?.length} Events Posted`}</h2>
          <p className="text-[18px]">{`${
            // @ts-ignore
            planner.events?.filter((event) => event.proposals.length > 0).length
          } currently listed`}</p>
        </div>
      </div>
      <p className="text-[18px] mt-6">{`Member since ${new Date(
        // @ts-ignore
        planner.createdAt
      ).toLocaleDateString()}`}</p>
    </div>
  );
};

export default EventPlanner;
