import { SocialProfile } from "./types";

export async function getGitHubProfile(id: number): Promise<SocialProfile> {
  const res = await fetch(`https://api.github.com/user/${id}`);

  console.log("STATUS:", res.status);
  console.log("HEADERS:", Object.fromEntries(res.headers));
  if (!res.ok) {
    throw new Error("Failed to fetch GitHub profile");
  }

  const data = await res.json();

  return {
    platform: "github",
    username: data.login,
    url: data.html_url,
    avatar: data.avatar_url,
    bio: data.bio,
  } as SocialProfile;
}

export async function getInstagramProfile(id: number): Promise<SocialProfile> {
  // const res = await fetch(`https://api.instagram.com/user/${id}`);

  // if (!res.ok) {
  //   throw new Error("Failed to fetch Instagram profile");
  // }

  // const data = await res.json();
  // return {
  //   platform: "instagram",
  //   username: data.username,
  //   url: data.url,
  //   avatar: data.avatar_url,
  //   bio: data.bio,
  // } as SocialProfile;
  const username = "alvaro.dors";
  const data = {
    username: username,
    url: `https://www.instagram.com/${username}/`
  }

  return {
    platform: "instagram",
    username: data.username,
    url: data.url,
  } as SocialProfile;
}

export async function getLinkedInProfile(id: number): Promise<SocialProfile> {
  // const res = await fetch(`https://api.instagram.com/user/${id}`);

  // if (!res.ok) {
  //   throw new Error("Failed to fetch Instagram profile");
  // }

  // const data = await res.json();
  // return {
  //   platform: "instagram",
  //   username: data.username,
  //   url: data.url,
  //   avatar: data.avatar_url,
  //   bio: data.bio,
  // } as SocialProfile;
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