import { useState } from 'react'
import './App.css'
import Sbody from './Sbody'

function App() {
  const [title,settitle]=useState("shenzan ali cheena")
  const [date,setdate]=useState("15-05-2024")
  return (
    <>
    <div className="container">
      <h3 className='m-auto bg-dark text-center text-bg-success'>Signature app</h3>
      <Sbody text={title}/>
      <Sbody text={date}/>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente tempore unde in laboriosam voluptatem labore voluptatum neque perspiciatis recusandae eos possimus id ea deleniti expedita molestias officiis animi, dolorum rerum magnam dolores corporis quam! Ullam ad autem quasi nam, excepturi nulla fuga facilis, illum, enim nesciunt itaque? Aperiam, cumque saepe! Similique modi, quaerat voluptatibus vitae nihil numquam unde repudiandae quibusdam ea sapiente dolore fuga, in deleniti expedita delectus at? Est deleniti vel nam maiores nemo ea facere velit harum vero id! Vitae quam blanditiis laudantium voluptatem porro dicta architecto nesciunt nihil asperiores exercitationem aliquid numquam sint facere, sequi sunt? Tempora.</p>
      <input type="text" className='flex-md-row m-3 g-3' value={title} onChange={(e)=>settitle(e.target.value)}/>
      <input type="date" className='flex-md-row m-3 g-3' value={date} onChange={(e)=>setdate(e.target.value)} />
    </div>
    </>
  )
}

export default App
