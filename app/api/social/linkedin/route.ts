import { createRoute } from "@/lib/social/route";
import { getLinkedInProfile } from "@/lib/social/adapters";

export const GET = createRoute({
  getProfile: getLinkedInProfile,
  envKey: "LINKEDIN_ID",
});