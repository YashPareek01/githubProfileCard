import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/theme'
import Card from './components/Card'
import Theme from './components/Theme'

function App() {
 const [themeMode, setThemeMode] = useState("light")

 const lightMode = () => {
  setThemeMode("light")
 }
 const darkMode = () => {
  setThemeMode("dark")
 }
 useEffect(() => {
  const modeSelect = document.querySelector("html")
  modeSelect.classList.remove("dark", "light")
  modeSelect.classList.add(themeMode)
 },[themeMode])
  return (
    <>
      <ThemeProvider value={{themeMode,darkMode,lightMode}}>

        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                <Theme />
            </div>

            <div className="w-full max-w-sm mx-auto">
              <Card />
            </div>
          </div>
        </div>

      </ThemeProvider>
    </>
  )
}

export default App
