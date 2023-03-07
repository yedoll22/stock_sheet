import { useCallback, useEffect, useState } from 'react'
import { ERROR_MSG, CATEGORY_DROPDOWN_CONTENTS } from '../../static/constant'
import useOutSideRef from '../../hooks/useOutSideRef'
import * as stockModalApi from '../../api/stockModal'

import StockManagementUpperContents from './StockManagementUpperContents'
import StockManagementCommonContents from './StockManagementCommonContents'
import StockManagementStorageContents from './StockManagementStorageContents'
import StockManagementButtons from './StockManagementButtons'

function StockManagement({ handleToggle }) {
  const today = `${new Date().getFullYear()}-${String(
    new Date().getMonth() + 1
  ).padStart(2, '0')}-${String(new Date().getDate()).padStart(2, '0')}`

  const [selected, setSelected] = useState({
    category: '선택하세요.',
    type: '선택하세요.',
    pattern: '선택하세요.',
    storage: '선택하세요.',
    storageFrom: '선택하세요.',
    storageTo: '선택하세요.'
  })
  const { category, type, pattern, storage, storageFrom, storageTo } = selected

  const [date, setDate] = useState(today)
  const [quantityStr, setQuantityStr] = useState('')
  const [isStockMoveSelected, setIsStockMoveSelected] = useState(false)
  const [errorMsg, setErrorMsg] = useState(null)

  const [, isCategoryOpen, setIsCategoryOpen] = useOutSideRef(false)
  const [typeRef, isTypeOpen, setIsTypeOpen] = useOutSideRef(false)
  const [patternRef, isPatternOpen, setIsPatternOpen] = useOutSideRef(false)
  const [storageRef, isStorageOpen, setIsStorageOpen] = useOutSideRef(false)
  const [storageFromRef, isStorageFromOpen, setIsStorageFromOpen] =
    useOutSideRef(false)
  const [storageToRef, isStorageToOpen, setIsStorageToOpen] =
    useOutSideRef(false)

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
    },
    storage: {
      key: 'storage',
      title: '위치',
      text: []
    },
    storageFrom: {
      key: 'storageFrom',
      title: '보관 위치',
      text: []
    },
    storageTo: {
      key: 'storageTo',
      title: '이동 위치',
      text: []
    }
  })

  useEffect(() => {
    stockModalApi.getTypeStorageDropdown().then((res) => {
      const [typeRes, storageRes] = res
      setDropdownContents((prev) => ({
        ...prev,
        type: { ...prev.type, text: typeRes.data },
        storage: { ...prev.storage, text: storageRes.data },
        storageFrom: { ...prev.storageFrom, text: storageRes.data },
        storageTo: { ...prev.storageTo, text: storageRes.data }
      }))
    })
  }, [])

  useEffect(() => {
    if (type === '선택하세요.') return
    stockModalApi
      .getPatternDropdown(type)
      .then((res) =>
        setDropdownContents((prev) => ({
          ...prev,
          pattern: { ...prev.pattern, text: res.data }
        }))
      )
      .then(() => setSelected((prev) => ({ ...prev, pattern: '선택하세요.' })))
  }, [type])

  const commonDropdownMappings = [
    {
      outSideRef: typeRef,
      selected: type,
      isOpen: isTypeOpen,
      setIsOpen: setIsTypeOpen,
      content: dropdownContents.type
    },
    {
      outSideRef: patternRef,
      selected: pattern,
      isOpen: isPatternOpen,
      setIsOpen: setIsPatternOpen,
      content: dropdownContents.pattern
    }
  ]

  const storageDropdownMappings = isStockMoveSelected
    ? [
        {
          outSideRef: storageFromRef,
          selected: storageFrom,
          isOpen: isStorageFromOpen,
          setIsOpen: setIsStorageFromOpen,
          content: dropdownContents.storageFrom
        },
        {
          outSideRef: storageToRef,
          selected: storageTo,
          isOpen: isStorageToOpen,
          setIsOpen: setIsStorageToOpen,
          content: dropdownContents.storageTo
        }
      ]
    : [
        {
          outSideRef: storageRef,
          selected: storage,
          isOpen: isStorageOpen,
          setIsOpen: setIsStorageOpen,
          content: dropdownContents.storage
        }
      ]

  const handleClickModalView = (e) => {
    e.stopPropagation()
    if (isCategoryOpen) {
      setIsCategoryOpen(false)
    } else if (isTypeOpen) {
      setIsTypeOpen(false)
    } else if (isPatternOpen) {
      setIsPatternOpen(false)
    } else if (isStorageOpen) {
      setIsStorageOpen(false)
    } else if (isStorageFromOpen) {
      setIsStorageFromOpen(false)
    } else if (isStorageToOpen) {
      setIsStorageToOpen(false)
    }
  }

  const handleChangeDate = (e) => setDate(e.target.value)
  const handleChangeQuantity = (e) => {
    const removedCommaValue = e.target.value.replaceAll(',', '')
    const numberValue = Number(removedCommaValue)
    if (isNaN(numberValue)) return
    setQuantityStr(removedCommaValue.toLocaleString())
  }

  const checkIsStockMoveSelected = useCallback((selected) => {
    if (selected === '재고 이동') {
      return setIsStockMoveSelected(true)
    }
    return setIsStockMoveSelected(false)
  }, [])

  const selectOption = useCallback(
    (data, key) => {
      if (key === CATEGORY_DROPDOWN_CONTENTS.key) {
        checkIsStockMoveSelected(data)
        setSelected({
          category: data,
          type: '선택하세요.',
          pattern: '선택하세요.',
          storage: '선택하세요.',
          storageFrom: '선택하세요.',
          storageTo: '선택하세요.'
        })
        setQuantityStr('')
        setErrorMsg(null)
      } else {
        setSelected((prev) => ({ ...prev, [key]: data }))
      }
    },
    [checkIsStockMoveSelected]
  )

  const hasDropdownError = () => {
    const copyedSelected = selected
    if (category === '재고 이동') {
      delete copyedSelected.storage
    } else {
      delete copyedSelected.storageFrom
      delete copyedSelected.storageTo
    }
    for (const props in copyedSelected) {
      if (selected[props] === '선택하세요.') {
        setErrorMsg(ERROR_MSG.dropdown)
        return true
      }
    }
    return false
  }

  const hasQuantityError = (quantityNum) => {
    let hasError = false
    if (category === '출고' && quantityNum > 0) {
      setErrorMsg(ERROR_MSG.positiveQuantity)
      hasError = true
    }
    if (category !== '출고' && quantityNum < 0) {
      setErrorMsg(ERROR_MSG.negativeQuantity)
      hasError = true
    }
    return hasError
  }

  const handleSubmitModal = () => {
    const storageName = storage
    const quantity = Number(quantityStr.replaceAll(',', ''))
    // submit 전에 체크 할 것
    // 출고 / 재고이동은 기존 수량을 체크하는 로직 필요 (마이너스 수량이 되지 않도록)
    if (hasDropdownError()) return
    if (hasQuantityError(quantity)) return

    // submit 한 뒤 화면상에서 실시간 state 업데이트가 안됨
    // => then chaining에서 setter 함수로 state 업데이트 해줘야됨
    // tableContents 배열 state, setter 함수를 가져와야 됨....ㅠㅠ
    if (category === '입고') {
      stockModalApi
        .stockIn(date, category, type, pattern, quantity, storageName)
        .then(() => handleToggle())
        .then((err) => console.error(err))
    }
    if (category === '출고') {
      stockModalApi
        .stockOut(date, category, type, pattern, quantity, storageName)
        .then(() => handleToggle())
        .then((err) => console.error(err))
    }
  }

  return (
    <div
      className="fixed inset-0 flex justify-center items-center z-10 bg-modalBg"
      onClick={handleToggle}
    >
      <div
        className="px-6 py-8 bg-white rounded-md min-w-[30rem]"
        onClick={handleClickModalView}
      >
        <div className="mb-10">
          <StockManagementUpperContents
            inputValue={date}
            handleChangeInput={handleChangeDate}
            isOpen={isCategoryOpen}
            setIsOpen={setIsCategoryOpen}
            selected={category}
            selectOption={selectOption}
          />
          <div
            className={`grid grid-cols-2 gap-4 ${
              isStockMoveSelected ? 'md:grid-cols-3' : 'md:grid-cols-4'
            } place-items-center`}
          >
            <StockManagementCommonContents
              inputValue={quantityStr}
              handleChangeInput={handleChangeQuantity}
              dropdownMappings={commonDropdownMappings}
              selectOption={selectOption}
            />
            <StockManagementStorageContents
              dropdownMappings={storageDropdownMappings}
              selectOption={selectOption}
            />
          </div>
        </div>
        <div className="text-center text-red-600">{errorMsg}</div>
        <StockManagementButtons
          handleSubmit={handleSubmitModal}
          handleToggle={handleToggle}
        />
      </div>
    </div>
  )
}

export default StockManagement
