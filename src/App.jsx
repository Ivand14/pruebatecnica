import { Box, Typography } from '@mui/material';

import Header from './components/header';
import Recomendations from './components/Recomendations';
import Banner from './components/Banner';
import Events from './components/Events';
import Services from './components/Services';
import Footer from './components/Footer';


function App() {

  return (
    <Box sx={{ overflow: 'hidden' }}>
      <Header />
      <Recomendations />
      <Banner />
      <Events />
      <Services />
      <Footer />
    </Box >
  );
}

export default App;

