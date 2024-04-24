import { Card } from './card'
export function Proximo ({ tiempo }) {
  return tiempo === null || tiempo === undefined
    ? null
    : (
      <ul before='Próximos Días:' className='flex items-center lg:col-start-4 lg:col-end-6 justify-between gap-2 py-2 w-full min-w-[336px] lg:row-span-1 lg:h-5/6 lg:self-end lg:before:content-[attr(before)] lg:relative lg:before:absolute lg:before:top-[-20px] lg:before:left-1 lg:before:font-medium lg:before:text-xl'>
        {tiempo.map((value, index) => {
          return index === 0
            ? null
            : (
              <Card fecha={index} key={index} temperature={value.day.maxtemp_c} code={value.day.condition.code} props='flex flex-col justify-center items-center w-full h-full w-1/2 bg-white p-3 md:p-5 rounded-md shadow-md h-40 md:p-5 lg:p-7' />
              )
        })}
      </ul>
      )
}
