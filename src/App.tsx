import { wrapper } from './App.css';
import TestDnd from './components/Menu/TestDnd';
import Text from './components/Text/Text';
import Buttons from './pages/Main/_fragments/Buttons';
import Cols from './pages/Main/_fragments/Cols';
import Drawers from './pages/Main/_fragments/Drawers';
import Inputs from './pages/Main/_fragments/Inputs';
import Menus from './pages/Main/_fragments/Menus';
import Modals from './pages/Main/_fragments/Modals';
import Rows from './pages/Main/_fragments/Rows';
import ScrollAreas from './pages/Main/_fragments/ScrollAreas';
import Selects from './pages/Main/_fragments/Selects';
import Texts from './pages/Main/_fragments/Texts';
import Toasts from './pages/Main/_fragments/Toasts';

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
    <Menus />
    <TestDnd />
    <Toasts />
    <Selects />
  </div>
);

export default App;
