import { useState, useCallback, useEffect } from 'react'
import { PAGE_DROPDOWN_CONTENT } from '../static/constant'
import useOutSideRef from '../hooks/useOutSideRef'
import * as stockPagesApi from '../api/stockPages'
import addThousandsCommaInTableData from '../util/addThousandsCommaInTableData'

import Dropdown from '../components/Dropdown'
import Tab from '../components/Tab'
import Table from '../components/Table'

function StockByStorage() {
  const [outsideRef, isOpen, setIsOpen] = useOutSideRef(false)
  const [selected, setSelected] = useState('선택하세요.')
  const [tableContents, setTableContents] = useState([])

  useEffect(() => {
    stockPagesApi
      .getStockOnPage('storage', selected)
      .then((res) => {
        const tableData = addThousandsCommaInTableData(res.data)
        setTableContents(tableData)
      })
      .catch((err) => console.error(err))
  }, [selected])

  const selectOption = useCallback((data) => {
    setSelected(data)
  }, [])

  return (
    <>
      <Tab />
      <div className="mb-7">
        <Dropdown
          outsideRef={outsideRef}
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          content={PAGE_DROPDOWN_CONTENT.storage}
          selected={selected}
          selectOption={selectOption}
        />
      </div>
      <Table tableContents={tableContents} />
    </>
  )
}

export default StockByStorage
