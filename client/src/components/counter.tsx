interface CounterProps {
  value: number;
  onDecrease: () => void;
  onIncrease: () => void;
}

const Counter: React.FC<CounterProps> = ({ value, onDecrease, onIncrease }) => {
  return (
    <div>
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center rounded-full w-7 h-7 bg-[#F3F1FB] text-[#000]">
          <button type="button" onClick={onDecrease}>
            <p className="font-semibold">-</p>
          </button>
        </div>
        <p>{value}</p>
        <div className="flex items-center justify-center rounded-full w-7 h-7 bg-[#F3F1FB] text-[#000]">
          <button type="button" onClick={onIncrease}>
            <p className="font-semibold">+</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
