import { Card } from './card'
export function Proximo ({ tiempo }) {
  return (
    <ul className='flex items-center justify-between gap-2 py-2 w-full min-w-[336px] lg:row-span-1 lg:h-5/6'>
      {tiempo.map((value, index) => {
        return index === 0
          ? null
          : (
            <Card fecha={index} key={index} temperature={value.day.maxtemp_c} code={value.day.condition.code} props='flex flex-col justify-center items-center w-full h-full w-1/2 bg-white py-3 px-1 rounded-md shadow-md h-40 md:p-5 lg:p-6' />
            )
      })}
    </ul>
  )
}
