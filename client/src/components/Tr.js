import React from 'react'
import { PATHNAME } from '../static/constant'
import Td from './Td'

function Tr({ pathname, rowContents }) {
  const { type, pattern, standard, quantity, storage } = rowContents

  const checkPathname = (pathname) => {
    switch (pathname) {
      // case PATHNAME.type:
      //   return [type, pattern, standard, quantity, storage]
      case PATHNAME.storage:
        return [storage, pattern, standard, quantity, type]
      default:
        return [type, pattern, standard, quantity, storage]
    }
  }

  // storage 배열 풀어야 됨
  return (
    <tr>
      {checkPathname(pathname).map((td, i) => (
        <Td key={i} cellContents={td} />
      ))}
    </tr>
  )
}

export default Tr
