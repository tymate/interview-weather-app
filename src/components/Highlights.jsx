import { Grid, Heading, HStack, Progress, Stack, Text } from '@chakra-ui/react';
import { useWeather } from '../hooks';
import HighlightCard from './HighlightCard';
import { round } from 'lodash';
import WindHeading from './Icons/WindHeading';

const Highlights = () => {
  const { data, isLoading } = useWeather();
  const today = data?.data?.consolidatedWeather?.[0];

  const windDirection = today?.windDirectionCompass;
  const angle = windDirection == "N" ? 180 : 
                windDirection == "S" ? -180 : 
                windDirection == "E" ? 90 : -90;

  console.log(today);
  return (
    <Stack spacing={4}>
      <Heading as="h2" size="lg">
        Today’s highlights
      </Heading>

      <Grid templateColumns="repeat(auto-fit, minmax(15em, 1fr))" gap={4}>
        <HighlightCard
          isLoading={isLoading}
          title="Wind speed"
          value={
            Boolean(today?.windSpeed)
              ? `${round(today.windSpeed)} km/h`
              : undefined
          }
          footer={
            <HStack>
              <WindHeading
              angle={angle} />
              <Text color="gray.500">{today?.windDirectionCompass}</Text>
            </HStack>
          }
        />

        <HighlightCard
          isLoading={isLoading}
          title="Humidity "
          value={
            Boolean(today?.humidity) ? `${round(today.humidity)} %` : undefined
          }
          footer={
            <Progress
              width="100%"
              min={0}
              max={100}
              value={today?.humidity ?? 0}
              borderRadius="full"
            />
          }
        />

        <HighlightCard
          isLoading={isLoading}
          title="Visibility"
          value={
            Boolean(today?.visibility)
              ? `${round(today.visibility)} km`
              : undefined
          }
        />

        <HighlightCard
          isLoading={isLoading}
          title="Air pressure"
          value={
            Boolean(today?.airPressure)
              ? `${round(today.airPressure)} mb`
              : undefined
          }
        />
      </Grid>
    </Stack>
  );
};

export default Highlights;
