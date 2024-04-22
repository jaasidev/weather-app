import { Ubicacion } from './icons'
import { Clima } from './weathericons'

export function PrincipalWeather ({ temperature, city, code, props, isday }) {
  return (
    <article className={props}>
      <div className='flex flex-col justify-center items-center w-80 h-full w-ma'>
        <Clima codigo={code} dia={Boolean(isday)} />
        <h2>{temperature}</h2>
        <div className='flex items-center justify-center gap-1'>
          <Ubicacion />
          <span>{city}</span>
        </div>
      </div>
    </article>
  )
}
