import { PATHNAME } from '../static/constant'
import http from './http'

export function getStockOnPage(pathname, selected) {
  if (pathname === PATHNAME.storage) {
    const storage =
      selected === '선택하세요.' || selected === '전체' ? '' : `/${selected}`
    return http.get(`stock${pathname}${storage}`)
  }

  if (pathname === PATHNAME.sheet) {
    const type =
      selected.type === '선택하세요.' || selected.type === '전체'
        ? ''
        : selected.type
    const pattern =
      selected.pattern === '선택하세요.' || selected.pattern === '전체'
        ? ''
        : selected.pattern
    return http.get(`stock${pathname}?type=${type}&pattern=${pattern}`)
  }
}

export function getTypeDropdown() {
  return http.get('/dropdown/type')
}
export function getPatternDropdown(type) {
  return http.get(`/dropdown/pattern/${type}`)
}
export function getStorageDropdown() {
  return http.get('/dropdown/storage')
}
