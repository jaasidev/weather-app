import { Clima } from './weathericons'

export function Card ({ code, temperature, fecha, props }) {
  const anuncio = fecha === 1 ? 'Mañana' : 'Pasado Mañana'
  return (
    <div className={props}>
      <span className='self-start text-md text-slate-700'>{anuncio}:</span>
      <Clima day codigo={code} props='w-3/4' />
      <h4 className='mt-[-12px] text-lg font-medium md:text-2xl'>{temperature} C°</h4>
    </div>
  )
}
