import React from 'react'
import { IEpisode } from './interfaces';

export default function Episodes(props: any):JSX.Element[] | any {
    const {episodes, favEpisode, favorites} = props
    return episodes.map((episode:IEpisode) => {
          return (
            <section key={episode.id} className='episode-box'>
              <img src={episode.image.medium} alt={`The Bold Type ${episode.name}`} />
              <div>{episode.name}</div>
              <section style={{ display: 'flex', justifyContent: 'space-between'}}>
                <div>
                  Season: {episode.season} Number: {episode.number}
                </div>
                <button type='button' onClick={() => favEpisode(episode)}>
                  {favorites.find((fav:IEpisode) => fav.id == episode.id) ? <i className="fas fa-heart"></i> : <i className="far fa-heart"></i>}
                </button>
              </section>
            </section>
          )
        })
}

