export type Dispatch = React.Dispatch<IAction>

export interface IState {
    episodes: Array<IEpisode>
    favorites: Array<IEpisode>
}

export interface IAction {
    type: string
    payload: Array<IEpisode> | any
}

export interface IEpisode {
  airdate: string
  airstamp: string
  airtime: string
  id: number
  image: { medium: string, 
           original: string
        }
  name: string
  number: number
  rating: {average: number}
  runtime: number
  season: number
  summary: string
  type: string
  url: string
}

export interface IEpisodeProps {
  episodes: IEpisode[]
  store: {state: IState, dispatch: Dispatch}
  favEpisode: (state:IState, dispatch:Dispatch, episode: IEpisode) => IAction
  favorites: IEpisode[]
}