import { useId, useRef } from 'react'
import { useContent } from '../const/useContent'
import { Search } from './icons'

export function Form () {
  const searchid = useId()
  const inputref = useRef()
  const { mutation } = useContent()
  const handleSubmit = (event) => {
    event.preventDefault()
    if (inputref.current.value === '' || inputref.current.value === '') return
    mutation.mutate(inputref.current.value)
  }
  return (
    <form className='flex items-center shadow-sm z-10' onSubmit={handleSubmit}>
      <input type='text' id={searchid} ref={inputref} placeholder='Londres, Habana, Toronto...' className='outline-none p-2 rounded-s-md bg-[--bg-200]' />
      <button type='submit' className='bg-[--accent-100] p-2 rounded-e-md' aria-label='hidden'><Search /></button>
    </form>
  )
}
