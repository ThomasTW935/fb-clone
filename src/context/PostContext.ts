import { useContext, createContext, Dispatch } from 'react'
import { IPost } from '../interfaces'

export enum POST_ACTIONS {
  SET_POSTS = 'set-posts',
  ADD_POST = 'add-post',
  UPDATE_POST = 'update-post',
  SET_SELECTED_POST = 'set-selected-post',
}

type Reducer<TState, TAction> = (state: TState, action: TAction) => TState

type TState = {
  posts: IPost[]
  selectedPost: string
}

type TAction =
  | { type: POST_ACTIONS.SET_POSTS; payload: IPost[] }
  | { type: POST_ACTIONS.ADD_POST; payload: IPost }
  | { type: POST_ACTIONS.UPDATE_POST; payload: string }
  | { type: POST_ACTIONS.SET_SELECTED_POST; payload: string }

export const initialPostState: TState = {
  posts: [],
  selectedPost: '',
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
    case POST_ACTIONS.SET_POSTS:
      return { ...state, posts: action.payload }
    case POST_ACTIONS.ADD_POST:
      return { ...state, posts: [action.payload, ...state.posts] }
    case POST_ACTIONS.SET_SELECTED_POST:
      return { ...state, selectedPost: action.payload }
    default:
      return state
  }
}
