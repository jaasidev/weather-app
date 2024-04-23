import { Ubicacion } from './icons'

export function Button () {
  return (
    <button className='flex justify-center items-center bg-blue-400 rounded-full p-5 fixed bottom-4 right-4 lg:bottom-6 lg:right-6 lg:absolute' type='submit'>
      <Ubicacion />
    </button>
  )
}
