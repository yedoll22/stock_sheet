import http from './http'

export function getStockOnPage(path, selected) {
  if (selected === '선택하세요.' || selected === '전체') {
    return http.get(`stock/${path}`)
  }
  return http.get(`stock/${path}/${selected}`)
}
