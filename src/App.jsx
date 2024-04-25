import { Button } from './components/buttonlocation'
import { Principal } from './components/principal'
import { useStoreResult } from './const/useStore'

function App () {
  const { result } = useStoreResult()
  console.log(result)
  return (
    <main className='relative w-full  flex flex-col items-center justify-start lg:rounded-lg lg:justify-center gap-2 lg:grid lg:grid-cols-12 lg:grid-rows-12 lg:shadow-md lg:bg-[--bg-200] lg:place-content-center lg:pr-2 lg:max-h-[900px] lg:max-w-[1200px] p-1'>
      <Principal contenido={result} />
      <Button />
    </main>
  )
}

export default App
