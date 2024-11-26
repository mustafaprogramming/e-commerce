import Button from './Button'

export default function Subscribe() {
  return (
    <aside className='bg-white w-full py-16 border-t border-opacity-50'>
      <div className='mx-auto  w-full md:max-w-md h-full flex flex-col items-center justify-center gap-10 text-center px-4'>
        <h3 className='text-lg font-semibold uppercase'>
          Subscribe to our Newsletter
        </h3>
        <div className='w-full grid grid-cols-[65%_35%] md:px-0 px-10'>
          <input
            type='email'
            id='newsletter'
            className='outline-none border-b border-black w-full text-sm h-full hover:text-black/90 invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500'
            placeholder='Email'
          />
          <Button text='subscribe' dark full />
        </div>
      </div>
    </aside>
  )
}
