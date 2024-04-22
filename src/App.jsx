import './App.css'
import { Button } from './components/buttonlocation'
import { PrincipalWeather } from './components/cardsweather'
import result from './mooks/response.json'

function App () {
  return (
    <>
      <PrincipalWeather code={result.current.condition.code} temperature={`${result.location.region},${result.location.country}`} isday={result.current.is_day} />
      <Button />
    </>
  )
}

export default App
