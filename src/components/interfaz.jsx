import { useContent } from '../const/useContent'
import { Principal } from './principal'
import { Forecast } from './forecast'
import { Estadisticas } from './estadisticas'
import { NoResult } from './noresult'

export function Interfaz () {
  const { data, isError, isLoading } = useContent()
  return (
    <>
      {
      (!isError && !isLoading) &&
        <>
          <Principal contenido={data} />
          <Forecast contenido={data} />
          <Estadisticas contenido={data} />
        </>
    }
      {
      (isError || isLoading) &&
        <NoResult />
    }
    </>
  )
}
