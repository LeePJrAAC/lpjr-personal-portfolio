import { NavLink, Link, Outlet, useLocation, useLoaderData, redirect, Form } from "react-router-dom";
// crud
import { getAllMedia, createMedia } from "../media";

export async function loader() {
  return await getAllMedia();
}

export async function action() {
  const media = await createMedia();
  return redirect(`/app/${media.id}/edit`);
}

export function App() {
  const allMedia = useLoaderData();

  console.log("allMedia: ", allMedia);

  return (
    <div className='flex flex-row p-4'>
      <div className='flex flex-col w-1/3'>
        <div className='flex flex-row space-x-4'>
          <input type='text' />
          <Form method='post'>
            <button className='btn-submit' type='submit'>
              New
            </button>
          </Form>
        </div>
        <NavLink to='/app/audio' className='nav-link'>
          Audio
        </NavLink>
        <NavLink to='/app/video' className='nav-link'>
          Video
        </NavLink>
        <NavLink to='/app/media' className='nav-link'>
          Media
        </NavLink>
        {allMedia.length > 0 ? (
          allMedia.map((media) => {
            return (
              <NavLink to={`/app/${media.id}`} className='nav-link'>
                {media.listing || media.title || media.id}
              </NavLink>
            );
          })
        ) : (
          <i>No Media</i>
        )}
      </div>
      <div className='flex flex-col w-2/3 px-4'>
        {useLocation().pathname !== "/app" ? <Outlet /> : <h1>Welcome to the App</h1>}
      </div>
    </div>
  );
}
