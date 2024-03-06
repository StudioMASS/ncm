export function load({ cookies, url }) {
  const visited = cookies.get("visited");
  const path = url.pathname;

  cookies.set("visited", "true", { path: "/" });

  return {
    visited,
    path,
  };
}
