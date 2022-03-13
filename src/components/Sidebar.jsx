import { Box, Heading, Stack, Text } from '@chakra-ui/react';
import WeatherIcon from './WeatherIcon';

const Sidebar = () => {
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
          <WeatherIcon width="100%" />
          <Heading as="h1" fontSize="8xl" color="white">
            20
            <Text fontSize="4xl" display="inline" color="gray.500">
              °C
            </Text>
          </Heading>
          <Text fontSize="4xl" display="inline">
            Sunny
          </Text>
        </Stack>
        <Stack alignItems="center" spacing={0}>
          <Text>Today • Sun 13 Mar</Text>
          <Text>Lille</Text>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Sidebar;
