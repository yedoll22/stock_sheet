import { useRef, useEffect, useState } from 'react'
import Dropdown from '../components/Dropdown'
import Tab from '../components/Tab'
import Table from '../components/Table'

function StockByType() {
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
      <div className="mb-3">
        <Dropdown
          outsideRef={outsideRef}
          setIsOpen={setIsOpen}
          isOpen={isOpen}
        />
      </div>
      <Table />
    </>
  )
}

export default StockByType
