import { apiCall } from './const'

fetch(apiCall)
  .then(res => {
    if (!res.ok) throw new Error('error tomando los datos')
    return res.json()
  })
  .then(data => {})
