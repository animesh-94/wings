import { getGalleryItems } from "@/lib/gallery";
import { NextResponse } from "next/server";

export async function GET() {
  const items = getGalleryItems();
  return NextResponse.json(items);
}
