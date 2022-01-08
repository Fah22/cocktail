import React from 'react'
import { Store } from './Store';
import { IAction, IEpisode} from './interfaces';

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
  const favEpisode = (episode:IEpisode):IAction => dispatch({
    type: 'ADD_FAV',
    payload: episode
  })

  {console.log(state)}

  return (
    <>
      <div className='header'>
        <h1>The Bold Type</h1>
        <p>Select Your Favorite Episode</p>
      </div>
      <section className='episode-layout'>
        {state.episodes.map((episode:IEpisode) => {
          return (
            <section key={episode.id} className='episode-box'>
              <img src={episode.image.medium} alt={`The Bold Type ${episode.name}`} />
              <div>{episode.name}</div>
              <section>
                <div>
                  Season: {episode.season} Number: {episode.number}
                </div>
                <button type='button' onClick={() => favEpisode(episode)}>
                  <i className="far fa-heart"></i>
                </button>
              </section>
            </section>
          )
        })}
      </section>
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

