import http from './http'

export function stockIn(date, category, type, pattern, quantity, storageName) {
  return http.post('/stock', {
    date,
    category,
    type,
    pattern,
    quantity,
    storageName
  })
}

export function stockOut(date, category, type, pattern, quantity, storageName) {
  return http.post('/stock', {
    date,
    category,
    type,
    pattern,
    quantity,
    storageName
  })
}

export function stockMove(
  date,
  category,
  type,
  pattern,
  quantity,
  oldStorageName,
  storageName
) {
  return http.post('/stock', {
    date,
    category,
    type,
    pattern,
    quantity,
    oldStorageName,
    storageName
  })
}

export function getTypeStorageDropdown() {
  const type = http.get('/dropdown/type')
  const storeage = http.get('/dropdown/storage')
  return Promise.all([type, storeage])
}

export function getPatternDropdown(type) {
  return http.get(`/dropdown/pattern/${type}`)
}
