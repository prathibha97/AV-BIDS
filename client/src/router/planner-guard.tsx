import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

interface PlannerGuardProps {
  children: React.ReactNode;
}

const PlannerGuard: FC<PlannerGuardProps> = ({ children }) => {
  const navigate = useNavigate();

  const storedUser = JSON.parse(localStorage.getItem('userInfo') || '{}');

  // Check if the userType is "PLANNER"
  const isPlanner = storedUser.user.userType === 'PLANNER';

  return isPlanner ? (
    <>{children}</>
  ) : (
    <div className='flex flex-col justify-center items-center h-full'>
      <h2 className='text-red-500 mb-2'>
        Access restricted. This content is only available to PLANNER users.
      </h2>
      {/* You can provide a link to redirect planners to the appropriate page */}
      <button onClick={() => navigate('/sign-in')}>
        Login as Planner
      </button>
    </div>
  );
};

export default PlannerGuard;
