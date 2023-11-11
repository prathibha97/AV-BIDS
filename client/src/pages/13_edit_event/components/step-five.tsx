import CardDetails from "./card-details";

const StepFive = () => {
  return (
    <div className='grid grid-cols-2 gap-6'>
      <div className='bg-[#F3F1FB] rounded-lg p-6'>
        <p className='text-[18px] font-medium mb-4'>Video & Camera</p>
        <VideoCamera />
      </div>
      <div className='bg-[#F3F1FB] rounded-lg p-6'>
        <p className='text-[18px] font-medium mb-4'>Video Processing</p>
        <VideoProcessing />
      </div>
      <div className='bg-[#F3F1FB] rounded-lg p-6'>
        <p className='text-[18px] font-medium mb-4'>Presenter Tools</p>
        <PresenterTools />
      </div>
    </div>
  );
}
 
export default StepFive;

function VideoCamera() {
  return (
    <div>
      <CardDetails name='Broadcast Camera' />
      <CardDetails name='Roaming Camera' />
      <CardDetails name='Camcorder' />
      <CardDetails name='Video & Camera Lighting' />
      <CardDetails name='Photography Camera' />
    </div>
  );
}

function VideoProcessing() {
  return (
    <div>
      <CardDetails name='Video Switching & Effects Processing' />
      <CardDetails name='Video Capture' />
      <CardDetails name='Screen Blend (21:9 Format)' />
      <CardDetails name='Video Streaming' />
      <CardDetails name='DVD-Blu-Ray Player' />
      <CardDetails name='VHS/DVD Player' />
    </div>
  );
}

function PresenterTools() {
  return (
    <div>
      <CardDetails name='Speaker Timer' />
      <CardDetails name='Presentation Remote Clicker' />
      <CardDetails name='Laser Pointer' />
      <CardDetails name='Perfect Cue System' />
      <CardDetails name='Flipchart' />
    </div>
  );
}