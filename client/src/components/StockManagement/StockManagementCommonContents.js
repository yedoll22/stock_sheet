import Dropdown from '../UI/Dropdown'

function StockManagementCommonContents({
  inputValue,
  handleChangeInput,
  dropdownMappings,
  selectOption
}) {
  return (
    <>
      {dropdownMappings.map((mapping, i) => (
        <Dropdown
          key={i}
          outsideRef={mapping.outsideRef}
          isOpen={mapping.isOpen}
          setIsOpen={mapping.setIsOpen}
          content={mapping.content}
          selected={mapping.selected}
          selectOption={selectOption}
        />
      ))}
      <div>
        <span className="font-bold mr-3">수량</span>
        <input
          className="border border-[#D5DBE2] rounded h-7 w-[128px] pl-3 py-1 text-right"
          type="text"
          value={inputValue}
          onChange={handleChangeInput}
        />
      </div>
    </>
  )
}

export default StockManagementCommonContents
