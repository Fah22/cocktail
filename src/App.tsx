import React from 'react'
import { Store } from './Store';
import { IAction, IEpisode, IEpisodeProps } from './interfaces';
import { Link } from 'react-router-dom'


const EpisodeList = React.lazy<any>(() => import('./Episodes'))

const App = ():JSX.Element => {
 
  const {state, dispatch} = React.useContext(Store)

  // useEffect will help us get data as soon as a user lands on the page
  // by default the episodes array is empty
  React.useEffect(() => {
    state.episodes.length === 0 && fetchData()
  })

  // create an async function to perfrom the fetch
  const fetchData = async () => {
    const URL = 'https://api.tvmaze.com/singlesearch/shows?q=the+bold+type&embed=episodes'
    // we'll dispaytch our action which will send data to our reducer -> update the store
    const data = await fetch(URL)
    const dataJSON = await data.json();
    return dispatch({
      type: 'FETCH_DATA', // matches our action.type in store.tsx
      payload: dataJSON._embedded.episodes
    })
  }

  // select your fav episdoe 
  const favEpisode = (episode:IEpisode):IAction => {
    // checks in our favourites array which episodes are included in it
  const isEpisdoeFav = state.favorites.includes(episode)

  // this dipatch obj will come in handy to create the toggle effect that adds/removes an episode from favourites
  let dispatchObj = {
    type: 'ADD_FAV',
    payload: episode
  }

  if (isEpisdoeFav) {
    const newFavArray = state.favorites.filter((fav:IEpisode) => fav.id !== episode.id)
    dispatchObj = {
      type: 'REMOVE_FAV',
      payload: newFavArray
    }
  }

  return dispatch(dispatchObj)
  }

  const props:IEpisodeProps = {
    episodes: state.episodes,
    favEpisode,
    favorites: state.favorites
  }

  {console.log(state)}

  return (
    <>
      <div className='header'>
        <h1>The Bold Type</h1>
        <div className="favs">
          <Link to='/'>Home</Link>
          <Link to='favorites'>Favorites: {state.favorites.length}</Link>
        </div>
      </div>
      <React.Suspense fallback={<div>loading...</div>}>
          <section className='episode-layout'>
            <EpisodeList {...props} />
          </section>
      </React.Suspense>
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

