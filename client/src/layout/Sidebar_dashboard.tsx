import {
  Card,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
} from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';
import { useGetCurrentUser } from '../app/hooks/useUser';
import BILLING_MEMBERSHIP from '../assets/sidebar/billing_membership.png';
import DASHBOARD from '../assets/sidebar/dashboard.png';
import EVENT from '../assets/sidebar/event_alerts.png';
import MESSAGES from '../assets/sidebar/message.png';
import SAVED_EVENTS from '../assets/sidebar/saved_events.png';

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
          {user?.userType === 'PLANNER' && (
            <ListItem onClick={() => navigate('/proposals')}>
              <ListItemPrefix>
                <img src={MESSAGES} alt='Proposals' className={imageStyles} />
              </ListItemPrefix>
              Proposals
            </ListItem>
          )}
          {user?.userType === 'PROVIDER' && (
            <>
              <ListItem onClick={() => navigate('/events/alerts')}>
                <ListItemPrefix>
                  <img src={EVENT} alt='Event Alerts' className={imageStyles} />
                </ListItemPrefix>
                Event Alerts
              </ListItem>
              <ListItem onClick={() => navigate('/events/saved-events')}>
                <ListItemPrefix>
                  <img
                    src={SAVED_EVENTS}
                    alt='Saved Events'
                    className={imageStyles}
                  />
                </ListItemPrefix>
                Saved Events
              </ListItem>
              <ListItem onClick={() => navigate('/billing')}>
                <ListItemPrefix>
                  <img
                    src={BILLING_MEMBERSHIP}
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
