import { createClient } from "@supabase/supabase-js";
import { cacheLife, cacheTag } from "next/cache";

export type Product = {
  id: string;
  slug: string;
  title: string;
  description: string;
  price_inr: number;
  is_free: boolean;
  is_published: boolean;
  storage_path: string | null;
  product_type: "guide" | "bundle";
  included_guides?: Product[];
};

export async function getPublishedProducts(): Promise<Product[]> {
  "use cache";
  cacheLife("minutes");
  cacheTag("products");

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

  if (!url || !key) {
    console.error("Supabase environment variables are missing.");
    return [];
  }

  const supabase = createClient(url, key);

  const { data, error } = await supabase
    .from("products")
    .select(
      "id, slug, title, description, price_inr, is_free, is_published, storage_path, product_type"
    )
    .eq("is_published", true)
    .order("created_at", { ascending: true });

  if (error) {
    console.error("Could not load published products:", error.message);
    return [];
  }

  const products = (data ?? []) as Product[];
  const bundleIds = products
    .filter((product) => product.product_type === "bundle")
    .map((product) => product.id);

  if (bundleIds.length === 0) {
    return products;
  }

  const { data: bundleGuides, error: bundleError } = await supabase
    .from("bundle_guides")
    .select(
      "bundle_id, guide:products!bundle_guides_guide_id_fkey(id, slug, title, description, price_inr, is_free, is_published, storage_path, product_type)"
    )
    .in("bundle_id", bundleIds);

  if (bundleError) {
    console.error("Could not load bundle contents:", bundleError.message);
    return products;
  }

  return products.map((product) => ({
    ...product,
    included_guides:
      product.product_type === "bundle"
        ? (bundleGuides ?? [])
            .filter((item) => item.bundle_id === product.id)
            .map((item) => item.guide as unknown as Product)
        : [],
  }));
}