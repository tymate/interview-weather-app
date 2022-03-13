import { useQuery } from 'react-query';
import api from '../api';
// import useApp from './useApp';

const useWeather = () => {
  // const { selectedCity } = useApp();
  const locationId = 608105;

  const response = useQuery(
    ['weather', locationId],
    () => api.get(`/location/${locationId}/`),
    {
      enabled: Boolean(location),
    },
  );

  return response;
};

export default useWeather;
