interface CardDetailsProps {
  name: string;
}
function CardDetails(props: CardDetailsProps) {
  return (
    <div>
      <div className='grid grid-cols-2 gap-4 mb-4'>
        <div>
          <p className='text-[15px] font-medium'>{props.name}</p>
        </div>

        <div>
          <div className='flex items-center gap-4'>
            <div className='flex items-center justify-center rounded-full w-7 h-7 bg-white text-[#888888]'>
              <p className='font-medium text-black'>-</p>
            </div>
            <p>0</p>
            <div className='flex items-center justify-center rounded-full w-7 h-7 bg-white text-[#888888]'>
              <p className='font-medium text-black'>+</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardDetails;