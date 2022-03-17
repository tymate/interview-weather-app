import { Grid } from '@chakra-ui/react';
import ForecastCard from './ForecastCard';
import { times, uniqueId } from 'lodash';
import { useWeather } from '../hooks';

const Forecast = () => {
  const { data, isLoading } = useWeather();
  const daysForecasts = isLoading
    ? times(5, () => ({ id: uniqueId(), isLoading: true }))
    : data?.data?.consolidatedWeather || [];

  return (
    <Grid templateColumns="repeat(auto-fit, minmax(120px, 1fr))" gap={4}>
      {daysForecasts.slice(0, 5).map(forecast => (
        <ForecastCard key={forecast.id} forecast={forecast} />
      ))}
    </Grid>
  );
};

export default Forecast;
