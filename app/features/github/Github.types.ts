export interface User {
  login: string;
  avatar_url: string;
  html_url: string;
  bio: string;
}

export namespace Repositories {
  export interface Repo {
    id: number;
    full_name: string;
    html_url: string;
    stargazers_count: number;
    language: string;
    name: string;
  }
  export interface LoaderData {
    user: User;
    repos: Repo[];
  }
}
