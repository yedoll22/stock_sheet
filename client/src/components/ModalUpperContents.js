import { memo } from 'react'
import { MODAL_DROPDOWN_CONTENT } from '../static/constant'
import useOutSideRef from '../util/useOutSideRef'

import Dropdown from './Dropdown'

function ModalUpperContents({
  inputValue,
  handleChangeInput,
  isOpen,
  setIsOpen,
  selected,
  selectOption
}) {
  const [categoryRef] = useOutSideRef(false)

  return (
    <div className="mb-10">
      <div className="mb-2">
        <span className="font-bold mr-3">일자</span>
        <input
          className="border border-[#D5DBE2] rounded h-7 min-w-[8rem] pl-3 py-1"
          type="date"
          value={inputValue}
          onChange={handleChangeInput}
        />
      </div>
      <Dropdown
        outsideRef={categoryRef}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        content={MODAL_DROPDOWN_CONTENT.category}
        selected={selected}
        selectOption={selectOption}
      />
    </div>
  )
}

export default memo(ModalUpperContents)
