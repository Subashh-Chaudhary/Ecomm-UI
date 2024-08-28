import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./assets/css/index.css"
import RouterConfig from './Config/router.config'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterConfig />
  </StrictMode>
)
