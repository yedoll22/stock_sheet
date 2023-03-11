import { useState, useEffect } from 'react'
import useOutSideRef from '../hooks/useOutSideRef'
import * as stockPagesApi from '../api/stockPages'

import Dropdown from '../components/UI/Dropdown'
import StockPageWrapper from './StockPageWrapper'

function StockByStorage() {
  const [outsideRef, isOpen, setIsOpen] = useOutSideRef(false)
  const [selected, setSelected] = useState('선택하세요.')
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
      })).catch((err) => console.error(err))
    )
  }, [])

  const selectOption = (data) => {
    setSelected(data)
  }

  return (
    <StockPageWrapper selected={selected}>
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
    </StockPageWrapper>
  )
}

export default StockByStorage
