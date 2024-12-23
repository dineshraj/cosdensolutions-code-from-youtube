import React, { useState, useCallback} from 'react';

import { shuffle } from '@/utils';

import Search from './Search';

const allUsers = [
  'john',
  'alex',
  'george',
  'simon',
  'james',
];

interface DemoProps {}

export default function Demo({}: DemoProps) {
  const [users, setUsers] = useState(allUsers);


  // this function is re-rendered each time
  // which means that the onChange for <Search /> thinks its
  // props have changed  (despite memo in <Search />)
  // using useCallback prevents this
  // so basically each time a user changes (shuffles in this case) it thinks a
  // new search function has been made (coz of referencing) so it'll re-render that too

  // const handleSearch = (text: string) => {
  //   console.log(users[0]);

  //   const filteredUsers = allUsers.filter((user) =>
  //     user.includes(text),
  //   );  
  //   setUsers(filteredUsers);
  // };

    const handleSearch = useCallback((text: string) => {
      console.log(users[0]);

    const filteredUsers = allUsers.filter((user) =>
      user.includes(text),
    );
    setUsers(filteredUsers);
  }, [users]);

  return (
    <div className='tutorial'>
      <div className='align-center mb-2 flex'>
        <button onClick={() => setUsers(shuffle(allUsers))}>
          Shuffle
        </button>

        <Search onChange={handleSearch} />
      </div>
      <ul>
        {users.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </div>
  );
}