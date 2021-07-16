import { useContext, createContext, Dispatch } from 'react'
import { IPost } from '../interfaces'

export enum ACTIONS {
  SET_POSTS = 'set-posts',
  ADD_POST = 'add-post',
}

type Reducer<TState, TAction> = (state: TState, action: TAction) => TState

type TState = {
  posts: IPost[]
}

type TAction =
  | { type: ACTIONS.SET_POSTS; payload: IPost[] }
  | { type: ACTIONS.ADD_POST; payload: IPost }

export const initialPostState: TState = {
  posts: [],
}

type postContextType = {
  postState: TState
  postDispatch: Dispatch<TAction>
}

const postContextDefaultValue: postContextType = {
  postState: initialPostState,
  postDispatch: () => {},
}

export const PostContext = createContext<postContextType>(
  postContextDefaultValue
)

export function usePostContext() {
  return useContext(PostContext)
}

export const PostReducer: Reducer<TState, TAction> = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_POSTS:
      return { posts: action.payload }
    case ACTIONS.ADD_POST:
      return { posts: [action.payload, ...state.posts] }
    default:
      return state
  }
}
