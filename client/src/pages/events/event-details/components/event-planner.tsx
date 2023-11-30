import { Rating } from "@material-tailwind/react";
import { FC } from "react";
import { UserWithReviewWithEvent } from "../../../../types";

interface EventPlannerProps {
  planner: UserWithReviewWithEvent | null;
}

const EventPlanner: FC<EventPlannerProps> = ({ planner }) => {
  // Calculate the average rating
  const averageRating =
    planner &&
    planner?.reviews?.reduce((sum, review) => sum + review.rating, 0) /
      planner?.reviews?.length;

  return (
    <div className="bg-[#F3F1FB] mt-8 p-6 rounded-lg">
      <h2 className="text-[20px] mb-6">About the event planner</h2>
      {/* <div className="flex items-center gap-4">
        <div className="flex items-center">
          <Rating
            value={averageRating!}
            unratedColor="amber"
            ratedColor="amber"
          />
        </div>
        <div>
          <p className="text-18px">{`${averageRating?.toFixed(2)} of ${
            planner?.reviews?.length
          } reviews`}</p>
        </div>
      </div> */}

      <div className="flex items-center gap-12 mt-4">
        {/* TODO: update address dynamically */}
        <div>
          <h2 className="text-[16px] text-[#000]">United States</h2>
          <p className="text-[16px] text-[#000]">Arizona</p>
        </div>

        <div>
          <h2 className="text-[18px]">{`${planner?.events?.length} Events Posted`}</h2>
          <p className="text-[18px]">{`${
            planner &&
            planner.events?.filter((event) => event?.proposals?.length > 0)
              .length
          } currently listed`}</p>
        </div>
      </div>
      <p className="text-[18px] mt-6">
        {planner && planner.createdAt
          ? `Member since ${new Date(planner.createdAt).toLocaleDateString()}`
          : "Member since N/A"}
      </p>
    </div>
  );
};

export default EventPlanner;
