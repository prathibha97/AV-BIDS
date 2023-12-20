import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetCurrentUser } from '../../app/hooks/useUser';

interface SubscriptionGuardProps {
  children: React.ReactNode;
}

const SubscriptionGuard: FC<SubscriptionGuardProps> = ({ children }) => {
  const navigate = useNavigate();

  const user = useGetCurrentUser();

  const storedUser = JSON.parse(localStorage.getItem('userInfo') || '{}');

  // Check if the user has an active subscription with a plan of 'PREMIUM' or 'TRIAL'
  const hasSubscription =
    user?.subscription &&
    (user.subscription.plan === 'PREMIUM' ||
      user.subscription.plan === 'TRIAL');

  // Check if the userType is "PROVIDER"
  const isProvider = user?.userType === 'PROVIDER';

  // Allow access without restrictions for planner users
  const isPlanner = user?.userType === 'PLANNER';

  return isPlanner || (storedUser.token && isProvider && hasSubscription) ? (
    <>{children}</>
  ) : (
    <div className='flex flex-col justify-center items-center h-full'>
      <h2 className='text-red-500 mb-2'>
        {isProvider
          ? 'Subscription required. Please subscribe to access this content.'
          : 'Access restricted to PROVIDER users with an active subscription.'}
      </h2>
      <button onClick={() => navigate('/billing')}>Subscribe</button>
    </div>
  );
};

export default SubscriptionGuard;
