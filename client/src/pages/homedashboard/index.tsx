import EditProfile from './components/edit-profile';
import MemberTable from './components/member-table';
import ResetPassword from './components/reset-password';

function Index() {
  return (
    <div className='container mx-auto'>
      <EditProfile />

      <MemberTable />

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
