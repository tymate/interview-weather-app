import { Image, Skeleton } from '@chakra-ui/react';
import cloudy from '../images/weather/cloudy.png';
import drizzleSunny from '../images/weather/drizzle-sunny.png';
import drizzle from '../images/weather/drizzle.png';
import hail from '../images/weather/hail.png';
import partlyCloudy from '../images/weather/partly-cloudy.png';
import sleet from '../images/weather/sleet.png';
import snow from '../images/weather/snow.png';
import sunny from '../images/weather/sunny.png';
import thunderstorms from '../images/weather/thunderstroms.png';

const getWeatherCondition = condition => {
  switch (condition) {
    case 'sn':
      return {
        src: snow,
        condition: 'snow',
      };
    case 'sl':
      return {
        src: sleet,
        condition: 'sleet',
      };
    case 'h':
      return {
        src: hail,
        condition: 'hail',
      };
    case 't':
      return {
        src: thunderstorms,
        condition: 'thunderstorms',
      };
    case 'hr':
    case 'lr':
      return {
        src: drizzle,
        condition: 'drizzle',
      };
    case 's':
      return {
        src: drizzleSunny,
        condition: 'snow',
      };
    case 'hc':
      return {
        src: partlyCloudy,
        condition: 'partly cloudy',
      };
    case 'lc':
      return {
        src: cloudy,
        condition: 'light clouds',
      };
    case 'c':
    default:
      return {
        src: sunny,
        condition: 'sunny',
      };
  }
};

const WeatherIcon = ({ abbr, ...props }) => {
  const { src, condition } = getWeatherCondition(abbr);

  return (
    <Image
      src={src}
      style={{ aspectRatio: '1 / 1', objectFit: 'contain' }}
      alt={condition}
      {...props}
    />
  );
};

export default WeatherIcon;
