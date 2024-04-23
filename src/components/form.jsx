import { useRef, useId } from 'react'
import { Search } from './icons'

export function Form () {
  const inputid = useId()
  const inputref = useRef()
  return (
    <form className='flex items-center shadow-sm mt-3 z-10 lg:mt-5 lg:w-96'>
      <input type='text' id={inputid} ref={inputref} placeholder='Londres, Paris, Brazil...' className='p-1 bg-slate-100 rounded-s-md outline-none lg:w-full lg:p-2' />
      <button className='p-1 bg-blue-200 rounded-e-md lg:p-2'><Search /></button>
    </form>
  )
}
