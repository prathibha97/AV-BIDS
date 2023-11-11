import CardDetails from "./card-details";

const StepFour = () => {
  return (
    <div className='grid grid-cols-2 gap-6'>
      <div className='bg-[#F3F1FB] rounded-lg p-6'>
        <p className='text-[18px] font-medium mb-4'>Screens</p>
        <Screens />
      </div>
      <div className='bg-[#F3F1FB] rounded-lg p-6'>
        <p className='text-[18px] font-medium mb-4'>Projection</p>
        <Projection />
      </div>
    </div>
  );
}
 
export default StepFour;

function Screens() {
  return (
    <div>
      <CardDetails name="21:9 Large Format Screen" />
      <CardDetails name="Fast Fold Screen (16:9 Format) Large Venue" />
      <CardDetails name="Fast Fold Screen (16:9 Format) Medium Venue" />
      <CardDetails name="Fast Fold Screen (16:9 Format) Meeting Room" />
      <CardDetails name="Fast Fold Screen (4:3 Format) Large Venue" />
      <CardDetails name="Fast Fold Screen (4:3 Format) Medium Venue" />
      <CardDetails name="Fast Fold Screen (4:3 Format) Meeting Room" />
      <CardDetails name="Fast Fold Drape Kit" />
      <CardDetails name="Tripod Screens 60”-96" />
      <CardDetails name="LCD Monitor" />
      <CardDetails name="Video LED Wall" />
      <CardDetails name="Screen Rigging and Truss" />
    </div>
  );
}

function Projection() {
  return (
    <div>
      <CardDetails name="21:9 Format Projection" />
      <CardDetails name="Large Venue Projector (Standard Throw Lens)" />
      <CardDetails name="Large Venue Projector (Long Throw Lens)" />
      <CardDetails name="Large Venue Projector (Short Throw Lens)" />
      <CardDetails name="Medium Venue Projector (Standard Throw Lens)" />
      <CardDetails name="Medium Venue Projector (Long Throw Lens)" />
      <CardDetails name="Medium Venue Projector (Short Throw Lens)" />
      <CardDetails name="Meeting Room Projector" />
      <CardDetails name="Projector Rigging and Truss" />
    </div>
  );
}