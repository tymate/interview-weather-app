import { Box, Heading, Stack, Text, Select } from '@chakra-ui/react';
import WeatherIcon from './WeatherIcon';
import { useWeather } from '../hooks';
import { round } from 'lodash';
import { formatDate } from '../utils/index';

const Sidebar = () => {
  const { data } = useWeather();
  const today = data?.data?.consolidatedWeather?.[0];

  console.log('hello', today);
  return (
    <Box backgroundColor="gray.800" color="gray.500">
      <Stack
        alignItems="center"
        justifyContent="space-between"
        paddingY={{ base: 8, md: 12 }}
        minH="100vh"
        spacing={12}
      >
        <span /> {/* Intentionnaly left blank */}
        <Stack alignItems="center" spacing={0}>
        <Select placeholder="Choose your city" variant="unstyled">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
          <WeatherIcon width="100%" abbr={today?.weatherStateAbbr} />
          <Heading as="h1" fontSize="8xl" color="white">
            {round(today?.maxTemp) ? round(today?.maxTemp) : '...'}
            <Text fontSize="4xl" display="inline" color="gray.500">
              °C
            </Text>
          </Heading>
          <Text fontSize="4xl" display="inline">
            {today?.weatherStateName}
          </Text>
        </Stack>
        <Stack alignItems="center" spacing={0}>
          <Text>Today • {formatDate(today?.applicableDate)}</Text>
          <Text>Lille</Text>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Sidebar;
