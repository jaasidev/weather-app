import { useId, useRef } from 'react'
import { useStoreResult } from '../const/useStore'
import { Search } from './icons'

export function Form () {
  const { fetching } = useStoreResult()
  const searchid = useId()
  const inputref = useRef()
  const handleSubmit = (event) => {
    event.preventDefault()
    if (inputref.current.value === '' || inputref.current.value === '') return
    fetching(inputref.current.value)
  }
  return (
    <form className='flex items-center shadow-sm z-10' onSubmit={handleSubmit}>
      <input type='text' id={searchid} ref={inputref} placeholder='Londres, Habana, Toronto...' className='outline-none p-2 rounded-s-md bg-[--bg-200]' />
      <button type='submit' className='bg-[--accent-100] p-2 rounded-e-md' aria-label='hidden'><Search /></button>
    </form>
  )
}
