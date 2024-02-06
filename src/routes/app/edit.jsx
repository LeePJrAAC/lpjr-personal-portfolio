import { Form, useLoaderData, redirect, useNavigate } from "react-router-dom";
import { updateMedia } from "../../media";

export async function action({ request, params }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  console.log("updates: ", updates);
  await updateMedia(params.mediaId, updates);
  return redirect(`/app/${params.mediaId}`);
}

export function Edit() {
  const media = useLoaderData();
  const navigate = useNavigate();

  console.log("media: ", media);

  return (
    <>
      <h1>Edit Media Listing</h1>
      <Form method='post' className='flex flex-col space-y-4 mt-4'>
        <input type='text' placeholder='Listing Name' name='listing' defaultValue={media.listing} />
        <input type='text' placeholder='Media Title' name='title' defaultValue={media.title} />
        <input type='text' placeholder='Media Description' name='desc' defaultValue={media.desc} />
        <input type='text' placeholder='Media URL' name='media_src' defaultValue={media.media_src} />
        <input type='text' placeholder='Image URL' name='img_src' defaultValue={media.img_src} />
        <select name='format' defaultValue={media.format}>
          <option value='audio'>Audio</option>
          <option value='video'>Video</option>
        </select>
        <div className='flex flex-row space-x-4 ms-auto'>
          <button className='btn-submit' type='submit' role='button'>
            Save
          </button>
          <button className='button bg-stone-500' role='button' onClick={() => navigate(-1)}>
            Cancel
          </button>
        </div>
      </Form>
    </>
  );
}
