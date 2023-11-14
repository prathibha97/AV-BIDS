import { Button, Card, Dialog, Typography } from '@material-tailwind/react';

import { MdDeleteOutline, MdEdit, MdOutlineCancel } from 'react-icons/md';

import { useEffect, useState } from 'react';

import PLUS_ICON from '../../../assets/11_dashboard/plus.png';
import { Member } from '../../../types';
import api from '../../../utils/api';

import AddNewMember from '../components/add-new-member';
import DeleteMember from '../components/delete-member';

const TABLE_HEAD = ['Name', 'Role', 'Email', ''];

const MemberTable = () => {
  const [members, setMembers] = useState<Member[]>([]);

  useEffect(() => {
    const fetchMembers = async () => {
      const { data } = await api.get('/members');
      return setMembers(data);
    };
    fetchMembers();
  }, []);

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  const [open_1, setOpen_1] = useState(false);

  const handleOpen_1 = () => setOpen_1(!open_1);

  return (
    <section className='bg-[#fff] px-8 py-8 rounded-xl drop-shadow mb-6'>
      <div className='flex items-center justify-between mb-4'>
        <h2 className='text-[20px] font-semibold'>Members</h2>

        <>
          <Button
            onClick={handleOpen}
            variant='outlined'
            size='sm'
            className='hidden lg:inline-block rounded-btn '
          >
            <div className='flex items-center gap-2'>
              <img src={PLUS_ICON} alt='aad' className='object-contain' />
              <span className='text-black normal-case font-semibold'>
                Add New Member
              </span>
            </div>
          </Button>
        </>

        <Dialog open={open} handler={handleOpen} size='xs'>
          <div className='flex justify-end p-3'>
            <MdOutlineCancel
              size={32}
              className='text-black cursor-pointer'
              onClick={handleOpen}
            />
          </div>
          <AddNewMember />
        </Dialog>

        <Dialog open={open_1} handler={handleOpen_1} size='xs'>
          <div className='flex justify-end p-3'>
            <MdOutlineCancel
              size={32}
              className='text-black cursor-pointer'
              onClick={handleOpen_1}
            />
          </div>
          <DeleteMember handleOpen={handleOpen_1} />
        </Dialog>
      </div>

      <div>
        <Card className='h-full w-full shadow-none rounded-xl '>
          <table className='w-full min-w-max table-auto text-left'>
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className='border-b border-blue-gray-100 bg-[#e7daff] p-4'
                  >
                    <p className='font-medium leading-none text-black'>
                      {head}
                    </p>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {members.map(({ name, role, email }, index) => {
                return (
                  <tr key={name}>
                    <td className={'p-4 border-b border-blue-gray-50'}>
                      <Typography
                        variant='small'
                        color='blue-gray'
                        className='font-normal'
                      >
                        {name}
                      </Typography>
                    </td>
                    <td className={'p-4 border-b border-blue-gray-50'}>
                      <Typography
                        variant='small'
                        color='blue-gray'
                        className='font-normal'
                      >
                        {role}
                      </Typography>
                    </td>
                    <td className={'p-4 border-b border-blue-gray-50'}>
                      <Typography
                        variant='small'
                        color='blue-gray'
                        className='font-normal'
                      >
                        {email}
                      </Typography>
                    </td>
                    <td className={'p-4 border-b border-blue-gray-50'}>
                      <Typography
                        as='a'
                        href='#'
                        variant='small'
                        color='blue-gray'
                        className='font-medium'
                      >
                        <div className='flex items-center justify-center gap-2'>
                          <MdEdit
                            size={24}
                            className='text-[#A2A1A7]'
                            // onClick={handleOpen_1}
                          />
                          <MdDeleteOutline
                            size={24}
                            className='text-[#A2A1A7]'
                            onClick={handleOpen_1}
                          />
                        </div>
                      </Typography>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Card>
      </div>
    </section>
  );
};

export default MemberTable;
