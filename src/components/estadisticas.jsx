import { Item } from './itemlist'

export function Estadisticas ({ contenido }) {
  const { humidity, wind_mph: wind, gust_mph: gust } = contenido.current
  const { sunrise, sunset } = contenido.forecast.forecastday[0].astro
  return (
    <ul className='flex flex-col gap-2 w-full sm:col-start-1 sm:col-end-7 sm:row-start-5 sm:row-end-7 sm:self-start'>
      <Item value={`${humidity}%`} title='Humedad:' />
      <Item value={`${wind}mph`} title='Vientos:' />
      <Item value={`${gust}mph`} title='Rafagas:' />
      <Item value={sunrise} title='Amanecer:' />
      <Item value={sunset} title='Atardecer:' />
    </ul>
  )
}
