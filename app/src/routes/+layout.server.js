import { getPosts } from "../lib/utils/sanity.js";

export function load({ cookies, url }) {
  const visited = cookies.get("visited");
  const path = url.pathname;
  const home = getPosts();

  cookies.set("visited", "true", { path: "/" });

  return {
    visited,
    path,
    home,
  };
}
