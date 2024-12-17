import { createContext } from 'react';
import { User } from '.';

// undefined as no access to user at this point initially
const DashboardContext = createContext<User | undefined>(undefined)

export default DashboardContext;