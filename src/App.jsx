import './App.css'
import { Button } from './components/buttonlocation'
import { useStoreResult } from './const/useStore'

function App () {
  const { result } = useStoreResult()
  console.log(result)
  return (
    <main className='p-0 relative w-full lg:rounded-lg flex flex-col items-center justify-start lg:justify-center gap-2 lg:grid lg:grid-cols-6 lg:grid-rows-3 lg:shadow-md lg:bg-gray-200 lg:place-content-center lg:pr-2 lg:min-h-[750px]'>
      <Button />
    </main>
  )
}

export default App
