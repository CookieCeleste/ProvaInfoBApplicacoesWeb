import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navegacao from './Routes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navegacao />
  </StrictMode>,
)
