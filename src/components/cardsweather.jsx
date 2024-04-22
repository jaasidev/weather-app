import { Form } from './form'
import { Ubicacion } from './icons'
import { Clima } from './weathericons'

export function PrincipalWeather ({ temperature, city, code, props, isday }) {
  return (
    <article className={props}>
      <Form />
      <div className='flex flex-col justify-center gap-1 items-center w-80 h-full self-center'>
        <Clima codigo={code} dia={Boolean(isday)} />
        <h2 className='text-5xl'>{temperature}</h2>
        <div className='flex min-h-'>
          <Ubicacion />
          <span className='text-slate-800'>{city}</span>
        </div>
      </div>
    </article>
  )
}
