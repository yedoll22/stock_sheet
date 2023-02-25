import { memo } from 'react'
import Dropdown from './Dropdown'

function ModalStorageContents({ dropdownMappings, selectOption }) {
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

export default memo(ModalStorageContents)
