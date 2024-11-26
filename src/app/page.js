import { GoPackage , GoPackageDependencies } from "react-icons/go";
import BannerImage from "@/components/BannerImage";
import ProductSection from "@/components/ProductSection";
import { TfiGift } from "react-icons/tfi";
import Subscribe from "@/components/Subscribe";
import Main from '../components/Main'
import Slider from "@/components/Slider";
import Reviews from "@/components/Reviews";
const BannerImages=[
  {
    src:'/Enchanted Jewellery_1920x1080_Desk.avif',
    title:'Enchanted jewelry',
    subtitle:'Collections that shine brightest in a concert of joy.',
    btnText:'Shop the selection',
  },
  {
    src:'/EOY24_PUWA114530_MIXTED SANTOS & PANTHERE_1920x1080_new.avif',
    title:'Melodious hours',
    subtitle:'A watch repertoire with a sense of rhythm.',
    btnText:'Shop the selection',
  },
  {
    src:'/BRACELET_LOVE_16x9.webp',
    title:'Personalized gifts',
    subtitle:'A detail that makes all the difference.',
    btnText:'Shop gifts to customize',
  },
]
export default function Home() {
  return (
    <Main>
      <Slider />
      <BannerImage src={'/01_HEADER_PIANO_1920x1080.avif'} title={'Festive essentials'} subtitle={'Cartier essentials set the tone for the festive season.'} btnText={'Shop the selection'}/>
      <ProductSection />
      {BannerImages.map((item,index)=>{
        return <BannerImage key={index} {...item} gap/>
      })}
      <Reviews />
      <aside className="flex md:flex-row flex-col bg-gray-100 my-5 gap-14 py-10 px-24 justify-between">
        <div className="place-items-center grid gap-5">
          <GoPackage  className="text-5xl"/>
          <a href="" className="link-underline uppercase sm:text-lg text-base text-center ">complementary delivery</a>
        </div>
        <div className="place-items-center grid gap-5">
          <GoPackageDependencies className="text-5xl" />
          <a href="" className="link-underline uppercase sm:text-lg text-base text-center ">EASY RETURN OR EXCHANGE</a>
        </div>
        <div className="place-items-center grid gap-5">
          <TfiGift className="text-4xl" />
          <a href="" className="link-underline uppercase sm:text-lg text-base text-center ">Free Gift Wrapping</a>
        </div>
      </aside>
      <Subscribe />
    </Main>
  );
}
