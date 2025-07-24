/* eslint-disable @typescript-eslint/no-explicit-any */

export async function fetchProductData(lang: "en" | "bn"): Promise<any> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}?lang=${lang}`,
    {
      headers: {
        "X-TENMS-SOURCE-PLATFORM": "web",
        Accept: "application/json",
      },
      next: { revalidate: 3600 },
    }
  );

  if (!res.ok) throw new Error("Failed to fetch product data");
  return res.json();
}
