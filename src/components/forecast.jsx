import { Card } from './card'

export function Forecast ({ contenido }) {
  const predict = contenido.forecast.forecastday
  return (
    <section className='flex flex-col items-center justify-center gap-2'>
      <h4 className='font-semibold text-xl text-[--text-100] self-start'>Proximamente...</h4>
      <ul className='flex justify-center gap-2 items-center'>
        {predict.map((value, index) => {
          return index > 0
            ? (
              <li key={index}>
                <Card min={value.day.mintemp_c} max={value.day.maxtemp_c} date={value.date} code={value.day.condition.code} />
              </li>
              )
            : null
        })}
      </ul>
    </section>
  )
}
