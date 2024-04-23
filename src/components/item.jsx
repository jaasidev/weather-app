export function Item ({ value, texto, props, logo }) {
  return (
    <div className={`flex items-center p-3 rounded-md justify-between bg-white w-full lg:h-full min-w-[336px] shadow-md md:p-4 ${props} lg:flex-col lg:min-w-36 lg:max-h-52 lg:h-5/6 lg:justify-center`}>
      <h5 className='font-medium md:text-xl lg:hidden'>{texto}</h5>
      <div className='hidden lg:block lg:max-h-40 w-full'>
        {logo}
      </div>
      <span>{value}</span>
    </div>
  )
}
