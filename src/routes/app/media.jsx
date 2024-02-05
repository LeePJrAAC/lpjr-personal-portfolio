import { Form } from "react-router-dom";

export function Media() {
  const media = {
    name: "Listing Name",
    title: "Media Title",
    description: "Media Description",
    url: "Media URL",
    image: "Image URL",
    "image-description": "Image Description",
    type: "audio",
  };

  return (
    <div id='media-item' className='flex flex-row space-x-4'>
      <div>
        <img key={media.image} src={media.image || null} alt={media["image-description"]} />
      </div>
      <div className='space-y-2 pe-4'>
        {media.name && <h1>{media.name}</h1>}
        {media.title && <h2>Title: {media.title}</h2>}
        {media.url && <p>URL: {media.url}</p>}
        {media.type && <p>Format: {media.type}</p>}
        {media.description && <p>Description: {media.description}</p>}

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
