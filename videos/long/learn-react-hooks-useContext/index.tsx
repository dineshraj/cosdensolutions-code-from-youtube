import React, { useState } from 'react';

import Dashboard from './Dashboard';

export interface User {
  isSubscribed: boolean;
  name: string;
}

interface DemoProps {}

export default function Demo({}: DemoProps) {
  const [user] = useState<User>({
    isSubscribed: true,
    name: 'You',
  });

  return (
    <div>
      <Dashboard user={user} />
    </div>
  );
}
