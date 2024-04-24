import './App.css'
import { Proximo } from './components/Forecast'
import { Principal } from './components/Principal'
import { Button } from './components/buttonlocation'
import { Estadistica } from './components/estadistica'
import result from './mooks/response.json'

function App () {
  return (
    <main className='p-0 relative w-full lg:rounded-lg flex flex-col items-center justify-start lg:justify-center gap-2 lg:grid lg:grid-cols-6 lg:grid-rows-3 lg:shadow-md lg:bg-gray-200 lg:place-content-center lg:pr-2 lg:min-h-[750px]'>
      <Principal result={result} />
      <Proximo tiempo={result.forecast.forecastday} />
      <Estadistica result={result} />
      <Button />
    </main>
  )
}

export default App
