import React from 'react';
import { User } from '.';

interface SidebarProps {
}

export function Sidebar({ }: SidebarProps) {
  return (
    <div>
      <div>{user.name}</div>
      <div>Subscription Status: {user.isSubscribed}</div>
    </div>
  );
}

interface ProfileProps {
}

export function Profile({ }: ProfileProps) {
  return <div>{user.name}</div>;
}
