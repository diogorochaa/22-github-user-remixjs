import { LoaderFunction, useLoaderData } from "remix";
import { GithubContainer, Api, LoaderData } from "~/features/github";

export const loader: LoaderFunction = async ({ params }) => {
  return {
    user: await Api.getGithubUser(params.username),
  };
};

export default function () {
  const { user } = useLoaderData<LoaderData>();
  return <GithubContainer user={user} />;
}
