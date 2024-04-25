import { Form } from './Form'
import { Ubicacion } from './icons'
import { Clima } from './weathericons'

export function Principal ({ contenido }) {
  const { temp_c: temperature } = contenido.current
  const { code } = contenido.current.condition
  const { region, country } = contenido.location
  return (
    <section className='flex flex-col bg-[--bg-100] h-[400px] w-full items-center p-2 rounded-lg shadow-md sm:col-start-1 sm:col-end-4 sm:row-start-1 sm:row-end-4'>
      <Form />
      <article className='card self-center'>
        <Clima codigo={code} />
        <div className='card-body flex flex-col items-center justify-center'>
          <h2 className='text-[--text-100] text-5xl font-semibold'>{temperature}C</h2>
          <div className='text-[--text-200] flex items-center justify-center'>
            <Ubicacion />
            <span>{`${region},${country}`}</span>
          </div>
        </div>
      </article>
    </section>
  )
}
