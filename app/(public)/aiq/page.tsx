
import { fetchPapers } from "@/app/_action/papers";
import Hero from "@/components/hero/Hero";
import Featured from "@/components/modules/aiq/Featured";
import PapersClient from "@/components/modules/papers/PapersClient";

export default async function page() {
  const data = await fetchPapers();

  const posts = data.posts
  
  console.log(data.posts)
  
  return (
    <div className="max-w-[1294px] mx-auto">
      <Hero />
      <Featured />
      <PapersClient posts={posts} />
    </div>
  );
}