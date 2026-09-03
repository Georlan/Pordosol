import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles.css'
import './patch.css'
import './modern.css'
import './heroSharp2'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
