import Image from "next/image";
interface News {
    id: string;
    title: string;
    imageUrl: string;
    imageAlt: string
    text: string
}

const NewsDetails = async ({ params }: { params:
     { newsId: string }}) => {
  const { newsId } = await params;

  const res = await fetch(
    `https://news-api-v2.vercel.app/api/article/${newsId}`
  );
  const data = await res.json();
  const news :News = data.data;

  console.log(news);
  return (
    <div>
      <h1 className="font-bold text-2xl mb-3">{news.title}</h1>
      <Image
       height={500}
        width={800}
        src={news.imageUrl} 
        alt={news.imageAlt} />
        <p className="mt-3">{news.text}</p>
    </div>
  );
};

export default NewsDetails;
