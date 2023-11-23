import { Card, Typography } from '@material-tailwind/react';
import { List, ListItem, ListItemPrefix } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';
import DASHBOARD from '../assets/sidebar/dashboard.png';
import MESSAGES from '../assets/sidebar/message.png';
import EVENT from '../assets/sidebar/my events.png';
import { useGetCurrentUser } from '../app/hooks/useUser';

const SidebarDashboard = () => {
  const navigate = useNavigate();
  const user = useGetCurrentUser();

  const imageStyles = 'object-scale-down w-[18px]';

  return (
    <div>
      <Card className='h-[calc(100vh-2rem)] w-full max-w-[15rem] p-4 bg-[#fff]'>
        <div className='mb-2 p-4'>
          <Typography variant='h5' color='blue-gray'>
            Sidebar
          </Typography>
        </div>
        <List>
          <ListItem onClick={() => navigate('/dashboard')}>
            <ListItemPrefix>
              <img src={DASHBOARD} alt='Dashboard' className={imageStyles} />
            </ListItemPrefix>
            Dashboard
          </ListItem>
          {user?.userType === 'PLANNER' && (
            <ListItem onClick={() => navigate('/events/my-events')}>
              <ListItemPrefix>
                <img src={EVENT} alt='My Event' className={imageStyles} />
              </ListItemPrefix>
              My Event
            </ListItem>
          )}
          <ListItem onClick={() => navigate('/messages')}>
            <ListItemPrefix>
              <img src={MESSAGES} alt='Messages' className={imageStyles} />
            </ListItemPrefix>
            Messages
          </ListItem>
          {user?.userType === 'PROVIDER' && (
            <>
              <ListItem onClick={() => navigate('/event-alerts')}>
                <ListItemPrefix>
                  <img
                    src={MESSAGES}
                    alt='Event Alerts'
                    className={imageStyles}
                  />
                </ListItemPrefix>
                Event Alerts
              </ListItem>
              <ListItem onClick={() => navigate('/saved-events')}>
                <ListItemPrefix>
                  <img
                    src={MESSAGES}
                    alt='Saved Events'
                    className={imageStyles}
                  />
                </ListItemPrefix>
                Saved Events
              </ListItem>
              <ListItem onClick={() => navigate('/billing')}>
                <ListItemPrefix>
                  <img
                    src={MESSAGES}
                    alt='Billing & Membership'
                    className={imageStyles}
                  />
                </ListItemPrefix>
                Billing & Membership
              </ListItem>
            </>
          )}
        </List>
      </Card>
    </div>
  );
};

export default SidebarDashboard;
