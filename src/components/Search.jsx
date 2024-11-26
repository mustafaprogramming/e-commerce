import Button from './Button'

export default function Search() {
  return (
    <aside className=' w-full py-16 items-center flex'>
      <div className=' w-full md:max-w-md h-full flex flex-col justify-center  mx-auto md:px-0 px-10'>
        <div className='w-full grid grid-cols-[70%_30%]'>
          <input
            type='text'
            id='newsletter'
            className='outline-none border-b border-black w-full text-sm h-full hover:text-black/90 '
            placeholder='Search products'
          />
          <Button text='Search' dark full />
        </div>
      </div>
    </aside>
  )
}