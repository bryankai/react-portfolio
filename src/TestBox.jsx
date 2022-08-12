import {useContext} from 'react';
import {useTheme} from "./ThemeContext.jsx"

export default function TestBox() {

  const [darkTheme,toggleTheme] = useTheme();

  const themeStyles = {
    backgroundColor: darkTheme ? '#333' : '#CCC',
    color: darkTheme ? '#CCC' : '#333',
    padding: '2rem',
    margin: '2rem'
  };

  return (
    <>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div style={themeStyles}>Test Theme Box</div>
    </>
  )
}