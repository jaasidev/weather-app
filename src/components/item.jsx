export function Item ({ value, texto, props, logo }) {
  return (
    <div before='Estado Actual:' className={`flex items-center p-3 rounded-md lg:flex-col justify-between lg:justify-center bg-white w-full lg:h-full min-w-[336px] shadow-md md:p-4 ${props} lg:flex-col lg:min-w-36 lg:max-h-52 lg:h-5/6 lg:justify-center `}>
      <h5 className='font-medium md:text-xl lg:hidden'>{texto}</h5>
      <div className='hidden lg:block lg:max-h-32 w-full'>
        {logo}
      </div>
      <span className='lg:mt-4'>{value}</span>
    </div>
  )
}
