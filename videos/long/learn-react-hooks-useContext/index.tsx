import React, { useState } from 'react';

import Dashboard from './Dashboard';
import DashboardContext from './context';

export interface User {
  isSubscribed: boolean;
  name: string;
}

interface DemoProps {}

export default function Demo({ }: DemoProps) {
  // in  real life this would be a fetch in a useeffect
  const [user] = useState<User>({
    isSubscribed: true,
    name: 'You',
  });

  return (
    <div>
      <DashboardContext.Provider value={user}>
        <Dashboard />
      </DashboardContext.Provider>  
    </div>
  );
}
