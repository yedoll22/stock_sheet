import { PATHNAME } from '../static/constant'

// 규격 => TableBody에서의 키 height, weight, TableHead에서의 키 size (변경 요청하기)
// 위치 => TableBody에서의 키 name, TableHead에서의 키 storage (변경 요청하기)
// 의미를 명확하게 하고 키를 통일해서 불필요한 코드 없앨 수 있도록!
const changeByTableByPathname = (pathname, content) => {
  const { storage, name, pattern, size, height, width, total, type } = content
  const isTableBody = size === undefined
  const standard = isTableBody ? `${String(height)}*${String(width)}` : size // 적절한 변수명을 모르겠음..
  const storageName = isTableBody ? name : storage

  switch (pathname) {
    case PATHNAME.storage: {
      return [storageName, pattern, standard, total, type]
    }
    default:
      return [type, pattern, standard, total, storageName]
  }
}

export default changeByTableByPathname
