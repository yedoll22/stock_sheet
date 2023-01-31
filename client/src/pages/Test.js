import axios from 'axios'
import React, { useEffect } from 'react'
const { REACT_APP_SERVER } = process.env

function Test() {
  useEffect(() => {
    axios.get(`${REACT_APP_SERVER}/stock`).then((res) => console.log(res))
  }, [])

  return <div>Test</div>
}

export default Test
