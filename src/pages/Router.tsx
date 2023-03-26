import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';

import Main from './Main';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<div />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
