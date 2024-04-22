import './App.css'
import { Proximo } from './components/Forecast'
import { Button } from './components/buttonlocation'
import { PrincipalWeather } from './components/cardsweather'
import result from './mooks/response.json'

function App () {
  return (
    <>
      <PrincipalWeather code={result.current.condition.code} city={`${result.location.region}, ${result.location.country}`} isday={result.current.is_day} temperature={`${result.current.temp_c}C`} props='bg-white p-2 rounded-lg min-h-96 flex items-center shadow-md flex flex-col' />
      <Button />
      <Proximo tiempo={result.forecast.forecastday} />
    </>
  )
}

export default App
