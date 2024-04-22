import { Clima } from './weathericons'

export function Card ({ code, temperature, fecha, props }) {
  return (
    <div className={props}>
      <span className='self-start text-md text-slate-800'>{fecha}</span>
      <Clima day codigo={code} props='w-3/4' />
      <h4 className='mt-[-12px] text-lg font-medium'>{temperature} C</h4>
    </div>
  )
}
