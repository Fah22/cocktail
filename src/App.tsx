import React from 'react'
import { Store } from './Store'

const App = ():JSX.Element => {
 
  const {state, dispatch} = React.useContext(Store)

  // create an async function to perfrom the fetch
  const fetchData = async () => {
    // we'll dispaytch our action which will send data to our reducer -> update the store
  }
  return (
    <>
      <h1>It's always 5pm somewhere!</h1>
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

