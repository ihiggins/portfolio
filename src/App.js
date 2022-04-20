import './App.css';
import { Nav } from './comps/nav';
import React, { useState, useRef } from 'react'
import clamp from 'lodash-es/clamp'
import { useSprings, animated, useSpringRef } from 'react-spring'
import { useGesture, useDrag } from '@use-gesture/react'
import Page2 from './comps/Page2';
import Page3 from './comps/Page3';
import Page from './comps/Page'
function App() {
  const pages = [
    <Page />,
    <Page3 />,
    <Page2 />,
  ]
  const [index, setIndex] = useState({ current: 0 })

  const width = window.innerHeight
  const springRef = useSpringRef()

  const [props, api] = useSprings(pages.length, i => ({
    ref: springRef,
    y: i * width,
    scale: 1,
    display: 'block',
  }))

  const bind = useDrag(({ active, movement: [mx, my], direction: [xDir, yDir], cancel }) => {

    if (active && Math.abs(my) > width / 2) {
      setIndex({ current: clamp(index.current + (yDir > 0 ? -1 : 1), 0, pages.length - 1) })
      cancel()
    }
    api.start(i => {
      if (i < index.current - 1 || i > index.current + 1) return { display: 'none' }
      const y = (i - index.current) * width + (active ? my : 0)
      const scale = active ? 1 - Math.abs(my) / width / 2 : 1
      return { y, scale, display: 'block' }
    })
  })

  const movePage = (page) => {
    setIndex({ current: page })
  }
  return (
    <div className="App">
      <Nav move={movePage}></Nav>
      <div className='wrapper'>
        {props.map(({ y, display, scale }, i) => (
          <animated.div className='slide' {...bind()} key={i} style={{ display, y }}>
            <animated.div style={{ scale }} className='slide-wrapper'>{pages[i]}</animated.div>
          </animated.div>
        ))}
      </div>
    </div>
  )

}

export default App;


