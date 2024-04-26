import { useStoreResult } from './useStore'
const { fetching } = useStoreResult

export async function success (coords) {

}
export function error (err) {
  console.warn(`ERROR(${err.code}): ${err.message}`)
}
