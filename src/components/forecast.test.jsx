import { test, describe, beforeEach } from 'vitest'
import { getByText } from '@testing-library/dom'
import { render } from '@testing-library/react'

describe('test de ejemplo', () => {
  let component

  beforeEach(() => {
    component = render(
      <>
        <button onClick={() => { }} aria-label='hidden' className='flex btn-primary justify-center items-center bg-[--accent-100] rounded-full p-5 fixed bottom-4 right-4 lg:bottom-6 lg:right-6 lg:absolute shadow-md' type='submit'>
          Ubicacion
        </button>
      </>

    )
  })

  test('se renderiza el boton', () => {
  })
})
