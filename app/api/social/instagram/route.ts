import { createRoute } from "@/lib/social/route";
import { getInstagramProfile } from "@/lib/social/adapters";

export const GET = createRoute({
  getProfile: getInstagramProfile,
  envKey: "INSTAGRAM_ID",
});