import { Skeleton, Text } from '@chakra-ui/react';
import Card from './Card';

const HighlightCard = ({ title, value, footer, isLoading }) => {
  return (
    <Card alignItems="center" height="100%">
      <Text>{title}</Text>
      <Skeleton
        isLoaded={!isLoading}
        borderRadius="md"
        startColor="gray.700"
        endColor="gray.800"
      >
        <Text fontSize="6xl" fontWeight="bold" minW="3em" textAlign="center">
          {value || '—'}
        </Text>
      </Skeleton>
      {footer}
    </Card>
  );
};

export default HighlightCard;
