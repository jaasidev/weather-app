import { Clima } from './weathericons'
export function Card ({ code, min, max, props, date }) {
  return (
    <div className={`card card-compact lg:card-side lg:border-l-[--accent-200] border-l-[10px] bg-[--bg-100] flex items-center shadow-xl h-auto w-full sm:h-full ${props} lg:min-w-80 lg:shadow-sm`}>
      <Clima codigo={code} props='lg:my-0' />
      <div className='card-body text-[--text-200] flex flex-col items-center justify-center'>
        <div className='flex items-center text-2xl font-medium text-[--text-200]'>
          <span>{min}C°</span>~
          <span>{max}C°</span>
        </div>
        <span className='font-light'>{date}</span>
      </div>
    </div>
  )
}
