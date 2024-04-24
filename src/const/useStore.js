import { create } from 'zustand'

export const apiKey = 'b5bdee64d2724f14a8311007241604'
export const useStoreResult = create((set, get) => ({
  result: {
    location: {
      name: 'Havana',
      region: 'Ciudad de la Habana',
      country: 'Cuba',
      lat: 23.13,
      lon: -82.36,
      tz_id: 'America/Havana',
      localtime_epoch: 1713555412,
      localtime: '2024-04-19 15:36'
    },
    current: {
      last_updated_epoch: 1713555000,
      last_updated: '2024-04-19 15:30',
      temp_c: 31,
      temp_f: 87.8,
      is_day: 1,
      condition: {
        text: 'Partly cloudy',
        icon: '//cdn.weatherapi.com/weather/64x64/day/116.png',
        code: 1003
      },
      wind_mph: 2.2,
      pressure_in: 30,
      precip_mm: 0,
      precip_in: 0,
      humidity: 46,
      cloud: 25,
      feelslike_c: 34.7,
      feelslike_f: 94.5,
      uv: 7,
      gust_mph: 20.1,
      gust_kph: 32.3
    },
    forecast: {
      forecastday: [
        {
          date: '2024-04-19',
          date_epoch: 1713484800,
          day: {
            maxtemp_c: 29.4,
            maxtemp_f: 84.9,
            mintemp_c: 22.2,
            mintemp_f: 72,
            daily_will_it_rain: 0,
            daily_chance_of_rain: 0,
            daily_will_it_snow: 0,
            daily_chance_of_snow: 0,
            condition: {
              text: 'Sunny',
              icon: '//cdn.weatherapi.com/weather/64x64/day/113.png',
              code: 1000
            }
          },
          astro: {
            sunrise: '07:05 AM',
            sunset: '07:52 PM',
            moonrise: '04:30 PM',
            moonset: '04:44 AM',
            moon_phase: 'Waxing Gibbous',
            is_moon_up: 1,
            is_sun_up: 0
          },
          hour: [
            {
              condition: {}
            },
            {
              condition: {}
            },
            {
              condition: {}
            },
            {
              condition: {}
            },
            {
              condition: {}
            },
            {
              condition: {}
            },
            {
              condition: {}
            },
            {
              condition: {}
            },
            {
              condition: {}
            },
            {
              condition: {}
            },
            {
              condition: {}
            },
            {
              condition: {}
            },
            {
              condition: {}
            },
            {
              condition: {}
            },
            {
              condition: {}
            },
            {
              condition: {}
            },
            {
              condition: {}
            },
            {
              condition: {}
            },
            {
              condition: {}
            },
            {
              condition: {}
            },
            {
              condition: {}
            },
            {
              condition: {}
            },
            {
              condition: {}
            },
            {
              condition: {}
            }
          ]
        },
        {
          date: '2024-04-20',
          date_epoch: 1713571200,
          day: {
            maxtemp_c: 29.8,
            maxtemp_f: 85.6,
            mintemp_c: 21.4,
            mintemp_f: 70.5,
            daily_will_it_rain: 0,
            daily_chance_of_rain: 0,
            daily_will_it_snow: 0,
            daily_chance_of_snow: 0,
            condition: {
              text: 'Sunny',
              icon: '//cdn.weatherapi.com/weather/64x64/day/113.png',
              code: 1000
            }
          },
          astro: {
            sunrise: '07:04 AM',
            sunset: '07:53 PM',
            moonrise: '05:20 PM',
            moonset: '05:14 AM',
            moon_phase: 'Waxing Gibbous',
            is_moon_up: 1,
            is_sun_up: 0
          },
          hour: [
            {
              condition: {}
            },
            {
              condition: {}
            },
            {
              condition: {}
            },
            {
              condition: {}
            },
            {
              condition: {}
            },
            {
              condition: {}
            },
            {
              condition: {}
            },
            {
              condition: {}
            },
            {
              condition: {}
            },
            {
              condition: {}
            },
            {
              condition: {}
            },
            {
              condition: {}
            },
            {
              condition: {}
            },
            {
              condition: {}
            },
            {
              condition: {}
            },
            {
              condition: {}
            },
            {
              condition: {}
            },
            {
              condition: {}
            },
            {
              condition: {}
            },
            {
              condition: {}
            },
            {
              condition: {}
            },
            {
              condition: {}
            },
            {
              condition: {}
            },
            {
              condition: {}
            }
          ]
        },
        {
          date: '2024-04-21',
          date_epoch: 1713657600,
          day: {
            maxtemp_c: 29.5,
            maxtemp_f: 85.1,
            mintemp_c: 21.5,
            mintemp_f: 70.6,
            daily_will_it_rain: 0,
            daily_chance_of_rain: 0,
            daily_will_it_snow: 0,
            daily_chance_of_snow: 0,
            condition: {
              text: 'Sunny',
              icon: '//cdn.weatherapi.com/weather/64x64/day/113.png',
              code: 1000
            }
          },
          astro: {
            sunrise: '07:03 AM',
            sunset: '07:53 PM',
            moonrise: '06:09 PM',
            moonset: '05:43 AM',
            moon_phase: 'Waxing Gibbous',
            is_moon_up: 1,
            is_sun_up: 0
          },
          hour: [
            {
              condition: {}
            },
            {
              condition: {}
            },
            {
              condition: {}
            },
            {
              condition: {}
            },
            {
              condition: {}
            },
            {
              condition: {}
            },
            {
              condition: {}
            },
            {
              condition: {}
            },
            {
              condition: {}
            },
            {
              condition: {}
            },
            {
              condition: {}
            },
            {
              condition: {}
            },
            {
              condition: {}
            },
            {
              condition: {}
            },
            {
              condition: {}
            },
            {
              condition: {}
            },
            {
              condition: {}
            },
            {
              condition: {}
            },
            {
              condition: {}
            },
            {
              condition: {}
            },
            {
              condition: {}
            },
            {
              condition: {}
            },
            {
              condition: {}
            },
            {
              condition: {}
            }
          ]
        }
      ]
    }
  },
  fetching: (search) => {
    const apiCall = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${search}&aqi=no&days=3`
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