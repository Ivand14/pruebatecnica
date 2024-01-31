import Banner from './components/Banner';
import { Box } from '@mui/material';
import Events from './components/Events';
import Footer from './components/Footer';
import Init from './components/Init';
import Recomendations from './components/Recomendations';
import Services from './components/Services';

function App() {

  return (
    <Box sx={{ overflow: 'hidden' }}>
      <Init />
      <Recomendations />
      <Banner />
      <Events />
      <Services />
      <Footer />
    </Box >
  );
}

export default App;

