import { Button, Card, Typography } from '@material-tailwind/react';

import { useEffect, useState } from 'react';
import PLUS_ICON from '../../../assets/11_dashboard/plus.png';
import { Member } from '../../../types';
import api from '../../../utils/api';


const TABLE_HEAD = ['Name', 'Role', 'Email', ''];

const TABLE_ROWS = [
  {
    name: 'Dixie Normus',
    Role: 'Manager',
    email: 'dixie@anitameetings.com',
  },
  {
    name: 'Jane Smith',
    Role: 'Developer',
    email: 'dixie@anitameetings.com',
  },
  {
    name: 'Jane Smith',
    Role: 'Executive',
    email: 'dixie@anitameetings.com',
  },
  {
    name: 'Jane Smith',
    Role: 'Developer',
    email: 'dixie@anitameetings.com',
  },
  {
    name: 'Jane Smith',
    Role: 'Manager',
    email: 'dixie@anitameetings.com',
  },
];

const MemberTable = () => {
  const [members, setMembers] = useState<Member[]>([]);

  useEffect(() => {
    const fetchMembers = async () => {
      const { data } = await api.get('/members');
      return setMembers(data);
    };
    fetchMembers();
  }, []);

  return (
    <section className='bg-[#fff] px-8 py-8 rounded-xl drop-shadow mb-6'>
      <div className='flex items-center justify-between mb-4'>
        <h2 className='text-[20px] font-semibold'>Members</h2>
        <Button
          variant='outlined'
          size='sm'
          className='hidden lg:inline-block rounded-btn '
        >
          <div className='flex items-center gap-2'>
            <img src={PLUS_ICON} alt='aad' className='object-contain' />
            <span className='text-black normal-case'>Add New Member</span>
          </div>
        </Button>
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
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast
                  ? 'p-4'
                  : 'p-4 border-b border-blue-gray-50';

                return (
                  <tr key={name}>
                    <td className={classes}>
                      <Typography
                        variant='small'
                        color='blue-gray'
                        className='font-normal'
                      >
                        {name}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant='small'
                        color='blue-gray'
                        className='font-normal'
                      >
                        {role}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant='small'
                        color='blue-gray'
                        className='font-normal'
                      >
                        {email}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        as='a'
                        href='#'
                        variant='small'
                        color='blue-gray'
                        className='font-medium'
                      >
                        Edit
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
