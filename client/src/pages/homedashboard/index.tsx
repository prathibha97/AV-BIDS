import { Button, Card, Typography } from '@material-tailwind/react';

import PLUS_ICON from '../../assets/11_dashboard/plus.png';
import EditProfile from './components/edit-profile';
import ResetPassword from './components/reset-password';

// ------------------------------------Table Contents--------------------------------------------------
const TABLE_HEAD = ['Name', 'Role', 'Email', ''];

const TABLE_ROWS = [
  {
    name: 'Dixie Normus',
    Role: 'Manager',
    email: 'dixie@anitameetings.com',
  },
  {
    name: 'Jane Smith',
    Role: 'Developer',
    email: 'dixie@anitameetings.com',
  },
  {
    name: 'Jane Smith',
    Role: 'Executive',
    email: 'dixie@anitameetings.com',
  },
  {
    name: 'Jane Smith',
    Role: 'Developer',
    email: 'dixie@anitameetings.com',
  },
  {
    name: 'Jane Smith',
    Role: 'Manager',
    email: 'dixie@anitameetings.com',
  },
];
// ------------------------------------Table Contents--------------------------------------------------

function Index() {
  return (
    <div className='container mx-auto'>
      <EditProfile />

      <section className='bg-[#fff] px-8 py-8 rounded-xl drop-shadow mb-6'>
        <div className='flex items-center justify-between mb-4'>
          <h2 className='text-[20px] font-semibold'>Members</h2>
          <Button
            variant='outlined'
            size='sm'
            className='hidden lg:inline-block rounded-btn '
          >
            <div className='flex items-center gap-2'>
              <img src={PLUS_ICON} alt='aad' className='object-contain' />
              <span className='text-black normal-case'>Add New Member</span>
            </div>
          </Button>
        </div>

        <div>
          <Card className='h-full w-full shadow-none rounded-xl '>
            <table className='w-full min-w-max table-auto text-left'>
              <thead>
                <tr>
                  {TABLE_HEAD.map((head) => (
                    <th
                      key={head}
                      className='border-b border-blue-gray-100 bg-[#e7daff] p-4'
                    >
                      <p className='font-medium leading-none text-black'>
                        {head}
                      </p>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TABLE_ROWS.map(({ name, Role, email }, index) => {
                  const isLast = index === TABLE_ROWS.length - 1;
                  const classes = isLast
                    ? 'p-4'
                    : 'p-4 border-b border-blue-gray-50';

                  return (
                    <tr key={name}>
                      <td className={classes}>
                        <Typography
                          variant='small'
                          color='blue-gray'
                          className='font-normal'
                        >
                          {name}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant='small'
                          color='blue-gray'
                          className='font-normal'
                        >
                          {Role}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant='small'
                          color='blue-gray'
                          className='font-normal'
                        >
                          {email}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          as='a'
                          href='#'
                          variant='small'
                          color='blue-gray'
                          className='font-medium'
                        >
                          Edit
                        </Typography>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Card>
        </div>
      </section>

      <ResetPassword />

      <h2 className='text-[30px] text-primary text-center mb-4'>Site Map</h2>

      {/* <div className="flex items-center justify-center gap-32 mb-6">
        <div className="font-medium">
          <Link to="/homedashboard">
            <div>Dashboard Home</div>
          </Link>

          <Link to="/12_events">
            <div>12_events</div>
          </Link>

          <Link to="/13_event_details_page">
            <div>13_event_details_page</div>
          </Link>
          <Link to="/13_edit_event">
            <div>13_edit_events</div>
          </Link>

          <Link to="/13_edit_event_1">
            <div>13_edit_event_1</div>
          </Link>
        </div>

        <div className="font-medium">
          <Link to="/13_edit_event_2">
            <div>13_edit_event_2</div>
          </Link>

          <Link to="/13_edit_event_3">
            <div>13_edit_event_3</div>
          </Link>

          <Link to="/13_edit_event_4">
            <div>13_edit_event_4</div>
          </Link>

          <Link to="/13_edit_event_5">
            <div>13_edit_event_5</div>
          </Link>
        </div>

        <div className="font-medium">
          <Link to="/13_edit_event_6">
            <div>13_edit_event_6</div>
          </Link>

          <Link to="/14_messages">
            <div>14_messages</div>
          </Link>

          <Link to="/14_messages_empty">
            <div>14_messages_empty</div>
          </Link>
        </div>
      </div> */}
    </div>
  );
}

export default Index;
