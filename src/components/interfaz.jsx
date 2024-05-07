import { useEffect } from 'react'
import { useStoreResult } from '../const/useStore'
import { Principal } from './principal'
import { Forecast } from './forecast'
import { Estadisticas } from './estadisticas'
import { NoResult } from './noresult'

export function Interfaz () {
  const { result, fetching } = useStoreResult()
  useEffect(() => {
    fetching('auto:ip')
  }, [])
  return (
    <>
      {
      result !== null &&
        <>
          <Principal contenido={result} />
          <Forecast contenido={result} />
          <Estadisticas contenido={result} />
        </>
    }
      {
      result === null &&
        <NoResult />
    }
    </>
  )
}
