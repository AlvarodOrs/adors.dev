import { createRoute } from "@/lib/social/route";
import { getGitHubProfile } from "@/lib/social/adapters";

export const GET = createRoute({
  getProfile: getGitHubProfile,
  envKey: "GITHUB_ID",
});