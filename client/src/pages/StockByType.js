import axios from 'axios'
import { useRef, useEffect, useState } from 'react'
import Dropdown from '../components/Dropdown'
import Tab from '../components/Tab'
import Table from '../components/Table'
import { DROPDOWN_CONTENT } from '../static/constant'

function StockByType() {
  const outsideRef = useOutSideRef(null)
  const [isOpen, setIsOpen] = useState(false)
  const { REACT_APP_BASIC_URL } = process.env

  useEffect(() => {
    axios
      .get(`${REACT_APP_BASIC_URL}/stock/storage`)
      .then((res) => console.log(res))
  }, [REACT_APP_BASIC_URL])

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
          content={DROPDOWN_CONTENT.type}
        />
      </div>
      <Table />
    </>
  )
}

export default StockByType
