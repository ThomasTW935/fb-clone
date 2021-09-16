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
  _id: string
  privacy: string
  user: IUser
  content: string
  image: string
  reactions: IReaction[]
  createdAt: string
}

interface IUserData {
  first_name: string
  last_name: string
  email: string
  password: string
}

export type { IUser, IPost, IUserData, EReact, IReaction }
