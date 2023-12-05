import { Bars2Icon } from '@heroicons/react/24/solid';
import { Button, IconButton, Navbar } from '@material-tailwind/react';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useGetCurrentUser } from '../app/hooks/useUser';
import PLUS_ICON from '../assets/navigation bar/plus.png';
import ProfileMenu from '../components/profile-menu';

// nav list component
export function NavbarDashboard() {
  const navigate = useNavigate();
  const [isNavOpen, setIsNavOpen] = React.useState(false);

  const user = useGetCurrentUser();

  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );
  }, []);

  const navList = (
    <ul className='mb-4 mt-2 flex justify-center flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6'>
      <Link to='/events'>
        <p className='text-gray-600 font-medium'>Events Page</p>
      </Link>
    </ul>
  );

 return (
   <div>
     <div className='w-full'>
       <Navbar className='mx-auto max-w-screen-xl p-2 lg:pl-6 bg-[#f7f6fd] shadow-none border-none py-6'>
         <div className='relative mx-auto flex items-center justify-between text-blue-gray-900'>
           {user && user?.userType === 'PLANNER' && (
             <Button
               variant='outlined'
               size='sm'
               className='lg:inline-block rounded-btn '
               onClick={() => navigate('/events/new')}
             >
               <div className='flex items-center gap-2'>
                 <img src={PLUS_ICON} alt='aad' className='object-contain' />
                 <span className='text-black normal-case'>Post New Event</span>
               </div>
             </Button>
           )}

           <div className='lg:block flex-grow text-center'>{navList}</div>

           {user ? (
             <>
               <IconButton
                 size='sm'
                 color='blue-gray'
                 variant='text'
                 onClick={toggleIsNavOpen}
                 className='ml-auto mr-2 lg:hidden'
               >
                 <Bars2Icon className='h-6 w-6' />
               </IconButton>
               <ProfileMenu />
             </>
           ) : (
             <div className='lg:flex lg:items-center lg:justify-end'>
               <Button
                 variant='text'
                 size='sm'
                 className='lg:inline-block text-btn'
               >
                 <Link to='/sign-in'>
                   <span className='text-black'>Login</span>
                 </Link>
               </Button>
               <Button
                 variant='outlined'
                 size='sm'
                 className='lg:inline-block rounded-btn ml-2'
               >
                 <Link to='/sign-up'>
                   <span className='text-black'>Get Started</span>
                 </Link>
               </Button>
             </div>
           )}
         </div>
       </Navbar>
     </div>
   </div>
 );
}
