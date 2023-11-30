import LOGO from '../../../assets/register/logo.png';

import {
  Card,
  CardBody,
  CardHeader,
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from '@material-tailwind/react';
import { useState } from 'react';
import AlertBox from '../../../components/alert-box';
import PlannerAccountForm from './components/planner-account';
import ProviderAccountForm from './components/provider-account';

export default function CheckoutForm() {
  const [userType, setUserType] = useState('PLANNER');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  return (
    <>
      <AlertBox
        color='red'
        variant='ghost'
        text={errorMessage!}
        open={open}
        setOpen={setOpen}
      />
      <div className='flex items-center justify-center h-screen bg-[#f3f1fb]'>
        <div className=''>
          <div className='flex items-center justify-center mb-6'>
            <img src={LOGO} alt='aad' className=' w-[150px] object-contain' />
          </div>
          <Card className='m-4 sm:mb-0 sm:w-[25rem]'>
            <CardHeader
              color='white'
              floated={false}
              shadow={false}
              className='m-0 grid place-items-center px-4 pt-8 pb-0 text-center'
            >
              <h2 className='text-[30] text-primary'>Create Account</h2>
            </CardHeader>
            <CardBody>
              <Tabs value={userType} className='overflow-visible'>
                <TabsHeader className='relative z-0 border border-[#E0E0E0] bg-purple_two '>
                  <Tab
                    value='PLANNER'
                    onClick={() => {
                      setUserType('PLANNER');
                    }}
                  >
                    <h2 className='text-[16px]'>Event Planner</h2>
                  </Tab>
                  <Tab
                    value='PROVIDER'
                    onClick={() => {
                      setUserType('PROVIDER');
                    }}
                  >
                    <h2 className='text-[16px]'>AV Provider</h2>
                  </Tab>
                </TabsHeader>
                <TabsBody
                  className='!overflow-x-hidden !overflow-y-visible '
                  animate={{
                    initial: {
                      x: userType === 'PLANNER' ? 400 : -400,
                    },
                    mount: {
                      x: 0,
                    },
                    unmount: {
                      x: userType === 'PLANNER' ? 400 : -400,
                    },
                  }}
                >
                  <TabPanel value='PLANNER' className='p-0 '>
                    <PlannerAccountForm
                      userType={userType}
                      setErrorMessage={setErrorMessage}
                      setOpen={setOpen}
                    />
                  </TabPanel>
                  <TabPanel value='PROVIDER' className='p-0'>
                    <ProviderAccountForm
                      userType={userType}
                      setErrorMessage={setErrorMessage}
                      setOpen={setOpen}
                    />
                  </TabPanel>
                </TabsBody>
              </Tabs>
            </CardBody>
          </Card>
        </div>
      </div>
    </>
  );
}
