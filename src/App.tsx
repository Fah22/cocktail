import React from 'react'
import { Store } from './store/Store'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import { Favorites } from './components/Favorites'

const App = (props:any):JSX.Element => {
  const {state, dispatch} = React.useContext(Store)

  return (
    <>
    <BrowserRouter>
        <div className='app'>
          <header className='header'>
            <div>
              <h1>
                The Bold Type</h1>
              <p className='fav'>
                <Link className='fav' to='/favorites'>Favorite(s): {state.favorites.length}
                </Link>
                </p>
            </div>
            <div>
              
            </div>
            {props.children}
          </header>
        <div>
        <h3 className='heading'>Pick your favourite Episode</h3>
        </div>
        </div>
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

