// import { formatDate } from '../utils/index';
import { HStack, Text, Skeleton } from '@chakra-ui/react';
import { round } from 'lodash';
import Card from './Card';
import WeatherIcon from './WeatherIcon';



const ForecastCard = ({ forecast }) => {

  return (
    <Card alignItems="center" shouldShowSkeleton isLoaded={!forecast.isLoading}>
      <Text>{forecast?.applicableDate}</Text>
      {/* <Text>{formatDate()}</Text> */}
      <WeatherIcon abbr={forecast?.weatherStateAbbr} />
      <HStack width="100%" justifyContent="space-between">
        <Text>{round(forecast?.maxTemp)} °C</Text>
        <Text color="whiteAlpha.600">{round(forecast?.minTemp)} °C</Text>
      </HStack>
    </Card>
  );
};

export default ForecastCard;
