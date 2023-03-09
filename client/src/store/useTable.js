import { useContext } from 'react'
import { TableActionsContext, TableValueContext } from './\btable-context'

export const useTableValue = () => {
  const value = useContext(TableValueContext)
  if (value === undefined) {
    throw new Error('useTableValue should be used within TableValueProvider')
  }
  return value
}

export const useTableActions = () => {
  const value = useContext(TableActionsContext)
  if (value === undefined) {
    throw new Error(
      'useTableActions should be used within TableActionsProvider'
    )
  }
  return value
}
