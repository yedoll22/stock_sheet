import { useState } from 'react'
import { DROPDOWN_CONTENT } from '../static/constant'
import useOutSideRef from '../util/useOutSideRef'
import Dropdown from './Dropdown'

function Modal({ toggleModal }) {
  const { category, type, pattern, quantity, storage } = DROPDOWN_CONTENT
  const [isStockMove, setIsStockMove] = useState(false)

  const [categoryRef, isCategoryOpen, setIsCategoryOpen] = useOutSideRef(false)
  const [typeRef, isTypeOpen, setIsTypeOpen] = useOutSideRef(false)
  const [patternRef, isPatternOpen, setIsPatternOpen] = useOutSideRef(false)
  const [quantityRef, isQuantityOpen, setIsQuantityOpen] = useOutSideRef(false)
  const [storageRef, isStorageRef, setIsStorageOpen] = useOutSideRef(false)

  const dropdownMappingArr = [
    {
      outsideRef: typeRef,
      isOpen: isTypeOpen,
      setIsOpen: setIsTypeOpen,
      content: type
    },
    {
      outsideRef: patternRef,
      isOpen: isPatternOpen,
      setIsOpen: setIsPatternOpen,
      content: pattern
    },
    {
      outsideRef: quantityRef,
      isOpen: isQuantityOpen,
      setIsOpen: setIsQuantityOpen,
      content: quantity
    },
    {
      outsideRef: storageRef,
      isOpen: isStorageRef,
      setIsOpen: setIsStorageOpen,
      content: storage
    }
  ]

  const handleClickModal = (e) => {
    e.stopPropagation()

    for (let i = 0; i < Object.keys(DROPDOWN_CONTENT).length - 1; i++) {
      if (dropdownMappingArr[i].isOpen) {
        dropdownMappingArr[i].setIsOpen(false)
      } else if (isCategoryOpen) {
        setIsCategoryOpen(false)
      }
    }
  }

  const checkIsStockMove = (data) => {
    // 🐹 setter 함수에 의한 상태 변화 반영 속도 고려 => 추후 필요 시, 동기처리 할 것
    if (data === '재고 이동') {
      return setIsStockMove(true)
    }
    return setIsStockMove(false)
  }

  return (
    <div
      className="fixed inset-0 flex justify-center items-center z-10 bg-modalBg"
      onClick={toggleModal}
    >
      <div
        className="px-6 py-8 bg-white rounded-md min-w-[30rem]"
        onClick={handleClickModal}
      >
        {/* Dropdown이랑 margin 중첩돼있음 */}
        <div className="mb-10">
          <span>일자</span>
          <Dropdown
            outsideRef={categoryRef}
            isOpen={isCategoryOpen}
            setIsOpen={setIsCategoryOpen}
            content={category}
          />
        </div>
        {!isStockMove && (
          <div className="grid grid-cols-2 md:grid-cols-4 md:gap-4">
            {dropdownMappingArr.map((obj, i) => (
              <Dropdown
                key={i}
                outsideRef={obj.outsideRef}
                isOpen={obj.isOpen}
                setIsOpen={obj.setIsOpen}
                content={obj.content}
                checkIsStockMove={checkIsStockMove}
              />
            ))}
          </div>
        )}
        {isStockMove && <div></div>}
      </div>
    </div>
  )
}

export default Modal
