import { useGetCurrentUser } from '../../app/hooks/useUser';
import BillingDetails from './components/billing-details';
import BillingNewUser from './components/billing-new-user';
import CardsOnFile from './components/cards-on-file';
import CurrentPlan from './components/current-plan';

function Index() {
  const user = useGetCurrentUser();
  return (
    <div className='container mx-auto'>
      <h2 className='text-[20px] font-semibold mb-4'>Billing & Membership</h2>
      {user?.subscription?.plan === 'PREMIUM' ? (
        <>
          <CurrentPlan />
          <BillingDetails />
          <CardsOnFile />
        </>
      ) : (
        <BillingNewUser />
      )}
    </div>
  );
}

export default Index;
