import './App.css'
import { Proximo } from './components/Forecast'
import { Button } from './components/buttonlocation'
import { PrincipalWeather } from './components/cardsweather'
import { Estadistica } from './components/estadistica'
import result from './mooks/response.json'

function App () {
  return (
    <main className='p-0 relative w-full lg:rounded-lg flex flex-col items-center justify-start lg:justify-center gap-2 lg:grid lg:grid-cols-6 lg:grid-rows-3 lg:shadow-md lg:bg-gray-200 lg:place-content-center lg:pr-2'>
      <PrincipalWeather code={result.current.condition.code} city={`${result.location.region}, ${result.location.country}`} isday={result.current.is_day} temperature={`${result.current.temp_c}C`} props='bg-white p-2 rounded-lg min-h-96 flex items-center shadow-md flex flex-col w-full h-full min-w-[336px] lg:col-span-3 lg:row-span-3 lg:col-start-1 lg:col-end-4 lg:rounded-e-none' />
      <Proximo tiempo={result.forecast.forecastday} />
      <Estadistica result={result} />
      <Button />
    </main>
  )
}

export default App
