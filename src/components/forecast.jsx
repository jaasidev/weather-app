import { Card } from './card'

export function Forecast ({ contenido }) {
  const predict = contenido.forecast.forecastday
  return (
    <section className=' lg:pl-4 flex flex-col items-center justify-center gap-2 w-full sm:row-start-1 sm:row-end-5 sm:h-full sm:col-start-5 sm:col-end-7  lg:col-end-12'>
      <h4 className='font-semibold text-xl text-[--text-100] self-start hidden lg:block'>Proximamente...</h4>
      <ul className='flex justify-center gap-2 items-center w-full sm:flex-col sm:h-full lg:flex-row lg:h-auto lg:gap-4'>
        {predict.map((value, index) => {
          return index > 0
            ? (
              <li key={index} className='w-full sm:h-full'>
                <Card min={value.day.mintemp_c} max={value.day.maxtemp_c} date={value.date} code={value.day.condition.code} />
              </li>
              )
            : null
        })}
      </ul>
    </section>
  )
}
