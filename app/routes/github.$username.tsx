import { LoaderFunction, useLoaderData } from "remix";
import { Repositories, Api, Types } from "~/features/github";

export const loader: LoaderFunction = async ({ params }) => {
  return {
    user: await Api.getGithubUser(params.username),
    repos: await Api.getUserRepos(params.username),
  };
};

// export function ErrorBoundary() {
//   return <h3>Whoops!!</h3>;
// }

export default function () {
  const { user, repos } = useLoaderData<Types.Repositories.LoaderData>();
  return <Repositories user={user} repos={repos} />;
}
