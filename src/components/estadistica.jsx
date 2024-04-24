import { Rafaga, Sunrise, Sunset, Vientoico, Water } from './icons'
import { Item } from './item'
export function Estadistica ({ result }) {
  return result === null
    ? null
    : (
      <section className='lg:col-start-4 lg:col-end-7 lg:row-start-2 lg:row-end-4 w-full lg:self-center'>
        <h3 className='hidden lg:block'>Estadisticas</h3>
        <div className='flex flex-col items-center gap-4 lg:grid lg:grid-cols-3'>
          <Item value={`${result.forecast.forecastday[0].astro.sunrise}`} texto='Amanecer:' props='' logo={<Sunrise />} />
          <Item value={`${result.forecast.forecastday[0].astro.sunset}`} texto='Atardecer:' props='' logo={<Sunset />} />
          <Item value={`${result.current.wind_mph}mph`} texto='Viento:' props='' logo={<Vientoico />} />
          <Item value={`${result.current.gust_mph}mph`} texto='Ráfagas:' props='' logo={<Rafaga />} />
          <Item value={`${result.current.humidity}%`} texto='Humedad:' props='' logo={<Water />} />
        </div>
      </section>
      )
}
