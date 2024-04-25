export function ItemCard ({ logo, title, valor }) {
  return (
    <div className=' hidden card lg:flex flex-col items-center justify-center bg-[--bg-100] p-5 border-b-[--primary-200] border-b-[5px] h-[95%]'>
      <div className='w-full flex items-start justify-center'>
        {logo}
      </div>
      <div className='flex flex-col text-center'>
        <span className='text-[--text-100] text-lg'>{title}</span>
        <span className='text-[--text-200] text-md'>{valor}</span>
      </div>
    </div>
  )
}
