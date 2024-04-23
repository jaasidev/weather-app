import { Rafaga, Sunrise, Sunset, Vientoico, Water } from './icons'
import { Item } from './item'
export function Estadistica ({ result }) {
  return (
    <>
      <Item value={`${result.forecast.forecastday[0].astro.sunrise}`} texto='Amanecer:' props='lg:row-end-3 lg:row-start-2 lg:col-start-4 lg:col-end-5' logo={<Sunrise />} />
      <Item value={`${result.forecast.forecastday[0].astro.sunset}`} texto='Atardecer:' props='lg:row-end-3 lg:row-start-2 lg:col-start-5 lg:col-end-6' logo={<Sunset />} />
      <Item value={`${result.current.wind_mph}mph`} texto='Viento:' props='lg:row-end-3 lg:row-start-2 lg:col-start-6 lg:col-end-7 ' logo={<Vientoico />} />
      <Item value={`${result.current.gust_mph}mph`} texto='Ráfagas:' props='lg:row-end-4 lg:row-start-3 lg:col-start-4 lg:col-end-5' logo={<Rafaga />} />
      <Item value={`${result.current.humidity}%`} texto='Humedad:' props='lg:row-end-4 lg:row-start-3 lg:col-start-5 lg:col-end-6' logo={<Water />} />
    </>
  )
}
