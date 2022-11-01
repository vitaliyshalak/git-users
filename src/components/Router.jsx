import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App';
import User from './User';
import Search from './Search';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index={true} element={<Search />} />
        <Route path=":id" element={<User />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Router;
