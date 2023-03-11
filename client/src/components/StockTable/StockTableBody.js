import { useTableValue } from '../../store/useTable'
import StockTableRow from './StockTableRow'

function StockTable() {
  const { tableDatas } = useTableValue()

  return (
    <tbody>
      {tableDatas.map((rowContents, i) => (
        <StockTableRow key={i} rowContents={rowContents} />
      ))}
    </tbody>
  )
}

export default StockTable
