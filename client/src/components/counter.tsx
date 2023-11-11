interface CounterProps {
  value: number;
  onDecrease: () => void;
  onIncrease: () => void;
}

const Counter: React.FC<CounterProps> = ({
  value,
  onDecrease,
  onIncrease,
}) => {
  return (
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
  );
};

export default Counter;
