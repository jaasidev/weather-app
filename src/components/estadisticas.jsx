import { Item } from './itemlist'

export function Estadisticas ({ contenido }) {
  const { humidity, wind_mph: wind, gust_mph: gust } = contenido.current
  const { sunrise, sunset } = contenido.forecast.forecastday[0].astro
  return (
    <ul className='flex flex-col gap-1 w-full'>
      <Item value={`${humidity}%`} title='Humedad:' />
      <Item value={`${wind}mph`} title='Vientos:' />
      <Item value={`${gust}mph`} title='Rafagas:' />
      <Item value={sunrise} title='Amanecer:' />
      <Item value={sunset} title='Atardecer:' />
    </ul>
  )
}
