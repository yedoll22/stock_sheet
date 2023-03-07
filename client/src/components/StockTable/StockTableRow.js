import { useMemo } from 'react'
import changeByTableByPathname from '../../util/changeByTableByPathname'
import StockTableData from './StockTableData'

function StockTableRow({ pathname, rowContents }) {
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
