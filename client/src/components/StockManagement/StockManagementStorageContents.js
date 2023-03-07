import Dropdown from '../UI/Dropdown'

function StockManagementStorageContents({ dropdownMappings, selectOption }) {
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
    </>
  )
}

export default StockManagementStorageContents
