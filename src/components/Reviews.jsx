import Review from './Review';

export default function Reviews() {
  return (
   <section className='max-w-[620px] w-[80vw] mx-auto mt-10 '>
   <div className='text-center mb-16'>
     <h2 className='sm:text-3xl text-2xl text-black/70 font-semibold mb-3'>Our Reviews</h2>
     <div className='h-1 w-20 bg-black mx-auto'></div>
   </div>
   <Review />
 </section>
  )
}
