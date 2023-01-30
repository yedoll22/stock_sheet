import React from 'react'
import { dummy } from '../static/dummy'
import Tr from './Tr'

function TableBody({ pathname }) {
  return (
    <tbody>
      {dummy.map((tr) => (
        <Tr key={tr.id} pathname={pathname} rowContents={tr} />
      ))}
    </tbody>
  )
}

export default TableBody
