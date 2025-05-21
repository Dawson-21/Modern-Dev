// Purely for development purposes to visualize screen sizes easier
function PageSizer() {
  return (
    <div className='fixed top-30 left-3 bg-black border-2 border-white rounded-lg p-1 z-999 text-[12px]'>
      <div className='block sm:hidden text-white'>xs</div>
      <div className='hidden sm:block md:hidden text-white'>sm</div>
      <div className='hidden md:block lg:hidden text-white'>md</div>
      <div className='hidden lg:block xl:hidden text-white'>lg</div>
      <div className='hidden xl:block 2xl:hidden text-white'>xl</div>
      <div className='hidden 2xl:block text-white'>2xl</div>
    </div>
  )
}

export default PageSizer