import axios from 'axios'

const { REACT_APP_BASIC_URL } = process.env

const instance = axios.create({
  baseURL: REACT_APP_BASIC_URL
})

export default instance
