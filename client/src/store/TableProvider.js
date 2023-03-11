import { useMemo, useReducer } from 'react'
import { useLocation } from 'react-router-dom'
import { TableActionsContext, TableValueContext } from './\btable-context'

const tableReducer = (state, action) => {
  switch (action.type) {
    case 'SEARCH':
      return action.res
    case 'UPDATE': {
      const existingDataIndexBySheet = state.findIndex(
        (data) =>
          data.type === action.req.type && data.pattern === action.req.pattern
      )
      const existingDataIndexByStorage = state.findIndex(
        (data) =>
          data.type === action.req.type &&
          data.pattern === action.req.pattern &&
          data.name === action.req.name
      )
      const existingDataIndex = action.req.storage
        ? existingDataIndexByStorage
        : existingDataIndexBySheet

      const existingData = state[existingDataIndex]
      let updatedDatas

      if (existingData) {
        const updatedData = {
          ...existingData,
          total: (
            Number(existingData.total.replaceAll(',', '')) + action.req.total
          ).toLocaleString()
        }
        updatedDatas = [...state]
        updatedDatas[existingDataIndex] = updatedData
      } else {
        updatedDatas = [
          { ...action.req, total: action.req.total.toLocaleString() },
          ...state
        ] // 정렬 로직 필요하다면 추가 (현재는 state에 객체가 새로 추가되면 제일 위로 가게 설정)
      }

      return updatedDatas
    }
    default:
      return state
  }
}

function TableProvider({ children }) {
  const { pathname } = useLocation()
  const [tableDatas, dispatchTableDatas] = useReducer(tableReducer, [])

  const searchTableData = (res) => {
    dispatchTableDatas({ type: 'SEARCH', res })
  }
  const updateTableData = (req) => {
    dispatchTableDatas({ type: 'UPDATE', req })
  }

  const tableValue = useMemo(
    () => ({
      pathname,
      tableDatas
    }),
    [pathname, tableDatas]
  )

  const tableActions = useMemo(
    () => ({
      search: searchTableData,
      update: updateTableData
    }),
    []
  )

  return (
    <TableValueContext.Provider value={tableValue}>
      <TableActionsContext.Provider value={tableActions}>
        {children}
      </TableActionsContext.Provider>
    </TableValueContext.Provider>
  )
}

export default TableProvider
