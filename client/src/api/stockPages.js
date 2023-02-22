import http from './http'

export function getAllStock(path) {
  return http.get(`stock/${path}`)
}
