import { Ubicacion } from './icons'
import { useStoreResult } from '../const/useStore'

export function Button () {
  const { fetching } = useStoreResult()
  const handleClick = () => {
    fetching('auto:ip')
  }
  return (
    <button onClick={handleClick} aria-label='hidden' className='flex btn-primary justify-center items-center bg-[--accent-100] rounded-full p-5 fixed bottom-4 right-4 lg:bottom-6 lg:right-6 lg:absolute shadow-md' type='submit'>
      <Ubicacion />
    </button>
  )
}
