// import axios from 'axios'
import { useState, useCallback } from 'react'
import Dropdown from '../components/Dropdown'
import Tab from '../components/Tab'
import Table from '../components/Table'
import { DROPDOWN_CONTENT } from '../static/constant'
import useOutSideRef from '../util/useOutSideRef'

function StockByType() {
  const [outsideRef, isOpen, setIsOpen] = useOutSideRef(false)
  const [selected, setSelected] = useState('선택하세요.')

  // const { REACT_APP_BASIC_URL } = process.env

  // useEffect(() => {
  //   axios
  //     .get(`${REACT_APP_BASIC_URL}/stock/storage`)
  //     .then((res) => console.log(res))
  // }, [REACT_APP_BASIC_URL])

  const selectOption = useCallback((data) => {
    setSelected(data)
  }, [])

  return (
    <>
      <Tab />
      <div className="mb-7">
        <Dropdown
          outsideRef={outsideRef}
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          content={DROPDOWN_CONTENT.type}
          selected={selected}
          selectOption={selectOption}
        />
      </div>
      <Table />
    </>
  )
}

export default StockByType
