import { useLoaderData } from "react-router-dom";
import { getMedia } from "../../media";

export const loader = async ({ params }) => {
  const media = await getMedia(params.mediaId);

  if (!media) {
    throw new Response(null, { status: 404, statusText: "Media not found" });
  }

  return media;
};

export function Audio() {
  const media = useLoaderData();

  console.log("media: ", media);

  return (
    <div className='p-4'>
      <h1>Audio</h1>
      <p>This is a simple example of how to use React Router to create a multi-page application.</p>
    </div>
  );
}
