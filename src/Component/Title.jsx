import '../App.css'

export default function Title({title}) {
  return (
    <div className="md:w-[72%] w-[100%] text-center md:my-3 md:text-7xl   text-[2rem] font-bold text-white">
      <span className='title'>{title}</span>
    </div>
  )
}
