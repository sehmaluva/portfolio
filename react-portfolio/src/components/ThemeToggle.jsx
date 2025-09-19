import React, {useEffect, useState} from 'react'

export default function ThemeToggle(){
  const [theme, setTheme] = useState(()=>{
    try{return localStorage.getItem('theme') || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')}catch{return 'light'}
  })

  useEffect(()=>{
    if(theme === 'dark'){
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme','dark')
    }else{
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme','light')
    }
  },[theme])

  return (
    <button aria-label="Toggle theme" onClick={()=>setTheme(t=>t==='dark'?'light':'dark')} className="p-2 rounded focus:ring">
      {theme==='dark'? '🌙' : '☀️'}
    </button>
  )
}
