import invariant from "tiny-invariant";

export const getGithubUser = async (username?: string) => {
  invariant(username, "Please provide as username as string");
  const res = await fetch(`https://api.github.com/users/${username}`, {
    headers: {
      accept: "aplication/vnd.github.v3+json",
      Authorization: "+WteXay1omZNbFIrtZaHRjmSm8Kz1GUC/SnuynZJulY",
    },
  });

  const { login, avatar_url, html_url, bio } = await res.json();
  return { login, avatar_url, html_url, bio };
};
