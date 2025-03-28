import { useState } from '@lynx-js/react'

import './App.css'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <view class='Background'>
      <view class='counter' bindtap={() => setCount(count + 1)}>
        <text class='count' style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>{count}</text>
      </view>
    </view>
  )
}
