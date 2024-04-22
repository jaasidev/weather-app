import { Ubicacion } from './icons'

export function Button () {
  return (
    <button className='flex justify-center items-center bg-blue-400 rounded-full p-5 sm:absolute fixed bottom-4 right-4 sm:right-4 sm:bottom-4'>
      <Ubicacion />
    </button>
  )
}
