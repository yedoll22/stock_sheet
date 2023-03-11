import StockTableHead from './StockTableHead'
import StockTableBody from './StockTableBody'

function StockTable() {
  return (
    <table className="border border-slate-400 w-full cursor-default">
      <StockTableHead />
      <StockTableBody />
    </table>
  )
}

export default StockTable
