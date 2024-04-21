import './App.css'
import { Button } from './components/buttonlocation'
import { PrincipalWeather } from './components/cardsweather'

function App () {
  return (
    <>
      <PrincipalWeather city='La Habana' code={1003} temperature='12 Grados' />
      <Button />
    </>
  )
}

export default App
