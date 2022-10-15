import React, { useEffect, useState } from 'react'

export default function Clock() {
  let [time, setTime] = useState(new Date().toLocaleTimeString())

  useEffect(()=> {
    setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
  })

  return (
    <div>
        <h1>안녕, 리액트!</h1>
        <h2>현재 시간: {time}</h2>
    </div>
  )
}
