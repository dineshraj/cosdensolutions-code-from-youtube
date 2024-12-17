import React from 'react';
import { User } from '.';
import { Profile, Sidebar } from './Components';

interface DashboardProps {
}

export default function Dashboard({ }: DashboardProps) {
  return (
    <div>
      <Sidebar />
      <Profile />
    </div>
  );
}
