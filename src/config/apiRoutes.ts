const baseURL = process.env.REACT_APP_ENDPOINT || 'http://localhost:5000'
const postsApi = baseURL + '/api/posts'
const usersApi = baseURL + '/api/users'

export { baseURL, postsApi, usersApi }
