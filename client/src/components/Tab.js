import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { PATHNAME, TAB } from '../static/constant'

import Modal from './Modal'

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

  const handleToggleModal = (e) => {
    const { target, currentTarget } = e
    if (target !== currentTarget) return
    setIsModalOpen((prevState) => !prevState)
  }

  return (
    <nav className="flex justify-between items-center mb-7">
      <div className="border border-[#074073]">
        <Link
          to={`${PATHNAME.type}`}
          className={`${getTabStyle(PATHNAME.type)}`}
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
      {isModalOpen && (
        <Modal isOpen={isModalOpen} handleToggle={handleToggleModal} />
      )}
    </nav>
  )
}

export default Tab
