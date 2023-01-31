import React from 'react'
import { useLocation } from 'react-router-dom'

import TableBody from './TableBody'
import TableHead from './TableHead'

function Table() {
  const { pathname } = useLocation()

  return (
    <table className="border border-slate-400 w-full">
      <TableHead pathname={pathname} />
      <TableBody pathname={pathname} />
    </table>
  )
}

export default Table
