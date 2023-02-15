import React from 'react'
import { PATHNAME, THEAD } from '../static/constant'
import Th from './Th'

function TableHead({ pathname }) {
  const { type, pattern, standard, quantity, storage } = THEAD

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

  return (
    <thead>
      <tr>
        {checkPathname(pathname).map((th) => (
          <Th key={th} tableHeader={th} />
        ))}
      </tr>
    </thead>
  )
}

export default TableHead
