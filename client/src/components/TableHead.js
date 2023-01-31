import React from 'react'
import { PATHNAME, THEAD } from '../static/constant'
import Th from './Th'

function TableHead({ pathname }) {
  const { TYPE, PATTERN, STANDARD, QUANTITY, STORAGE } = THEAD

  const checkPathname = (pathname) => {
    switch (pathname) {
      case PATHNAME.TYPE:
        return [TYPE, PATTERN, STANDARD, QUANTITY, STORAGE]
      case PATHNAME.STORAGE:
        return [STORAGE, PATTERN, STANDARD, QUANTITY, TYPE]
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
