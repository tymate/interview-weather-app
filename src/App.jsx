import { Grid } from '@chakra-ui/react';
import Forecast from './components/Forecast';
import Highlights from './components/Highlights';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

const App = () => {
  return (
    <Grid
      minH="100vh"
      backgroundColor="gray.900"
      templateColumns="minmax(15em, 1fr) 3fr"
      sx={{
        '@media (max-width: 450px)': {
          display: 'flex',
          flexDirection: 'column'
        },
      }}
      >
      <Sidebar />
      <MainContent>
        <Forecast />
        <Highlights />
      </MainContent>
    </Grid>
  );
};

export default App;
