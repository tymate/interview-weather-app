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
