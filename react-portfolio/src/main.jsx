import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

// apply saved theme before React mounts to avoid FOUC
;(function applyTheme(){
  try{
    const stored = localStorage.getItem('theme')
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    if(stored === 'dark' || (!stored && prefersDark)) document.documentElement.classList.add('dark')
  }catch(e){}
})()

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
