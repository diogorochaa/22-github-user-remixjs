import { LoaderFunction, useLoaderData } from "remix";
import { Api } from "~/features/github";

export const loader: LoaderFunction = async ({ params }) => {
  return await Api.getCommits(params.reponame, params.username);
};
