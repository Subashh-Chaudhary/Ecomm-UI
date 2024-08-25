import { ReactElement, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./assets/css/index.css"

const Welcome = ():ReactElement =>{
  return(
    <h1
    className='text-3xl text-slate-700 bg-slate-200 p-3'
    >Welcome to my website</h1>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Welcome />
  </StrictMode>,
)
