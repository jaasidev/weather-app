export function Item ({ value, texto }) {
  return (
    <div className='flex items-center p-3 rounded-md justify-between bg-white w-full min-w-[336px] shadow-md md:p-4'>
      <h5 className='font-medium md:text-xl'>{texto}</h5>
      <span>{value}</span>
    </div>
  )
}
