import React from 'react'
import { IState, IAction  } from './interfaces'

const initialState:IState = {
    episodes: [],
    favorites: []
}

export const Store = React.createContext<IState | any>(initialState)

function reducer(state:IState, action:IAction):IState {
    switch (action.type) {
        // action reducers
        // once it fetches data from the API, it will populate the store with new data
        case 'FETCH_DATA':
            return {...state, episodes: action.payload }
        case 'ADD_FAV':
            return {...state, favorites: [...state.favorites, action.payload]}
        default: 
            return state
    }
}

// the goal is to make sure that the value attribute is passed down to any component that is passed through the store
export function StoreProvider(props:any):JSX.Element {
    const [state, dispatch] = React.useReducer(reducer, initialState)
    return <Store.Provider value={{state, dispatch}}>{props.children}</Store.Provider>
}