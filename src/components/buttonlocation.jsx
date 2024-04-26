import { Ubicacion } from './icons'
import { success, error } from '../const/geo'

export function Button () {
  const handleClick = () => {
    navigator.geolocation.getCurrentPosition(success, error)
  }
  return (
    <button onClick={handleClick} className='flex btn-primary justify-center items-center bg-[--accent-100] rounded-full p-5 fixed bottom-4 right-4 lg:bottom-6 lg:right-6 lg:absolute' type='submit'>
      <Ubicacion />
    </button>
  )
}
