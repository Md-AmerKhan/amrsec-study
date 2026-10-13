
import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

export async function GET() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

  if (!url || !key) {
    return NextResponse.json(
      { error: "Download service is not configured." },
      { status: 500 }
    );
  }

  const supabase = createClient(url, key);

  const { data: product, error: productError } = await supabase
    .from("products")
    .select("storage_path")
    .eq("slug", "pps")
    .eq("is_published", true)
    .eq("is_free", true)
    .single();

  if (productError || !product?.storage_path) {
    return NextResponse.json(
      { error: "Study guide is not available yet." },
      { status: 404 }
    );
  }

  const { data, error } = await supabase.storage
    .from("Study Guides")
    .createSignedUrl(product.storage_path, 60);

  if (error || !data?.signedUrl) {
  console.error("PPS download error:", error?.message);

  return NextResponse.json(
    {
      error: "Unable to generate download link.",
      details: error?.message ?? "No signed URL returned",
    },
    { status: 500 }
  );
}

  return NextResponse.redirect(data.signedUrl);
}
