export function Item ({ title, value }) {
  return (
    <li className='p-2 flex items-center justify-between shadow-md bg-[--bg-100] rounded-md'>
      <h5 className='text-[--text-100] font-medium'>{title}</h5>
      <span className='text-[--text-200]'>{value}</span>
    </li>
  )
}
