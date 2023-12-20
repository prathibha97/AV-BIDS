import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

interface ProviderGuardProps {
  children: React.ReactNode;
}

const ProviderGuard: FC<ProviderGuardProps> = ({ children }) => {
  const navigate = useNavigate();

  const storedUser = JSON.parse(localStorage.getItem('userInfo') || '{}');

  // Check if the userType is "PLANNER"
  const isProvider = storedUser.user?.userType === 'PROVIDER';

  return isProvider ? (
    <>{children}</>
  ) : (
    <div className='flex flex-col justify-center items-center h-full'>
      <h2 className='text-red-500 mb-2'>
        Access restricted. This content is only available to Provider users.
      </h2>
      {/* You can provide a link to redirect planners to the appropriate page */}
      <button onClick={() => navigate('/sign-in')}>Login as Provider</button>
    </div>
  );
};

export default ProviderGuard;
