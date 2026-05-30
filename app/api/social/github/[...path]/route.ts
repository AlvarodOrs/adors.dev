import { NextResponse } from "next/server";
import { getGitHubProfile } from "@/lib/social/adapters";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ path: string[] }> }
) {
  const id = Number(process.env.GITHUB_ID);

  if (!id || Number.isNaN(id)) {
    return NextResponse.json({ error: "Invalid or missing env ID" }, { status: 500 });
  }

  const profile = await getGitHubProfile(id);

  if (!profile?.url) {
    return NextResponse.json({ error: "Missing profile URL" }, { status: 400 });
  }

  const { path } = await params;
  const repoUrl = `${profile.url}/${path[0]}`;

  return NextResponse.redirect(repoUrl);
}