import { Types } from ".";
import pick from "lodash/pick";
import invariant from "tiny-invariant";

const config = {
  headers: {
    accept: "aplication/vnd.github.v3+json",
    Authorization: "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",
  },
};

export const getGithubUser = async (username?: string) => {
  invariant(username, "Please provide as username as string");
  const res = await fetch(`https://api.github.com/users/${username}`, config);

  return pick(await res.json(), ["login", "avatar_url", "html_url", "bio"]);
};

export const getUserRepos = async (username?: string) => {
  invariant(username, "Please provide an username as a string");

  const res = await fetch(
    `https://api.github.com/users/${username}/repos`,
    config
  );

  return (await res.json()).map((repo: Types.Repositories.Repo) =>
    pick(repo, [
      "id",
      "full_name",
      "stargazers_count",
      "html_url",
      "language",
      "name",
    ])
  );
};

export const getCommits = async (reponame?: string, username?: string) => {
  invariant(reponame, "Please provide an repository name as a string");
  invariant(username, "Please provide an username as a string");

  const res = await fetch(
    `https://api.github.com/users/repos/${username}/${reponame}/commits`,
    config
  );

  return await res.json();
};
