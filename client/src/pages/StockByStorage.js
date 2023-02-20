import { useRef, useEffect, useState } from 'react'
import Dropdown from '../components/Dropdown'
import Tab from '../components/Tab'
import Table from '../components/Table'
import { DROPDOWN_CONTENT } from '../static/constant'

function StockByStorage() {
  const outsideRef = useOutSideRef(null)
  const [isOpen, setIsOpen] = useState(false)

  function useOutSideRef() {
    const ref = useRef(null)

    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setIsOpen(false)
        }
      }
      document.addEventListener('click', handleClickOutside)

      return () => {
        document.removeEventListener('click', handleClickOutside)
      }
    })

    return ref
  }

  return (
    <>
      <Tab />
      <div className="mb-7">
        <Dropdown
          outsideRef={outsideRef}
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          content={DROPDOWN_CONTENT.storage}
        />
      </div>
      <Table />
    </>
  )
}

export default StockByStorage
