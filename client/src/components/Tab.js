import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { PATHNAME, TAB } from '../static/constant'

function Tab() {
  const { pathname } = useLocation()

  const getTabStyle = (active) => {
    const basic = 'sm:inline-block pl-14 pr-14 pt-3 pb-3 block font-extrabold'
    if (active === pathname) {
      return `${basic} bg-[#074073] text-white`
    }
    return basic
  }

  return (
    <nav className="flex justify-between items-center mb-3">
      <div className="border border-[#074073]">
        <Link
          to={`${PATHNAME.TYPE}`}
          className={`${getTabStyle(PATHNAME.TYPE)}`}
        >
          {TAB.TYPE}
        </Link>
        <Link
          to={`${PATHNAME.STORAGE}`}
          className={`${getTabStyle(PATHNAME.STORAGE)}`}
        >
          {TAB.STORAGE}
        </Link>
      </div>
      <div className="flex justify-center items-center ml-[20px] w-[64px] h-[64px] bg-[#D2D904] text-white text-5xl font-semibold rounded-full cursor-pointer">
        <span>＋</span>
      </div>
    </nav>
  )
}

export default Tab
