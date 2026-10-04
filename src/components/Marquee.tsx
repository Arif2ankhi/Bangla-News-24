import MarqueeText from "react-marquee-text"
// import "MarqueeText/styles.css"
import Link from "next/link";

interface Headlines{
    id: string
    title: string
}
const Marquee = async() => {
const res = await fetch ('https://news-api-v2.vercel.app/api/news?limit=10')
const data = await res.json();
const headlines: Headlines[]= data.data;
console.log(headlines);

    return (
        <div className="bg-emerald-500 text-white">
            <div className="flex max-w-7xl ma-auto">
                <div className="bg-red-800 py-3 px-5 font-bold text-white text-center">সর্বশেষ</div>
            <MarqueeText className="py-1 px-5"  direction="right" duration={15}>

                 {
                headlines.map(h=> <Link href={`/news/${h.id}`} key={h.id}>
                    <span>{h.title}</span>
                    <span className='mx-5'>•</span>
                </Link>)
            }
            </MarqueeText>
            
            </div>
        </div>
    );
};

export default Marquee;