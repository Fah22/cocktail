import React from 'react'
import { Store } from './store/Store'
import { Link } from 'react-router-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import { Favorites } from './components/Favorites'
import useLocalStorage from 'use-local-storage'

const App = (props:any):JSX.Element => {
 
  const {state, dispatch} = React.useContext(Store)

  const [theme, setTheme] = useLocalStorage<string>('theme' ? 'dark' : 'light')

  const switchTheme = ():void => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme)
  }

  return (
    <>
      <div className='app' data-theme={theme}>
        <header className='header'>
          <div>
            <h1>The Bold Type</h1>
          </div>
          <div>
            <div className='theme-toggle'>
              <i onClick={switchTheme} className="fas fa-toggle-off"></i>
            </div>
            <a href='/'>Home</a>
            <a href='/favorites'>Favorite(s): {state.favorites.length}</a>
          </div>
          {props.children}
        </header>
      <div>
        <h3 className='heading'>Pick your favourite Episode</h3>
      </div>
      </div>
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favorites' element={<Favorites />} />
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

/*"eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },*/

