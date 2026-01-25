
export async function fetchPapers() {
  const res = await fetch(
    "https://dummyjson.com/posts",
    { next: { revalidate: 60 } }
  );

  if (!res.ok) throw new Error("Failed to fetch news");
  return res.json();
}
