import http from './http'

export function stockIn(date, category, type, pattern, quantity, storageName) {
  console.log({
    date,
    category,
    type,
    pattern,
    quantity,
    storageName
  })
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
  console.log({
    date,
    category,
    type,
    pattern,
    quantity,
    storageName
  })
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
