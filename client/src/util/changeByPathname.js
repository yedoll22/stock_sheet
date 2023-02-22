import { PATHNAME } from '../static/constant'

const changeByPathname = (pathname, content) => {
  const { type, pattern, standard, quantity, storage } = content
  switch (pathname) {
    case PATHNAME.storage:
      return [storage, pattern, standard, quantity, type]
    default:
      return [type, pattern, standard, quantity, storage]
  }
}

export default changeByPathname
