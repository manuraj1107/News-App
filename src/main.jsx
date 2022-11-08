import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { NewsContextProvider } from "./NewsContext"
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NewsContextProvider>
      <App />
    </NewsContextProvider>
  </React.StrictMode>
)
