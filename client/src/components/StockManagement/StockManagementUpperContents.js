import { CATEGORY_DROPDOWN_CONTENTS } from '../../static/constant'
import useOutSideRef from '../../hooks/useOutSideRef'

import Dropdown from '../UI/Dropdown'

function StockManagementUpperContents({
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
        content={CATEGORY_DROPDOWN_CONTENTS}
        selected={selected}
        selectOption={selectOption}
      />
    </div>
  )
}

export default StockManagementUpperContents
