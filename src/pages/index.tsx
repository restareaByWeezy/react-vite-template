import TestDnd from '@/components/Menu/TestDnd';
import Text from '@/components/Text/Text';
import Buttons from './Main/_fragments/Buttons';
import Cards from './Main/_fragments/Cards';
import Cols from './Main/_fragments/Cols';
import Drawers from './Main/_fragments/Drawers';
import Inputs from './Main/_fragments/Inputs';
import Loaders from './Main/_fragments/Loaders';
import Menus from './Main/_fragments/Menus';
import Modals from './Main/_fragments/Modals';
import Rows from './Main/_fragments/Rows';
import ScrollAreas from './Main/_fragments/ScrollAreas';
import Selects from './Main/_fragments/Selects';
import Tables from './Main/_fragments/Tables';
import Texts from './Main/_fragments/Texts';
import Toasts from './Main/_fragments/Toasts';

const Main = () => {
  return (
    <>
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
      <Loaders />
      <Tables />
      <Cards />
    </>
  );
};

export default Main;
