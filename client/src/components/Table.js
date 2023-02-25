import { useLocation } from 'react-router-dom'

import TableBody from './TableBody'
import TableHead from './TableHead'

function Table({ tableContents }) {
  const { pathname } = useLocation()

  return (
    <table className="border border-slate-400 w-full cursor-default">
      <TableHead pathname={pathname} />
      <TableBody pathname={pathname} tableContents={tableContents} />
    </table>
  )
}

export default Table
