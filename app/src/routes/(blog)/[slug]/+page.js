import { error } from "@sveltejs/kit";

import { getArticle } from "$lib/utils/sanity";
import { getPosts } from "$lib/utils/sanity";

export const ssr = false;

export const load = async ({ params }) => {
  const post = await getArticle(params.slug);
  if (post) return post;

  throw error(404, "Not found");
};
