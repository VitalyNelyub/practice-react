import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import {Home, homePage} from '../pages/'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="add" element={<Users />} />
      </Route>
    </Routes>
  );
}
