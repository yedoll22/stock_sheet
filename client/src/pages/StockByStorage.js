import { useState, useCallback, useEffect } from 'react'
import { DROPDOWN_CONTENT } from '../static/constant'
import useOutSideRef from '../util/useOutSideRef'
import * as stockPagesApi from '../api/stockPages'

import Dropdown from '../components/Dropdown'
import Tab from '../components/Tab'
import Table from '../components/Table'

function StockByStorage() {
  const [outsideRef, isOpen, setIsOpen] = useOutSideRef(false)
  const [selected, setSelected] = useState('선택하세요.')

  useEffect(() => {
    stockPagesApi
      .getAllStock('sheet')
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err))
  }, [])

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
          content={DROPDOWN_CONTENT.storage}
          selected={selected}
          selectOption={selectOption}
        />
      </div>
      <Table />
    </>
  )
}

export default StockByStorage
