import { Outlet, NavLink, useLocation } from "react-router-dom";
import { Home } from "./home";

export const Root = () => {
  console.log(useLocation());

  return (
    <div className='container bg-stone-200 h-full'>
      <div className='flex flex-row justify-between p-5'>
        <p>Logo</p>
        <div className='flex flex-row space-x-4'>
          <NavLink to='/' className='nav-link text-stone-900'>
            Home
          </NavLink>
          <NavLink to='/app' className='nav-link text-stone-900'>
            App
          </NavLink>
          <NavLink to='/about' className='nav-link text-stone-900'>
            About
          </NavLink>
        </div>
      </div>
      {useLocation().pathname === "/" ? <Home /> : <Outlet />}
    </div>
  );
};
