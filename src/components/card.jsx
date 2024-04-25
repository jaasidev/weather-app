import { Clima } from './weathericons'
export function Card ({ code, min, max, props }) {
  return (
    <div className={`card card-compact bg-[--bg-100] flex items-center shadow-xl w-1/2 lg:w-full${props}`}>
      <Clima codigo={code} />
      <div className='card-body text-[--text-200]'>
        <div className='flex items-center text-2xl font-medium text-[--text-200]'>
          <span>{min}C</span>~
          <span>{max}C</span>
        </div>
      </div>
    </div>
  )
}
