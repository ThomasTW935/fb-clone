import { useContext, createContext, Dispatch } from 'react'
import { IPost, EReact, IUser } from '../interfaces'

export enum POST_ACTIONS {
  SET_POSTS = 'set-posts',
  ADD_POST = 'add-post',
  UPDATE_POST = 'update-post',
  SET_SELECTED_POST = 'set-selected-post',
  DELETE_POST = 'delete-post',
  ADD_REACT = 'add-react',
  UPDATE_REACT = 'update-react',
  REMOVE_REACT = 'remove-react',
}

type Reducer<TState, TAction> = (state: TState, action: TAction) => TState

type TState = {
  posts: IPost[]
  selectedPost: string
}

type TAction =
  | { type: POST_ACTIONS.SET_POSTS; payload: IPost[] }
  | { type: POST_ACTIONS.ADD_POST; payload: IPost }
  | { type: POST_ACTIONS.UPDATE_POST; payload: IPost }
  | { type: POST_ACTIONS.SET_SELECTED_POST; payload: string }
  | { type: POST_ACTIONS.DELETE_POST; payload: string }
  | {
      type: POST_ACTIONS.ADD_REACT
      payload: { postId: string; react: EReact; user: IUser }
    }
  | {
      type: POST_ACTIONS.UPDATE_REACT
      payload: { postId: string; userId: string; react: EReact }
    }
  | {
      type: POST_ACTIONS.REMOVE_REACT
      payload: { postId: string; userId: string }
    }

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
    case POST_ACTIONS.UPDATE_POST:
      return {
        ...state,
        posts: state.posts.map((post) => {
          if (post._id !== action.payload._id) return post
          return action.payload
        }),
      }
    case POST_ACTIONS.DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== action.payload),
      }
    case POST_ACTIONS.ADD_REACT:
      return {
        ...state,
        posts: state.posts.map((post) => {
          if (post._id !== action.payload.postId) return post
          return {
            ...post,
            reactions: [
              ...post.reactions,
              { react: action.payload.react, user: action.payload.user },
            ],
          }
        }),
      }
    case POST_ACTIONS.UPDATE_REACT:
      return {
        ...state,
        posts: state.posts.map((post) => {
          if (post._id !== action.payload.postId) return post
          return {
            ...post,
            reactions: post.reactions.map((reaction) => {
              if (reaction.user._id !== action.payload.userId) return reaction
              return { ...reaction, react: action.payload.react }
            }),
          }
        }),
      }
    case POST_ACTIONS.REMOVE_REACT:
      return {
        ...state,
        posts: state.posts.map((post) => {
          if (post._id !== action.payload.postId) return post
          return {
            ...post,
            reactions: post.reactions.filter(
              (reaction) => reaction.user._id !== action.payload.userId
            ),
          }
        }),
      }
    default:
      return state
  }
}
