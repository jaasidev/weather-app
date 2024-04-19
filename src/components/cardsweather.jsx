import { Ubicacion } from './icons'

export function PrincipalWeather ({ temperature, city, Tiempo }) {
  return (
    <div className='flex flex-col justify-center items-center w-full h-full'>
      <Tiempo />
      <h2>{temperature}</h2>
      <div className='flex items-center justify-center gap-1'>
        <Ubicacion />
        <span>{city}</span>
      </div>
    </div>
  )
}

export function Card ({ Tiempo, temperature, fecha }) {
  return (
    <div className='flex flex-col justify-center items-center w-full h-full'>
      <span className='self-start'>{fecha}</span>
      <Tiempo />
      <h4>{temperature}</h4>
    </div>
  )
}
