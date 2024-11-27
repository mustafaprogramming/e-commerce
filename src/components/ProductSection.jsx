import { useEffect } from 'react';
import Product from './Product'
const productData=[
  {
    src:'/product1.avif',
    title:'Lorem ipsum dolor',
    desc:'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    price:999.00,
    New:false,
    Sale:true,
  },
  {
    src:'/product2.avif',
    title:'Lorem ipsum dolor',
    desc:'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    price:2500.00,
    New:true,
    Sale:false,
  },
  {
    src:'/product3.avif',
    title:'Lorem ipsum dolor',
    desc:'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    price:1499.99,
    New:false,
    Sale:true,
  },
  {
    src:'/product4.avif',
    title:'Lorem ipsum dolor',
    desc:'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    price:1980.00,
    New:true,
    Sale:true,
  },
]
export default function Products() {
  useEffect(() => {
    const elements = document.querySelectorAll('.move-on-scroll');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0', 'translate-x-20','-translate-x-20');
        }
      });
    });

    elements.forEach((element) =>observer.observe(element));

    return () => observer.disconnect();
  }, []);
  return (
    <section className="w-full flex flex-col mt-8 gap-6">
      <div className=' text-center mb-16'>
        <h2 className='sm:text-3xl text-2xl text-black/70 font-semibold mb-3'>Our Products</h2>
        <div className='h-1 w-20 bg-black mx-auto'></div>
      </div>
      <aside className='w-full h-full grid md:grid-cols-2 grid-cols-1 md:px-5 px-2 place-items-center gap-4 '>
        <div className='move-on-scroll opacity-0 -translate-x-20 transition-all duration-700 ease-in self-start '>
          <Product src={'/bigproduct.avif'} title={'Oyster'} price={'1999.99$'} desc={"Avail Special discounts with free gifts!"} Sale big/>
        </div>
        <div className="move-on-scroll opacity-0 translate-x-20 transition-all duration-700 ease-in grid grid-cols-2 gap-4">
          {productData.map((item , index)=>{
            return <Product key={index} {...item}/>
          })}
        </div>
      </aside>

    </section>
  )
}
