import Layout from '@/layouts/Layout';
import Navigation from '@/layouts/Navigation';

import MainContent from './MainContent';

const Main = () => {
  return <Layout main={<MainContent />} bottomNav={<Navigation />} />;
};

export default Main;
