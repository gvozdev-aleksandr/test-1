import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from '@app/App.jsx'
import { ThemeProvider } from 'styled-components';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
