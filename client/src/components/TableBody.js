import React from 'react'
import Tr from './Tr'

function TableBody({ pathname, tableContents }) {
  return (
    <tbody>
      {tableContents.map((rowContents, i) => (
        <Tr key={i} pathname={pathname} rowContents={rowContents} />
      ))}
    </tbody>
  )
}

export default TableBody
