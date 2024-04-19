import { Ubicacion } from './icons'

export function Button () {
  return (
    <button className='flex justify-center items-center bg-blue-400 rounded-full p-5 absolute r-2'>
      <Ubicacion />
    </button>
  )
}

export function Search () {
  return (
    <svg class='w-6 h-6 text-gray-800 dark:text-white' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='currentColor' viewBox='0 0 24 24'>
      <path d='M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Z' />
      <path fill-rule='evenodd' d='M21.707 21.707a1 1 0 0 1-1.414 0l-3.5-3.5a1 1 0 0 1 1.414-1.414l3.5 3.5a1 1 0 0 1 0 1.414Z' clip-rule='evenodd' />
    </svg>

  )
}