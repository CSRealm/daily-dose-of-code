import {useState} from 'react'
function App() {
  const [color, setColor] = useState("white")
  return (
    <>
    <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button className='outline-none px-4 rounded-xl bg-red-500 p-2 text-white' onClick={()=>setColor("rgb(239 68 68)")}>RED</button>
          <button className='outline-none px-4 rounded-xl bg-green-500 p-2 text-white' onClick={()=>setColor("rgb(34 197 94)")}>GREEN</button>
          <button className='outline-none px-4 rounded-xl bg-yellow-500 p-2 text-white' onClick={()=>setColor("rgb(234 179 8)")}>YELLOW</button>
          <button className='outline-none px-4 rounded-xl bg-pink-500 p-2 text-white' onClick={()=>setColor("rgb(236 72 153)")}>PINK</button>
          <button className='outline-none px-4 rounded-xl bg-orange-500 p-2 text-white' onClick={()=>setColor("rgb(249 115 22)")}>ORANGE</button>
          <button className='px-4 rounded-xl bg-white p-2 text-black border-black border-2' onClick={()=>setColor("rgb(255 255 255)")}>DEFAULT</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
