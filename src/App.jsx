import './App.css'
import { Proximo } from './components/Forecast'
import { Button } from './components/buttonlocation'
import { PrincipalWeather } from './components/cardsweather'
import { Item } from './components/item'
import result from './mooks/response.json'

function App () {
  return (
    <>
      <PrincipalWeather code={result.current.condition.code} city={`${result.location.region}, ${result.location.country}`} isday={result.current.is_day} temperature={`${result.current.temp_c}C`} props='bg-white p-2 rounded-lg min-h-96 flex items-center shadow-md flex flex-col w-full min-w-[336px]' />
      <Proximo tiempo={result.forecast.forecastday} />
      <Item value={`${result.forecast.forecastday[0].astro.sunrise}`} texto='Amanecer:' />
      <Item value={`${result.forecast.forecastday[0].astro.sunset}`} texto='Atardecer:' />
      <Item value={`${result.current.wind_mph}mph`} texto='Viento:' />
      <Item value={`${result.current.gust_mph}mph`} texto='Ráfagas:' />
      <Item value={`${result.current.humidity}%`} texto='Humedad:' />
      <Button />
    </>
  )
}

export default App
