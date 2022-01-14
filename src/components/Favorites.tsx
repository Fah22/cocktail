import React from 'react'
import { Store } from '../store/Store'
import { IEpisodeProps } from '../interfaces/interfaces'
import { favEpisode } from '../actions/Actions';

const EpisodeList = React.lazy<any>(() => import('./Episodes'))

export const Favorites = ():JSX.Element => {

    const {state, dispatch} = React.useContext(Store)

    const props:IEpisodeProps  = {
        episodes: state.favorites,
        store: {state, dispatch},
        favEpisode,
        favorites: state.favorites,
    }

    return (
        <>
           <React.Suspense fallback={<div>loading...</div>}>
            <div className="episode-layout">
                <EpisodeList {...props} />
            </div>
           </React.Suspense>
        </>
    )
}
