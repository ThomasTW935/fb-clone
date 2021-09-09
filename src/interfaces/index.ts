interface IUser {
  _id: string
  active: boolean
  first_name: string
  last_name: string
}
enum EReact {
  Like = 'like',
  Heart = 'heart',
}
interface IReaction {
  user: IUser
  react: EReact
}
interface IPost {
  privacy: string
  content: string
  _id: string
  createdAt: string
  user: IUser
  reactions: IReaction[]
}

interface IUserData {
  first_name: string
  last_name: string
  email: string
  password: string
}

export type { IUser, IPost, IUserData, EReact, IReaction }
