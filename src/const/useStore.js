import { create } from 'zustand'

export const apiKey = 'b5bdee64d2724f14a8311007241604'
export const useStoreResult = create((set, get) => ({
  result: null,
  fetching: (search) => {
    const apiCall = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${search}&aqi=no&days=3`
    fetch(apiCall)
      .then(res => {
        if (!res.ok) throw new Error('error en el fetching')
        return res.json()
      })
      .then(data => {
        set({ result: data })
      })
      .catch((err) => console.error(err))
  }
}))
