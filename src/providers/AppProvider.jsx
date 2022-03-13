import { createContext /* useState */ } from 'react';

export const AppContext = createContext();

const CITIES = [
  {
    label: 'Lille',
    id: '608105',
  },
  {
    label: 'Lyon',
    id: '609125',
  },
  {
    label: 'Bordeaux',
    id: '580778',
  },
];

const AppProvider = ({ children }) => {
  // const [selectedCity, setSelectedCity] = useState(CITIES[0]);

  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};

export default AppProvider;
