import Image from "next/image";
import NewsCard from "./NewsCard";
import Link from "next/link";

interface News {
  id: string;
  title: string;
  description: string;
  category: string;
  imageAlt: string;
  imageUrl: string;
}
const MainNews = ({ news }: { news: News[] }) => {
  const [firstNews, ...otherNews] = news;
  console.log(firstNews);

  // const othernews = news.slice(1);
  // console.log(othernews);

  return (
    <div className="flex gap-3 ">
      <Link href={`/news/${firstNews.id}`}>
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <Image
              height={400}
              width={400}
              src={firstNews.imageUrl}
              alt={firstNews.imageAlt}
            />
          </figure>
          <div className="card-body">
            <p className="text-red-500 font-semibold">{firstNews.category}</p>
            <h2 className="card-title">{firstNews.title}</h2>
            <p>{firstNews.description}</p>
          </div>
        </div>
      </Link>

     <div className="grid gap-2">
  {otherNews.slice(0, 4).map((on) => (
    <Link href={`/news/${on.id}`} key={on.id}>
      <div className="card bg-base-100 border border-gray-200 py-5">
        <p className="text-red-500 font-semibold">{firstNews.category}</p>
        <div>{on.title}</div>
      </div>
    </Link>
  ))}
</div>
    </div>
  );
};

export default MainNews;

{
  /* <Link href= {`/news/${on.id}`}></Link> */
}
