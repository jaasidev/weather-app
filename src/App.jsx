import { Button } from './components/buttonlocation'
import { Forecast } from './components/forecast'
import { Principal } from './components/principal'
import { useStoreResult } from './const/useStore'
import { Estadisticas } from './components/estadisticas'
import { useEffect } from 'react'
import { success, error } from './const/geo'

function App () {
  const { result } = useStoreResult()
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, error)
  }, [])
  return (
    <main className='relative w-full bg-[--primary-100] flex flex-col items-center  lg:rounded-lg lg:justify-center gap-2 sm:grid sm:grid-col-6 sm:grid-rows-6 sm:max-h-[1100px] lg:grid lg:grid-cols-12 lg:grid-rows-12 lg:shadow-md lg:bg-[--bg-200] lg:place-content-center lg:pr-2 lg:max-h-[850px] lg:max-w-[1200px] p-1  pb-2 sm:pb-10 lg:p-0'>
      <Principal contenido={result} />
      <Forecast contenido={result} />
      <Estadisticas contenido={result} />
      <Button />
    </main>
  )
}

export default App
