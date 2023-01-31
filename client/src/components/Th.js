import React from 'react'

function Th({ tableHeader }) {
  console.log('Th rendering test')

  return <th className="border border-slate-300 pt-2 pb-2">{tableHeader}</th>
}

export default Th
