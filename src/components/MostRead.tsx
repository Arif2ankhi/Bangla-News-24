import React from "react";
import Link from "next/link";

interface MostReadnews {
  id: string;
  title: string;
}

const MostRead = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/most-read");
  const data = await res.json();

  const news: MostReadnews[] = data.data;
  // console.log(news);

  return (
    <div className="card p-2 bg-base-200 border border-gray-300">
      <h1 className="font-bold text-red-400 mb-4">সর্বাধিক পঠিত </h1>

      <div className="grid gap-3">
        {news.map((n, i) => (
          <div className="flex gap-2 items-center" key={n.id}>
            {/* <Link href={`/news/${n.id}`}> */}
              <p className="text-2xl font-bold text-red-500">{i + 1}</p>
              <Link href={`/news/${n.id}`}>
              <h2>{n.title}</h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MostRead;
