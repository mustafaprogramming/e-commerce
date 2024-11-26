import Button from './Button'

export default function Search() {
  return (
    <aside className=' w-full py-16 '>
      <div className='mx-auto  w-full md:max-w-md h-full flex flex-col align-middle justify-center gap-10 text-center px-4'>
        <div className='grid grid-cols-[70%_30%]'>
          <input
            type='text'
            id='newsletter'
            className='outline-none border-b border-black w-full text-sm h-full hover:text-black/90 '
            placeholder='Search products'
          />
          <Button text='Search' dark />
        </div>
      </div>
    </aside>
  )
}