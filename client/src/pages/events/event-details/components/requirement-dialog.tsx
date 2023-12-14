import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from '@material-tailwind/react';
import { FC } from 'react';
import {
  Communication,
  Event,
  Microphones,
  Mixers,
  PresenterTools,
  Projection,
  Screens,
  Speaksers,
  VideoCamera,
  VideoProcessing,
} from '../../../../types';

interface RequirementDialogProps {
  open: boolean;
  event: Event | null;
  handleOpen: () => void;
}

const RequirementDialog: FC<RequirementDialogProps> = ({
  handleOpen,
  open,
  event,
}) => {
  const renderSection = (
    title: string,
    requirements:
      | Record<string, number>
      | undefined
      | Microphones
      | Speaksers
      | Mixers
      | Communication
      | Projection
      | Screens
      | VideoCamera
      | VideoProcessing
      | PresenterTools
  ) => {
    return (
      requirements && (
        <>
          <h3 className='font-bold mb-2'>{title}</h3>
          {Object.entries(requirements).map(
            ([key, value]) => value > 0 && <p key={key}>{`${key}: ${value}`}</p>
          )}
        </>
      )
    );
  };

  return (
    <Dialog open={open} handler={handleOpen}>
      <DialogHeader>{event?.title} - AV Requirements</DialogHeader>
      <DialogBody className='max-h-[500px] overflow-y-auto'>
        <div>
          {renderSection('General Requirements', {
            // @ts-ignore
            'Room Count': event?.roomCount,
            // @ts-ignore
            'General Session Count': event?.generalSessionCount,
            // @ts-ignore
            'Breakout Session Count': event?.breakoutSessionCount,
            // @ts-ignore
            'Presenter Count': event?.presenterCount,
          })}

          {renderSection('Microphone Requirements', event?.microphones)}

          {renderSection('Speakers Requirements', event?.speakers)}

          {renderSection('Mixer Requirements', event?.mixers)}

          {renderSection('Communication Requirements', event?.communication)}

          {renderSection('Screens Requirements', event?.screens)}

          {renderSection('Projection Requirements', event?.projection)}

          {renderSection('Video Camera Requirements', event?.videoCamera)}

          {renderSection(
            'Video Processing Requirements',
            event?.videoProcessing
          )}

          {renderSection('Presenter Tools Requirements', event?.presenterTools)}

          {renderSection('Lighting Requirements', event?.lighting)}

          {renderSection('Scenic Requirements', event?.scenic)}

          {renderSection('Electrical Requirements', event?.electrical)}

          {renderSection('Staff Requirements', event?.staff)}

          {renderSection(
            'Other Requirements',
            // @ts-ignore
            {
              // @ts-ignore
              ...event?.otherRequirements.reduce((acc, req) => {
                // @ts-ignore
                if (req.count > 0) {
                  acc[req.label] = req.count;
                }
                return acc;
              }, {}),
            }
          )}
        </div>
      </DialogBody>
      <DialogFooter>
        <Button
          variant='text'
          color='red'
          onClick={handleOpen}
          className='mr-1'
        >
          <span>Close</span>
        </Button>
        <Button className='bg-primary' onClick={handleOpen}>
          <span>Download</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
};

export default RequirementDialog;
