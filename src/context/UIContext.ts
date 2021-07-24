import { useContext, createContext, Dispatch } from 'react'

export enum UI_ACTIONS {
  SET_POST_MODAL = 'set-post-modal',
}

type Reducer<TState, TAction> = (state: TState, action: TAction) => TState

type TState = {
  postModal: boolean
}

type TAction = { type: UI_ACTIONS.SET_POST_MODAL; payload: boolean }

export const initialUIState: TState = {
  postModal: false,
}

type uiContextType = {
  uiState: TState
  uiDispatch: Dispatch<TAction>
}

const uiContextDefaultValue: uiContextType = {
  uiState: initialUIState,
  uiDispatch: () => {},
}

export const UIContext = createContext<uiContextType>(uiContextDefaultValue)

export function useUIContext() {
  return useContext(UIContext)
}

export const UIReducer: Reducer<TState, TAction> = (state, action) => {
  switch (action.type) {
    case UI_ACTIONS.SET_POST_MODAL:
      return { ...state, postModal: action.payload }
    default:
      return state
  }
}
