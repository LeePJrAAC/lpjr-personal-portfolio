import { useEffect } from "react";
import {
  NavLink,
  Outlet,
  useLocation,
  useLoaderData,
  redirect,
  Form,
  useNavigation,
  useSubmit,
} from "react-router-dom";
// crud
import { getAllMedia, createMedia } from "../media";

export async function loader({ request }) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  const allMedia = await getAllMedia(q);

  console.log("q", q, "allMedia", allMedia);

  return { allMedia, q };
}

export async function action() {
  const media = await createMedia();
  return redirect(`/app/${media.id}/edit`);
}

export function App() {
  const { allMedia, q } = useLoaderData();
  const navigation = useNavigation();
  const submit = useSubmit();

  const searching = navigation.location && new URLSearchParams(navigation.location.search).has("q");

  useEffect(() => {
    document.getElementById("q").value = q;
  }, [q]);

  return (
    <div className='flex flex-row p-4'>
      <div className='flex flex-col w-1/3'>
        <div className='flex flex-row space-x-4'>
          <Form id='search-form' role='search'>
            <input
              type='search'
              id='q'
              className={searching ? "loading" : ""}
              placeholder='Search'
              name='q'
              defaultValue={q}
              onChange={(e) => {
                const isFirstSearch = q === null;
                submit(e.currentTarget.form, { replace: isFirstSearch });
              }}
            />
            <div id='search-spinner' aria-hidden hidden={!searching} />
            <div className='sr-only' aria-live='polite'></div>
          </Form>
          <Form method='post'>
            <button className='btn-submit' type='submit'>
              New
            </button>
          </Form>
        </div>
        {allMedia.length > 0 ? (
          allMedia.map((media, idx) => {
            return (
              <NavLink
                to={`/app/${media.id}/${media.format === "audio" ? `audio` : `video`}`}
                className='nav-link'
                key={`${media.listing}-${idx}`}
              >
                {media.listing || media.title}
              </NavLink>
            );
          })
        ) : (
          <Form method='post'>
            <button className='btn-submit' type='submit'>
              New Media
            </button>
          </Form>
        )}
      </div>
      <div className='flex flex-col w-2/3 px-4'>
        {useLocation().pathname !== "/app" ? <Outlet /> : <h1>Welcome to the App</h1>}
      </div>
    </div>
  );
}
