import { fetchPapers } from "@/app/_action/papers";
import PaperHero from "@/components/modules/papers/PaperHero";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { id: string } }) {
    const {id} = await params

  const data = await fetchPapers();
  const posts = data.posts;
  console.log("-------posts-------", posts)// getting 30 data

    const paper = posts.find(
    (item) => String(item.id) === id
  );

  if (!paper) notFound();

  return (
    <div>
      <PaperHero/>
    </div>
  );
}
