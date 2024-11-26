import Image from 'next/image'
import Button from './Button'

export default function HeroImage({ src, title, subtitle, btnText , gap}) {
  return <section className={` ${gap ? "mt-8":""} overflow-hidden w-full max-h-[100vh] md:h-fit h-[100vh] relative flex justify-center items-end text-white `}>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-black/5 to-black/90"></div>
          <Image src={src} width={1024} height={576} quality={100} alt='' className='md:min-w-[1200px] sm:min-w-[1000px] min-w-[500px] w-full  h-full bg-contain bg-no-repeat bg-center'/>
          <div className='absolute  mb-16 flex flex-col items-center gap-4'>
            <h3 className='sm:text-[20px] text-[16px] font-semibold tracking-widest uppercase text-center'>{title}</h3>
            <p className='font-thin text-center sm:text-base text-sm'>{subtitle}</p>
            <Button text={btnText} />
          </div>
         </section>
}
