import { useAppSelector } from '../hooks';
import { RootState } from '../store';

export const useGetCurrentUser = () => {
  const user = useAppSelector((state: RootState) => state.user.user);
  return user;
};
