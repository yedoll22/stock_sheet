import { useState, useCallback, useEffect } from 'react'
import { PATHNAME } from '../static/constant'

import * as stockPagesApi from '../api/stockPages'
import useOutSideRef from '../hooks/useOutSideRef'
import addThousandsCommaInTableData from '../util/addThousandsCommaInTableData'

import Dropdown from '../components/UI/Dropdown'
import Tab from '../components/Tab/Tab'
import StockTable from '../components/StockTable/StockTable'

function StockByStorage() {
  const [outsideRef, isOpen, setIsOpen] = useOutSideRef(false)
  const [selected, setSelected] = useState('선택하세요.')
  const [tableContents, setTableContents] = useState([])
  const [storageDropdownContents, setStorageDropdownContents] = useState({
    key: 'storage',
    title: '위치',
    text: []
  })

  useEffect(() => {
    stockPagesApi.getStorageDropdown().then((res) =>
      setStorageDropdownContents((prev) => ({
        ...prev,
        text: ['전체', ...res.data]
      }))
    )
  }, [])

  useEffect(() => {
    stockPagesApi
      .getStockOnPage(`${PATHNAME.storage}`, selected)
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
          content={storageDropdownContents}
          selected={selected}
          selectOption={selectOption}
        />
      </div>
      <StockTable tableContents={tableContents} />
    </>
  )
}

export default StockByStorage
