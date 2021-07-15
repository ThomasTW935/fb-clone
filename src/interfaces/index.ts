interface IUser {
  _id: string
  active: boolean
  name: string
}
interface IPost {
  privacy: string
  content: string
  _id: string
  createdAt: string
  user: IUser
}

export type { IUser, IPost }
