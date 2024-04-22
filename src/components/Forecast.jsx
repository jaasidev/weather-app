import { Card } from './card'
export function Proximo ({ tiempo }) {
  return (
    <ul className='flex items-center min-w-[345px] justify-between gap-2 p-2'>
      {tiempo.map((value, index) => {
        return index === 0
          ? null
          : (
            <Card fecha={value.date} key={index} temperature={value.day.maxtemp_c} code={value.day.condition.code} props='flex flex-col justify-center items-center w-full h-full w-1/2 bg-white p-3 rounded-md shadow-md h-40' />
            )
      })}
    </ul>
  )
}
