import React, {createContext, useState, useContext} from 'react';

const ThemeContext = createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider ({children}) {
      
  const [darkTheme, setDarkTheme] = useState(true)
  
  const toggleTheme = () => {
    setDarkTheme(prevDarkTheme=>!prevDarkTheme)
  }
  return (
    <ThemeContext.Provider value={[darkTheme, toggleTheme]}>
        {children}
    </ThemeContext.Provider>
  )
}
