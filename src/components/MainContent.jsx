import { Stack } from '@chakra-ui/react';

const MainContent = props => (
  <Stack
    as="main"
    spacing={16}
    maxWidth="container.md"
    marginInline="auto"
    paddingX={{ base: 4, md: 8 }}
    paddingY={{ base: 8, md: 12 }}
    width="100%"
    {...props}
  />
);

export default MainContent;
