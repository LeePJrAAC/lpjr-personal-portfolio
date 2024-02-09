import localforage from "localforage";
import { matchSorter } from "match-sorter";
import sortBy from "sort-by";

function set(media) {
  return localforage.setItem("media", media);
}

export async function getAllMedia(query = "") {
  let allMedia = await localforage.getItem("media");
  if (!allMedia) allMedia = [];

  console.log("query", query);

  if (query) {
    allMedia = matchSorter(allMedia, query, { keys: ["listing"] });
  }
  return allMedia.sort(sortBy("createdAt"));
}

export async function createMedia() {
  let id = Math.random().toString(36).substring(2, 9);
  let media = { id, createdAt: Date.now() };
  let medias = await getAllMedia();
  medias.unshift(media);
  await set(medias);
  return media;
}

export async function getMedia(id) {
  let allMedia = await localforage.getItem("media");
  let media = allMedia.find((media) => media.id === id);
  return media ?? null;
}

export async function updateMedia(id, updates) {
  let allMedia = await localforage.getItem("media");
  let media = allMedia.find((media) => media.id === id);
  if (!media) throw new Error("No media found for", id);
  Object.assign(media, updates);
  await set(allMedia);
  return media;
}

export async function destroyMedia(id) {
  let allMedia = await localforage.getItem("media");
  let index = allMedia.findIndex((media) => media.id === id);
  if (index > -1) {
    allMedia.splice(index, 1);
    await set(allMedia);
    return true;
  }
  return false;
}
