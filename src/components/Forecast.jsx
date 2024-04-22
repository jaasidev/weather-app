import { Card } from './card'
export function Proximo ({ tiempo }) {
  return (
    <ul className='flex items-center justify-between gap-2 py-2 w-full min-w-[336px]'>
      {tiempo.map((value, index) => {
        return index === 0
          ? null
          : (
            <Card fecha={index} key={index} temperature={value.day.maxtemp_c} code={value.day.condition.code} props='flex flex-col justify-center items-center w-full h-full w-1/2 bg-white p-3 rounded-md shadow-md h-40 md:p-5' />
            )
      })}
    </ul>
  )
}
