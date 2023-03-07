import { useLocation } from 'react-router-dom'

import StockTableHead from './StockTableHead'
import StockTableBody from './StockTableBody'

function StockTable({ tableContents }) {
  const { pathname } = useLocation()

  return (
    <table className="border border-slate-400 w-full cursor-default">
      <StockTableHead pathname={pathname} />
      <StockTableBody pathname={pathname} tableContents={tableContents} />
    </table>
  )
}

export default StockTable
