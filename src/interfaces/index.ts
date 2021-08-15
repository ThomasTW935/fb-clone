interface IUser {
  _id: string
  active: boolean
  first_name: string
  last_name: string
}
interface IPost {
  privacy: string
  content: string
  _id: string
  createdAt: string
  user: IUser
}

interface IUserData {
  first_name: string
  last_name: string
  email: string
  password: string
}

export type { IUser, IPost, IUserData }
