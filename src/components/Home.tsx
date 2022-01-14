import React from 'react'
import { IEpisodeProps, IState, IEpisode } from '../interfaces/interfaces';
import { Store } from '../store/Store';
import { fetchData, favEpisode } from '../actions/Actions';

const EpisodeList = React.lazy<any>(() => import('./Episodes'))

export default function Home():JSX.Element {

    const {state, dispatch} = React.useContext(Store)
    // useEffect will help us get data as soon as a user lands on the page
  // by default the episodes array is empty
  React.useEffect(() => {
    state.episodes.length === 0 && fetchData(dispatch)
  })

  

   const props:IEpisodeProps = {
    episodes: state.episodes,
    store: {state, dispatch},
    favEpisode,
    favorites: state.favorites
  }

  {console.log(state)}

    return (
        <>
          <React.Suspense fallback={<div>loading...</div>}>
            <section className='episode-layout'>
                <EpisodeList {...props} />
            </section>
        </React.Suspense>  
        </>
    )
}
