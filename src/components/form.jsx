import { useRef, useId } from 'react'
import { Search } from './icons'

export function Form () {
  const inputid = useId()
  const inputref = useRef()
  return (
    <form className='flex items-center shadow-sm my-3'>
      <input type='text' id={inputid} ref={inputref} placeholder='Londres, Paris, Brazil...' className='p-1 bg-slate-100 rounded-s-md' />
      <button className='p-1 bg-blue-200 rounded-e-md'><Search /></button>
    </form>
  )
}
