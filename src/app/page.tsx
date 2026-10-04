import MainNews from "@/components/MainNews";
import Marquee from "@/components/Marquee";
import MostRead from "@/components/MostRead";
import NewsCard from "@/components/NewsCard";
// import Image from "next/image";

interface IOtherSection {
  curationId: string;
  title: string;
  articles:{
    id:string;
    title:string;
    description:string;
    category:string;
    imageUrl:string;
    imageAlt: string
  }[];

}

export default async function Home() {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/sections");
  const data = await res.json();
  const sections = data.data;
  const mainNews = sections[0].articles;

  console.log(sections);

  const otherScetions :IOtherSection[] = sections.slice(1);
  console.log(otherScetions);

  return (
    <div>
      
      <div className="grid grid-cols-3 gap-5  mt-4">
        {/* {news section} */}
        <div className="bg-base-500 rounded-xl  col-span-2 ">
          <MainNews news={mainNews} />
          <div className="grid gap-5 mt-4">
            {otherScetions.map((os) => (
              <div
                className=""
                key={os.curationId}
              >
                <h1 className=" border-b-2 pb-1 border-red-800 
                font-bold mb-4">{os.title}</h1>

                <div className="grid grid-cols-3 gap-2 ">
                  {os.articles.map((news) => (
                    <NewsCard key={news.id} news={news} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* {most read section} */}
        <div className="rounded-xl ml-2 col-span-1 ">
          <MostRead/>
        </div>
      </div>
    </div>
  );
}
