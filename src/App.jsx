import { Button } from './components/buttonlocation'
import { Card } from './components/card'
import { useStoreResult } from './const/useStore'

function App () {
  const { result } = useStoreResult()
  console.log(result)
  return (
    <main className='p-0 relative w-full lg:rounded-lg flex flex-col items-center justify-start lg:justify-center gap-2 lg:grid lg:grid-cols-12 lg:grid-rows-12 lg:shadow-md lg:bg-[--bg-200] lg:place-content-center lg:pr-2 lg:max-h-[900px] lg:max-w-[1200px]'>
      <Card min={12} max={14} code={1000} />
      <Button />
    </main>
  )
}

export default App
