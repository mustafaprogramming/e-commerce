
export default function button({text, dark, full , large }) {
  return (
   <button className={`overflow-hidden w-fit truncate transition-all duration-700 ease-out  border uppercase sm:text-sm text-[10px] ${dark ? 'text-white bg-black border-black hover:bg-transparent hover:text-black' : 'text-white hover:bg-zinc-800 hover:border-zinc-800'} ${full ? 'grid place-items-center w-full':''} ${large ? ' xs:px-10 xs:py-2 py-1 px-5 xs:text-base text-sm ':'xs:py-1 py-0.5 xs:px-5 px-2.5'}`}>
   {text}
   </button>
  )
}
