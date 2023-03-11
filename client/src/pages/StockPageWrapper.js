import { useEffect } from 'react'
import { useTableActions, useTableValue } from '../store/useTable'
import * as stockPagesApi from '../api/stockPages'
import addThousandsCommaInTableData from '../util/addThousandsCommaInTableData'

import Tab from '../components/Tab/Tab'
import Table from '../components/StockTable/StockTable'

function StockPageWrapper({ children, selected }) {
  const { pathname } = useTableValue()
  const { search } = useTableActions()

  useEffect(() => {
    stockPagesApi
      .getStockOnPage(pathname, selected)
      .then((res) => {
        const tableData = addThousandsCommaInTableData(res.data)
        search(tableData)
      })
      .catch((err) => console.error(err))
  }, [pathname, selected, search])

  return (
    <>
      <Tab />
      {children}
      <Table />
    </>
  )
}

export default StockPageWrapper
