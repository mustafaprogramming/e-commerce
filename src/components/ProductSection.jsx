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
  return (
    <section className="w-full flex flex-col mt-8 gap-6">
      <div className='text-center mb-16'>
        <h2 className='sm:text-3xl text-2xl text-black/70 font-semibold mb-3'>Our Products</h2>
        <div className='h-1 w-20 bg-black mx-auto'></div>
      </div>
      <div className='w-full h-full grid md:grid-cols-2 grid-cols-1 md:px-5 px-2 place-items-center gap-4 '>
        <Product src={'/bigproduct.avif'} title={'Galaxy Z '} price={'1999.99$'} desc={"Avail Special discounts with free gifts!"} Sale big/>
        <aside className="grid grid-cols-2 gap-4">
          {productData.map((item , index)=>{
            return <Product key={index} {...item}/>
          })}
        </aside>
      </div>

    </section>
  )
}
