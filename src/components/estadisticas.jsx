import { Rafaga, Sunrise, Sunset, Vientoico, Water } from './icons'
import { ItemCard } from './itemcard'
import { Item } from './itemlist'

export function Estadisticas ({ contenido }) {
  const { humidity, wind_mph: wind, gust_mph: gust } = contenido.current
  const { sunrise, sunset } = contenido.forecast.forecastday[0].astro
  return (
    <>
      <h2 className=' self-end font-semibold text-xl text-[--text-100] hidden lg:block col-start-5  col-end-13 px-4 row-start-5 row-end-6 w-full'>Estado actual:</h2>
      <section className='flex flex-col gap-1 w-full sm:col-start-1 sm:col-end-7 sm:row-start-5 sm:row-end-7 sm:self-start lg:row-start-6 lg:row-end-13 lg:col-start-5 lg:col-end-13 lg:grid lg:grid-cols-3 lg:grid-rows-2 lg:px-4 lg:gap-4 lg:py-1'>
        <Item value={`${humidity}%`} title='Humedad:' />
        <Item value={`${wind}mph`} title='Vientos:' />
        <Item value={`${gust}mph`} title='Rafagas:' />
        <Item value={sunrise} title='Amanecer:' />
        <Item value={sunset} title='Atardecer:' />
        <ItemCard valor={`${humidity}%`} title='Humedad' logo={<Water />} />
        <ItemCard valor={`${wind}mph`} title='Viento' logo={<Vientoico />} />
        <ItemCard valor={`${gust}mph`} title='Ráfagas' logo={<Rafaga />} />
        <ItemCard valor={sunrise} title='Amanecer' logo={<Sunrise />} />
        <ItemCard valor={sunset} title='Atardecer' logo={<Sunset />} />
      </section>
    </>
  )
}
