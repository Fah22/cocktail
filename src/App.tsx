import React from 'react'
import { Store } from './store/Store'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import { Favorites } from './components/Favorites'

const App = (props:any):JSX.Element => {
  const {state, dispatch} = React.useContext(Store)

  return (
    <>
      <div className='app'>
        <header className='header'>
          <div>
            <h1>The Bold Type</h1>
          </div>
          <div>
            <a className='fav' href='/favorites'>Favorite(s): {state.favorites.length}</a>
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

