import { useState, useEffect } from 'react'
import useOutSideRef from '../hooks/useOutSideRef'
import * as stockPagesApi from '../api/stockPages'

import StockPageWrapper from './StockPageWrapper'
import Dropdown from '../components/UI/Dropdown'

function StockBySheet() {
  const [typeRef, isTypeOpen, setIsTypeOpen] = useOutSideRef(false)
  const [patternRef, isPatternOpen, setIsPatternOpen] = useOutSideRef(false)
  const [selected, setSelected] = useState({
    type: '선택하세요.',
    pattern: '선택하세요.'
  })
  const [dropdownContents, setDropdownContents] = useState({
    type: {
      key: 'type',
      title: '재질',
      text: []
    },
    pattern: {
      key: 'pattern',
      title: '패턴',
      text: []
    }
  })

  useEffect(() => {
    stockPagesApi.getTypeDropdown().then((res) =>
      setDropdownContents((prev) => ({
        ...prev,
        type: { ...prev.type, text: ['전체', ...res.data] }
      })).catch((err) => console.error(err))
    )
  }, [])

  useEffect(() => {
    if (selected.type === '전체') {
      return setSelected((prev) => ({ ...prev, pattern: '선택하세요.' }))
    }
    stockPagesApi
      .getPatternDropdown(selected.type)
      .then((res) =>
        setDropdownContents((prev) => ({
          ...prev,
          pattern: { ...prev.pattern, text: ['전체', ...res.data] }
        }))
      )
      .then(() => setSelected((prev) => ({ ...prev, pattern: '선택하세요.' })))
      .catch((err) => console.error(err))
  }, [selected.type])

  const selectOption = (data, key) => {
    setSelected((prev) => ({ ...prev, [key]: data }))
  }

  const typeIsSelected =
    selected.type !== '선택하세요.' && selected.type !== '전체'

  return (
    <StockPageWrapper selected={selected}>
      <div className="mb-7 flex">
        <div className="pr-6">
          <Dropdown
            outsideRef={typeRef}
            isOpen={isTypeOpen}
            setIsOpen={setIsTypeOpen}
            content={dropdownContents.type}
            selected={selected.type}
            selectOption={selectOption}
          />
        </div>
        {typeIsSelected && (
          <Dropdown
            outsideRef={patternRef}
            isOpen={isPatternOpen}
            setIsOpen={setIsPatternOpen}
            content={dropdownContents.pattern}
            selected={selected.pattern}
            selectOption={selectOption}
          />
        )}
      </div>
    </StockPageWrapper>
  )
}

export default StockBySheet
