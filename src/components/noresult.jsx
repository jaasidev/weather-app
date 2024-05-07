import { Form } from './Form'
import { CancelIco } from './icons'

export function NoResult () {
  return (
    <div className='flex flex-col items-center justify-center col-start-1 col-end-13 row-start-1 row-end-13 bg-[--bg-100] h-full w-full p-3 min-h-[667px] rounded-lg'>
      <Form />
      <div className='flex flex-1 flex-col items-center justify-center text-3xl text-[--text-200] '>
        <CancelIco width='150px' height='150px' />
        <span>No se encuentran resultados</span>
      </div>
    </div>
  )
}
