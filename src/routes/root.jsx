import { Outlet, NavLink, useLocation } from "react-router-dom";
import { Home } from "./home";

export const Root = () => {
  console.log(useLocation());

  return (
    <div className='container h-full'>
      <div className='flex flex-row justify-between p-5'>
        <p>Logo</p>
        <div className='flex flex-row space-x-4'>
          <NavLink to='/' className='nav-link'>
            Home
          </NavLink>
          <NavLink to='/app' className='nav-link'>
            App
          </NavLink>
          <NavLink to='/about' className='nav-link'>
            About
          </NavLink>
        </div>
      </div>
      {useLocation().pathname === "/" ? <Home /> : <Outlet />}
    </div>
  );
};
