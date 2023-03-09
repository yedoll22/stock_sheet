import { useMemo } from 'react'
import { useTableValue } from '../../store/useTable'
import changeByTableByPathname from '../../util/changeByTableByPathname'
import StockTableData from './StockTableData'

function StockTableRow({ rowContents }) {
  const { pathname } = useTableValue()
  const changableRowContents = useMemo(
    () => changeByTableByPathname(pathname, rowContents),
    [pathname, rowContents]
  )

  return (
    <tr>
      {changableRowContents.map((cellContents, i) => (
        <StockTableData key={i} cellContents={cellContents} />
      ))}
    </tr>
  )
}

export default StockTableRow
