import { createContext } from 'react'

export const TableValueContext = createContext({
  pathname: '',
  tableDatas: []
})
export const TableActionsContext = createContext({
  search: (res) => {},
  update: (req) => {}
})
