import { useRef, useId } from 'react'
import { Search } from './icons'

export function Form () {
  const inputid = useId()
  const inputref = useRef()
  return (
    <form className='flex'>
      <input type='text' id={inputid} ref={inputref} placeholder='Londres, Paris, Brazil' />
      <button><Search /></button>
    </form>
  )
}
