import { useMemo } from 'react'
import { THEAD } from '../../static/constant'
import { useTableValue } from '../../store/useTable'
import changeByTableByPathname from '../../util/changeByTableByPathname'

function StockTableHead() {
  const { pathname } = useTableValue()

  const changableTableHeaders = useMemo(
    () => changeByTableByPathname(pathname, THEAD),
    [pathname]
  )

  return (
    <thead>
      <tr>
        {changableTableHeaders.map((tableHeader) => (
          <th key={tableHeader} className="border border-slate-300 pt-2 pb-2">
            {tableHeader}
          </th>
        ))}
      </tr>
    </thead>
  )
}

export default StockTableHead
