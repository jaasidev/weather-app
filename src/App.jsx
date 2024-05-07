import { Button } from './components/buttonlocation'
import { Interfaz } from './components/interfaz'

function App () {
  return (
    <main className='relative w-full bg-[--primary-100] flex flex-col items-center lg:rounded-lg lg:justify-center gap-2 sm:grid sm:grid-col-6 sm:grid-rows-6 sm:max-h-[1100px] lg:grid lg:grid-cols-12 lg:grid-rows-12 lg:shadow-md lg:bg-[--bg-200] lg:place-content-center lg:max-h-[850px] lg:max-w-[1200px] p-1  pb-2 sm:pb-10 lg:p-0 xl'>
      <Interfaz />
      <Button />
    </main>
  )
}

export default App
