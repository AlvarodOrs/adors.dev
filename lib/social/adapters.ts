import { SocialProfile } from "./types";

export async function getGitHubProfile(id: number) {
  const res = await fetch(`https://api.github.com/user/${id}`, {
    headers: {
      "User-Agent": "adors-dev",
      "Accept": "application/vnd.github+json",
    },
  });

  const text = await res.text();

  if (!res.ok) {
    throw new Error(`GitHub ${res.status}: ${text}`);
  }

  const data = JSON.parse(text);

  return {
    platform: "github",
    username: data.login,
    url: data.html_url,
    avatar: data.avatar_url,
    bio: data.bio,
  };
}

export async function getInstagramProfile(id: number) {
  // const res = await fetch(`https://api.instagram.com/user/${id}`, {
  //   headers: {
  //     "User-Agent": "adors-dev",
  //     "Accept": "application/vnd.instagram+json",
  //   },
  // });

  // const text = await res.text();

  // if (!res.ok) {
  //   throw new Error(`Instagram ${res.status}: ${text}`);
  // }

  // const data = JSON.parse(text);

  // return {
  //   platform: "instagram",
  //   username: data.username,
  //   url: data.url,
  //   avatar: data.avatar_url,
  //   bio: data.bio,
  // };
  const username = "alvaro.dors";
  const data = {
    username: username,
    url: `https://www.instagram.com/${username}/`
  }

  return {
    platform: "instagram",
    username: data.username,
    url: data.url,
  };
}

export async function getLinkedInProfile(id: number) {
  // const res = await fetch(`https://api.linkedin.com/user/${id}`, {
  //   headers: {
  //     "User-Agent": "adors-dev",
  //     "Accept": "application/vnd.linkedin+json",
  //   },
  // });

  // const text = await res.text();

  // if (!res.ok) {
  //   throw new Error(`LinkedIn ${res.status}: ${text}`);
  // }

  // const data = JSON.parse(text);

  // return {
  //   platform: "linkedin",
  //   username: data.username,
  //   url: data.url,
  //   avatar: data.avatar_url,
  //   bio: data.bio,
  // };
  const username = "alvaro-dors";
  const data = {
    username: username,
    url: `https://www.linkedin.com/in/${username}/`
  }

  return {
    platform: "linkedin",
    username: data.username,
    url: data.url,
  } as SocialProfile;
}