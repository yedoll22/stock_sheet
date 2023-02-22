import { useMemo } from 'react'
import { THEAD } from '../static/constant'
import changeByPathname from '../util/changeByPathname'

import Th from './Th'

function TableHead({ pathname }) {
  const content = useMemo(() => changeByPathname(pathname, THEAD), [pathname])

  return (
    <thead>
      <tr>
        {content.map((th) => (
          <Th key={th} tableHeader={th} />
        ))}
      </tr>
    </thead>
  )
}

export default TableHead
