export function Card ({ Tiempo, temperature, fecha }) {
  return (
    <div className='flex flex-col justify-center items-center w-full h-full'>
      <span className='self-start'>{fecha}</span>
      <Tiempo />
      <h4>{temperature}</h4>
    </div>
  )
}
