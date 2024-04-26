import { Clima } from './weathericons'
export function Card ({ code, min, max, props, date }) {
  return (
    <div className={`card border-l-[0px] border-b-[--accent-100] border-b-[10px] lg:border-b-[0] card-compact lg:card-side lg:border-l-[--accent-200] lg:border-l-[10px] bg-[--bg-100] flex items-center shadow-xl h-auto w-full sm:h-full ${props} lg:min-w-80 lg:shadow-sm `}>
      <Clima codigo={code} props='lg:m-0' />
      <div className='card-body text-[--text-200] flex flex-col items-center justify-center'>
        <div className='flex items-center text-xl sm:text-2xl font-medium text-[--text-200]'>
          <span>{min}C°</span>~
          <span>{max}C°</span>
        </div>
        <span className='font-light'>{date}</span>
      </div>
    </div>
  )
}
