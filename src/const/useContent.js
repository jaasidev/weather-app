import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

const apiKey = 'b5bdee64d2724f14a8311007241604'
const fetching = async () => {
  const apiCall = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=auto:ip&aqi=no&days=3`
  return await fetch(apiCall)
    .then(res => {
      if (!res.ok) throw new Error('error en el fetching')
      return res.json()
    })
    .then(data => {
      console.log(data)
      return data
    })
    .catch((err) => console.error(err))
}

const fetchMutate = async (search) => {
  const apiCall = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${search}&aqi=no&days=3`
  return await fetch(apiCall)
    .then(res => {
      if (!res.ok) throw new Error('error en el fetching')
      return res.json()
    })
    .then(data => {
      console.log(data)
      return data
    })
    .catch((err) => console.error(err))
}

export function useContent () {
  const queryclient = useQueryClient()
  const { data, isError, isLoading, refetch } = useQuery({ queryKey: ['server'], queryFn: async () => await fetching() })
  const mutation = useMutation({
    mutationFn: async (nueva) => {
      return await fetchMutate(nueva)
    },
    onSuccess: (data) => {
      queryclient.setQueriesData(['server'], data)
    }
  })

  return { data, isError, isLoading, refetch, mutation }
}
