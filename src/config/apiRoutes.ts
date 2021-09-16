const baseURL = process.env.REACT_APP_BACKEND_BASEURL || 'http://localhost:5000'
const postsApi = baseURL + '/api/posts'
const usersApi = baseURL + '/api/users'

export { baseURL, postsApi, usersApi }
