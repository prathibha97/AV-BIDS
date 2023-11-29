import BillingDetails from './components/billing-details';
import CardsOnFile from './components/cards-on-file';
import CurrentPlan from './components/current-plan';

function Index() {
  return (
    <div className='container mx-auto'>
      <h2 className='text-[20px] font-semibold mb-4'>Billing & Membership</h2>
      <CurrentPlan />
      <BillingDetails />
      <CardsOnFile />
    </div>
  );
}

export default Index;