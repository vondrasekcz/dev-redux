import { NavLink, Outlet, } from "react-router-dom";


const links = [
  {
    to: '/',
    name: 'Home',
  },
  {
    to: '/counters',
    name: 'Counters',
  },
  {
    to: '/api',
    name: 'API',
  },
  {
    to: '/products',
    name: 'Products',
  },
];


const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  style={({ isActive, }) => ({
                    background: isActive ? 'red' : 'unset',
                  })}
                  to={link.to}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};


export default Layout;
