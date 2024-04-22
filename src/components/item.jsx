export function Item ({ value, texto }) {
  return (
    <div className='flex items-center p-3 rounded-md justify-between bg-white w-full min-w-[336px] shadow-md'>
      <h5 className='font-medium'>{texto}</h5>
      <span>{value}</span>
    </div>
  )
}
