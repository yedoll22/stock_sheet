import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { PATHNAME, TAB } from '../../static/constant'

import StockManagement from '../StockManagement/StockManagement'

function Tab() {
  const { pathname } = useLocation()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const getTabStyle = (active) => {
    const basic = 'sm:inline-block pl-14 pr-14 pt-3 pb-3 block font-extrabold'
    if (active === pathname) {
      return `${basic} bg-[#074073] text-white`
    }
    return basic
  }

  const handleToggleModal = () => {
    setIsModalOpen((prevState) => !prevState)
  }

  return (
    <nav className="flex justify-between items-center mb-7">
      <div className="border border-[#074073]">
        <Link
          to={`${PATHNAME.sheet}`}
          className={`${getTabStyle(PATHNAME.sheet)}`}
        >
          {TAB.type}
        </Link>
        <Link
          to={`${PATHNAME.storage}`}
          className={`${getTabStyle(PATHNAME.storage)}`}
        >
          {TAB.storage}
        </Link>
      </div>
      <div className="flex justify-center items-center ml-[20px] w-[64px] h-[64px] bg-[#D2D904] text-white text-5xl font-semibold rounded-full cursor-pointer">
        <span onClick={handleToggleModal}>＋</span>
      </div>
      {isModalOpen && <StockManagement handleToggle={handleToggleModal} />}
    </nav>
  )
}

export default Tab
