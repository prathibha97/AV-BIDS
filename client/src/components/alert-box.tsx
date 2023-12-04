import { Alert, AlertProps } from '@material-tailwind/react';
import { FC } from 'react';

export interface AlertBoxProps {
  color: AlertProps['color'];
  variant: AlertProps['variant'];
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
