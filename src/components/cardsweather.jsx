import { Form } from './form'
import { Ubicacion } from './icons'
import { Clima } from './weathericons'

export function PrincipalWeather ({ temperature, city, code, props, isday }) {
  return (
    <article className={props}>
      <Form />
      <div className='flex flex-col justify-center gap-2 items-center min-w-80 h-full w-full self-center'>
        <Clima codigo={code} dia={Boolean(isday)} props='lg:mb-8' />
        <h2 className='text-5xl md:text-6xl'>{temperature}°</h2>
        <div className='flex'>
          <Ubicacion />
          <span className='text-slate-800 md:text-xl'>{city}</span>
        </div>
      </div>
    </article>
  )
}
