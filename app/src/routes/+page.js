import { getPosts } from "$lib/utils/sanity";
import { error } from "@sveltejs/kit";
import { getArticles } from "../lib/utils/sanity";

export const load = async () => {
  const posts = await getPosts();
  const articles = await getArticles();

  if (posts) {
    return {
      posts,
      articles,
    };
  }

  throw error(404, "Not found");
};
