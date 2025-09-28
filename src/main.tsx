import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import StatePage from './pages/state/StatePage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StatePage />
  </StrictMode>,
)
