import { Skeleton, Stack } from '@chakra-ui/react';

const Card = ({ shouldShowSkeleton, isLoaded, ...props }) => (
  <Skeleton
    isLoaded={!shouldShowSkeleton || isLoaded}
    borderRadius="md"
    startColor="gray.800"
    endColor="gray.900"
  >
    <Stack bgColor="gray.800" borderRadius="md" padding={4} {...props} />
  </Skeleton>
);

export default Card;
