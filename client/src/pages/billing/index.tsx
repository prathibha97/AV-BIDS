import BillingDetails from "./components/billing-details";
import CardsOnFile from "./components/cards-on-file";
import CurrentPlan from "./components/current-plan";
import Breadcrumbs from "../../components/Breadcrumbs";
function Index() {
  return (
    <div className="container mx-auto">
      <Breadcrumbs />
      <h2 className="text-[20px] font-semibold mb-4">Billing & Membership</h2>
      <CurrentPlan />
      <BillingDetails />
      <CardsOnFile />
    </div>
  );
}

export default Index;
