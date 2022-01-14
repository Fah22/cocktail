import { IState, IAction, IEpisode } from "../interfaces/interfaces";

// create an async function to perfrom the fetch
export  const fetchData = async (dispatch:any) => {
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
export const favEpisode = (state:IState, dispatch:any, episode:IEpisode | any):IAction => {
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
