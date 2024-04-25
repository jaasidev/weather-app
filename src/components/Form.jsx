import { Search } from './icons'

export function Form () {
  const handleSubmit = (event) => {
    event.preventDefault()
  }
  return (
    <form className='flex items-center shadow-sm z-10' onChange={handleSubmit}>
      <input type='text' placeholder='Londres, Habana, Toronto...' className='outline-none p-2 rounded-s-md bg-[--bg-200]' />
      <button type='submit' className='bg-[--accent-100] p-2 rounded-e-md'><Search /></button>
    </form>
  )
}
