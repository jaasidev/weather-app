import { Ubicacion } from './icons'
import { useContent } from '../const/useContent'

export function Button () {
  const { mutation } = useContent()
  const handleClick = () => {
    mutation.mutate('auto:ip')
  }
  return (
    <button onClick={handleClick} aria-label='hidden' className='flex btn-primary justify-center items-center bg-[--accent-100] rounded-full p-5 fixed bottom-4 right-4 lg:bottom-6 lg:right-6 lg:absolute shadow-md' type='submit'>
      <Ubicacion />
    </button>
  )
}
