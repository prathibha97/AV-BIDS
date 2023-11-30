import { Alert } from '@material-tailwind/react';
import { FC } from 'react';

interface AlertBoxProps {
  color:
    | 'blue-gray'
    | 'gray'
    | 'brown'
    | 'deep-orange'
    | 'orange'
    | 'amber'
    | 'yellow'
    | 'lime'
    | 'light-green'
    | 'green'
    | 'teal'
    | 'cyan'
    | 'light-blue'
    | 'blue'
    | 'indigo'
    | 'deep-purple'
    | 'purple'
    | 'pink'
    | 'red';
  variant: 'filled' | 'gradient' | 'outlined' | 'ghost';
  text: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AlertBox: FC<AlertBoxProps> = ({
  color,
  variant,
  text,
  open,
  setOpen,
}) => {
  return (
    <>
      <Alert
        open={open}
        onClose={() => setOpen(false)}
        animate={{
          mount: { y: 0 },
          unmount: { y: 100 },
        }}
        color={color}
        variant={variant}
      >
        {text}
      </Alert>
    </>
  );
};

export default AlertBox;
