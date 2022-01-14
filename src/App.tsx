import React from 'react'
import { Store } from './store/Store';
import { IAction, IEpisode, IEpisodeProps } from './interfaces/interfaces';
import { Link } from 'react-router-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import { Favorites } from './components/Favorites';

const App = (props:any):JSX.Element => {
 
  const {state, dispatch} = React.useContext(Store)

  return (
    <>
      <header className='header'>
        <div>
          <h1>The Bold Type</h1>
          <p>Pick your favourite Episode</p>
        </div>
        <div>
          <a href='/'>Home</a>
          <a href='/favorites'>Favorite(s): {state.favorites.length}</a>
        </div>
        {props.children}
      </header>

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

