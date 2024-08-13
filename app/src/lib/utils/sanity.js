import { createClient } from "@sanity/client";

import groq from "groq";

import {
  PUBLIC_SANITY_DATASET,
  PUBLIC_SANITY_PROJECT_ID,
} from "$env/static/public";

if (!PUBLIC_SANITY_PROJECT_ID || !PUBLIC_SANITY_DATASET) {
  throw new Error("Did you forget to run sanity init --env?");
}

export const client = createClient({
  projectId: PUBLIC_SANITY_PROJECT_ID,
  dataset: PUBLIC_SANITY_DATASET,
  useCdn: false, // `false` if you want to ensure fresh data
  apiVersion: "2023-03-20", // date of setup
});

export async function getPosts() {
  return await client.fetch(groq`
    *[_type == "post"]
    | order(_createdAt desc) {
      ...,
      "featureArticle": feature->{
        ...,
        // You can specify fields from the 'blog' document you want to include, like:
        title,
        _createdAt,
        // Add more fields as needed
      },
      faqs[],
      listpara,
      "items": item[]{
        ...,
        // Handling both object and reference within the same array
        _type == 'reference' => {
          // Dereference the 'blog' document for reference types
          "ref": @->{
            title,
            slug,
            image,
          }
        },
        // No dereferencing needed for objects, but you can transform fields if necessary
      },
      acknowledgement,
      social[]
    }
  `);
}

export async function getArticles() {
  return await client.fetch(groq`*[_type == "blog"] | order(_createdAt desc)`);
}

export async function getArticle(slug) {
  return await client.fetch(
    groq`*[_type == "blog" && slug.current == $slug]{
      ...,
      author->{
        _id,
        name,
        // Include other fields from the author document as needed
      }
    }[0]`,
    {
      slug,
    }
  );
}

export function getFileURL(ref) {
  let [_file, id, extension] = ref.split("-");
  return `https://cdn.sanity.io/files/${PUBLIC_SANITY_PROJECT_ID}/${PUBLIC_SANITY_DATASET}/${id}.${extension}`;
}
