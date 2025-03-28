import { useEffect, useState } from '@lynx-js/react'

import './App.css'

export function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.info('Hello, ReactLynx')
  }, [])

  return (
    <view className='Background'>
      <view className='counter' bindtap={() => setCount(count + 1)}>
        <text className='count' style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>{count}</text>
      </view>
    </view>
  )
}
