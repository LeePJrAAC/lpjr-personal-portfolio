import { NavLink, Link, Outlet, useLocation } from "react-router-dom";

export function App() {
  return (
    <div className='flex flex-row p-4'>
      <div className='flex flex-col w-1/3'>
        <div className='flex flex-row space-x-4'>
          <input type='text' />
          <Link to='/app/edit' className='button' role='button'>
            New
          </Link>
        </div>
        <NavLink to='/app/audio' className='nav-link text-stone-900'>
          Audio
        </NavLink>
        <NavLink to='/app/video' className='nav-link text-stone-900'>
          Video
        </NavLink>
      </div>
      <div className='flex flex-col w-2/3 px-4'>
        {useLocation().pathname !== "/app" ? <Outlet /> : <h1>Welcome to the App</h1>}
      </div>
    </div>
  );
}
