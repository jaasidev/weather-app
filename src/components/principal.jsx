import { Form } from './Form'
import { Ubicacion } from './icons'
import { Clima } from './weathericons'

export function Principal ({ contenido }) {
  const { temp_c: temperature } = contenido.current
  const { code } = contenido.current.condition
  const { region, country } = contenido.location
  return (
    <section className='flex flex-col bg-[--bg-100] h-[400px] w-full items-center p-2 rounded-lg shadow-md sm:border-b-[--accent-100] border-b-[10px] sm:col-start-1 sm:col-end-5 sm:row-start-1 sm:row-end-5 sm:h-full sm:justify-center card sm:gap-12 sm:p-6 lg:row-start-1 lg:row-end-13 lg:col-start-1 lg:col-end-5 lg:rounded-e-none lg:border-b-[0px]'>
      <Form />
      <article className='self-center flex flex-col items-center w-full h-full'>
        <Clima codigo={code} props='sm:max-h-80 w-full flex-grow' />
        <div className='card-body flex flex-col items-center justify-center'>
          <h2 className='text-[--text-100]  text-5xl sm:text-6xl font-semibold'>{temperature}C°</h2>
          <div className='text-[--text-200] flex items-center justify-center sm:text-xl'>
            <Ubicacion props='text-[--text-100]' />
            <span>{`${region},${country}`}</span>
          </div>
        </div>
      </article>
    </section>
  )
}
