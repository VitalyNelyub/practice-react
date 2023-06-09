import { NavLink, Outlet } from 'react-router-dom';
import Nav from './Nav/Nav';

const Layout = () => {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
