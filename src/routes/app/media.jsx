import { Form, useLoaderData, useFetcher } from "react-router-dom";
import { getMedia } from "../../media";

export async function loader({ params }) {
  const media = await getMedia(params.mediaId);
  if (!media) {
    throw new Response(null, { status: 404, statusText: "Media not found" });
  }
  return media;
}

export function Media() {
  const media = useLoaderData();

  console.log("media: ", media);

  return (
    <div id='media-item' className='flex flex-row space-x-4'>
      <div>
        <img key={media.image_src} src={media.image_src || null} alt={media["image-description"]} />
      </div>
      <div className='space-y-2 pe-4'>
        {media.listing && <h1>{media.listing}</h1>}
        {media.title && <h2>Title: {media.title}</h2>}
        {media.media_src && <p>URL: {media.media_src}</p>}
        {media.format && <p>Format: {media.format}</p>}
        {media.desc && <p>Description: {media.desc}</p>}

        <div className='flex flex-row justify-end space-x-4 mt-4'>
          <Form action='edit'>
            <button type='submit' className='btn-submit' role='button'>
              Edit
            </button>
          </Form>
          <Form
            method='post'
            action='destroy'
            onSubmit={(event) => {
              if (!confirm("Please confirm you want to delete this record.")) {
                event.preventDefault();
              }
            }}
          >
            <button type='submit' className='button bg-stone-500' role='button'>
              Delete
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
}
