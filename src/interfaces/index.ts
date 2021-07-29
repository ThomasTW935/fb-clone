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

export type { IUser, IPost }
