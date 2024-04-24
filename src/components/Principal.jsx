import { PrincipalWeather } from './cardsweather'
export function Principal ({ result }) {
  return (
    <>
      <PrincipalWeather code={result.current.condition.code} city={`${result.location.region}, ${result.location.country}`} isday={result.current.is_day} temperature={`${result.current.temp_c}C`} props='bg-white p-2 rounded-lg min-h-96 flex items-center shadow-md flex flex-col w-full h-full min-w-[336px] lg:col-span-3 lg:row-span-3 lg:col-start-1 lg:col-end-4 lg:rounded-e-none' />
    </>
  )
}
