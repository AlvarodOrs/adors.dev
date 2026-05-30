import { NextResponse } from "next/server";

type Profile = { url?: string | null };

type Options = {
  getProfile: (id: number) => Promise<Profile | null>;
  envKey: string;
  missingUrlError?: string;
  fetchError?: string;
};

export function createRoute({
  getProfile,
  envKey,
  missingUrlError = "Missing profile URL",
  fetchError = "Failed to fetch profile",
}: Options) {
  return async function GET() {
    try {
      const id = Number(process.env[envKey]);

      if (!id || Number.isNaN(id)) {
        return NextResponse.json(
          { error: "Invalid or missing env ID" },
          { status: 500 }
        );
      }

      const profile = await getProfile(id);

      if (!profile?.url) {
        return NextResponse.json(
          { error: missingUrlError },
          { status: 400 }
        );
      }

      return NextResponse.redirect(profile.url);
    } catch {
      return NextResponse.json(
        { error: fetchError },
        { status: 500 }
      );
    }
  };
}