export function Item ({ title, value }) {
  return (
    <li className='p-4 flex items-center justify-between shadow-md bg-[--bg-100] rounded-md sm:p-5 text-xl lg:hidden'>
      <h5 className='text-[--text-100] font-medium'>{title}</h5>
      <span className='text-[--text-200]'>{value}</span>
    </li>
  )
}
