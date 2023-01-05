import { wrapper } from './App.css';
import Text from './components/Text/Text';
import Buttons from './pages/Main/_fragments/Buttons';
import Cols from './pages/Main/_fragments/Cols';
import Drawers from './pages/Main/_fragments/Drawers';
import Inputs from './pages/Main/_fragments/Inputs';
import Modals from './pages/Main/_fragments/Modals';
import Rows from './pages/Main/_fragments/Rows';
import ScrollAreas from './pages/Main/_fragments/ScrollAreas';
import Texts from './pages/Main/_fragments/Texts';

const App = () => (
  <div className={wrapper}>
    <Text size="h1">VANILLA EXTRACT BOILERPLATE</Text>
    <Cols />
    <Rows />
    <Texts />
    <Buttons />
    <Inputs />
    <Drawers />
    <ScrollAreas />
    <Modals />
  </div>
);

export default App;
