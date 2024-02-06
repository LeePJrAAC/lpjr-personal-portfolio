import { redirect } from "react-router-dom";
import { destroyMedia } from "../../media";

export async function action({ params }) {
  await destroyMedia(params.mediaId);
  return redirect("/app");
}
