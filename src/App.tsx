import { useState } from 'react'
import './App.css'
import MainLayout from './components/MainLayout'
import { ThemeContext, DefaultTheme } from './context/theme'
//import Login from './pages/Login'
//import Sales from './pages/Sales'

function App() {
  const [theme, setTheme] = useState(DefaultTheme)

  return (
    <>
      <ThemeContext.Provider value={theme} >
        <MainLayout>
          <div>
            Soy el contenido
          </div>
        </MainLayout>
      </ThemeContext.Provider>
    </>
  )
}

export default App