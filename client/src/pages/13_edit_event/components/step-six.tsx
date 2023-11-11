import CardDetails from "./card-details";

const StepSix = () => {
  return (
    <div className='grid grid-cols-2 gap-6'>
      <div className='bg-[#F3F1FB] rounded-lg p-6'>
        <p className='text-[18px] font-medium mb-4'>Lighting</p>
        <Lighting />
      </div>
      <div className='bg-[#F3F1FB] rounded-lg p-6'>
        <p className='text-[18px] font-medium mb-4'>Scenic</p>
        <Scenic />
      </div>
      <div className='bg-[#F3F1FB] rounded-lg p-6'>
        <p className='text-[18px] font-medium mb-4'>Electrical</p>
        <Electrical />
      </div>
    </div>
  );
}
 
export default StepSix;

function Lighting() {
  return (
    <div>
      <CardDetails name='Uplighting' />
      <CardDetails name='Stage Wash' />
      <CardDetails name='Moving Head Lights' />
      <CardDetails name='Gobo' />
      <CardDetails name='Inflatable Balloon Light' />
      <CardDetails name='LED Lighting Effects' />
      <CardDetails name='Spotlight' />
      <CardDetails name='Lighting Rigging and Truss' />
    </div>
  );
}

function Scenic() {
  return (
    <div>
      <CardDetails name='Drape Kit (Black)' />
      <CardDetails name='Drape Kit (Grey)' />
      <CardDetails name='Drape Kit (White)' />
      <CardDetails name='Scenic Panels' />
      <CardDetails name='Podium' />
    </div>
  );
}

function Electrical() {
  return (
    <div>
      <CardDetails name='Audience Table Power' />
      <CardDetails name='Power Strips 6x1' />
      <CardDetails name='Portable Distribution Box (50 Amp)' />
      <CardDetails name='Portable Distribution Box (100 Amp)' />
      <CardDetails name='Portable Distribution Box (200 Amp)' />
      <CardDetails name='Portable Distribution Box (300 Amp)' />
      <CardDetails name='Portable Distribution Box (400 Amp)' />
    </div>
  );
}