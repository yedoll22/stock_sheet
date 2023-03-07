import StockTableRow from './StockTableRow'

function StockTable({ pathname, tableContents }) {
  return (
    <tbody>
      {tableContents.map((rowContents, i) => (
        <StockTableRow key={i} pathname={pathname} rowContents={rowContents} />
      ))}
    </tbody>
  )
}

export default StockTable
