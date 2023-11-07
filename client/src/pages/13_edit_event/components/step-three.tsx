import CardDetails from "./card-details";

const StepThree = () => {
  return (
    <div className='grid grid-cols-2 gap-6'>
      <div className='bg-[#F3F1FB] rounded-lg p-6'>
        <p className='text-[18px] font-medium mb-4'>Microphones</p>
        <Microphones />
      </div>
      <div className='bg-[#F3F1FB] rounded-lg p-6'>
        <p className='text-[18px] font-medium mb-4'>Speakers</p>
        <Speakers />
      </div>
      <div className='bg-[#F3F1FB] rounded-lg p-6'>
        <p className='text-[18px] font-medium mb-4'>Mixers</p>
        <Mixers />
      </div>
      <div className='bg-[#F3F1FB] rounded-lg p-6'>
        <p className='text-[18px] font-medium mb-4'>Communication</p>
        <Communication />
      </div>
    </div>
  );
}
 
export default StepThree;


function Microphones() {
  return (
    <div>
      <CardDetails name='Wired Handheld' />
      <CardDetails name='Wireless Handheld' />
      <CardDetails name='Wireless Lavalier' />
      <CardDetails name='Headset Microphone' />
      <CardDetails name='Earset Microphone' />
      <CardDetails name='Gooseneck Microphone' />
      <CardDetails name='Boundary Microphone' />
      <CardDetails name='Audience Microphone' />
    </div>
  );
}

function Speakers() {
  return (
    <div>
      <CardDetails name='Speakers 8”-15”' />
      <CardDetails name='Line-array Speaker System' />
      <CardDetails name='Subwoofer 12”-18”' />
      <CardDetails name='Reference Speaker Monitors' />
      <CardDetails name='Bluetooth Speaker Small' />
      <CardDetails name='Bluetooth Speaker Large' />
      <CardDetails name='Computer Audio Speaker System' />
      <CardDetails name='Audio Rigging and Truss' />
    </div>
  );
}

function Mixers() {
  return (
    <div>
      <CardDetails name='Analog Mixer' />
      <CardDetails name='Digital Mixer' />
      <CardDetails name='Computer Audio Interface' />
      <CardDetails name='Multi-Media D.I. Box' />
      <CardDetails name='Broadcast Phone Line Interface' />
      <CardDetails name='Digital Audio Recording' />
      <CardDetails name='Audio Playback Instant Replay' />
      <CardDetails name='CD Player' />
      <CardDetails name='Audio Processing (EQ, Comp, etc.)' />
    </div>
  );
}

function Communication() {
  return (
    <div>
      <CardDetails name='Wireless Belt Pack and Headset' />
      <CardDetails name='Wired Belt Pack and Headset' />
    </div>
  );
}

