import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import App from './App.jsx'
import { ThemeProvider } from './contexts/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
          <App />
          </ThemeProvider>
  </StrictMode>,
)
