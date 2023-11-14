import { FC } from "react";

interface CardDetailsProps {
  name: string;
  value?: number;
  onDecrease?: () => void;
  onIncrease?: () => void;
}
const CardDetails: FC<CardDetailsProps> = ({name, onDecrease,value,onIncrease}) => {
  return (
    <div>
      <div className='grid grid-cols-2 gap-4 mb-4'>
        <div>
          <p className='text-[15px] font-medium'>{name}</p>
        </div>

        <div>
          <div className='flex items-center gap-4'>
            <div className='flex items-center justify-center rounded-full w-7 h-7 bg-[#F3F1FB] text-[#888888]'>
              <button type='button' onClick={onDecrease}>
                -
              </button>
            </div>
            <p>{value}</p>
            <div className='flex items-center justify-center rounded-full w-7 h-7 bg-[#F3F1FB] text-[#888888]'>
              <button type='button' onClick={onIncrease}>
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
