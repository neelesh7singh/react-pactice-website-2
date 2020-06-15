import React, { useState, useEffect } from "react"

import { Cursor } from "../styles/globalStyles"
// context
import { useGlobalStateContext } from "../context/globalContex"

const CustomCursor = ({ toggleMenu }) => {
  const { cursorType } = useGlobalStateContext()

  const [mousePosition, setMousePosition] = useState({
    x: 400,
    y: 400,
  })

  const diff = !!cursorType ? 28 : 16

  const onMouseMove = event => {
    const { pageX: x, pageY: y } = event
    setMousePosition({ x, y })
  }

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove)
    return () => {
      document.removeEventListener("mousemove", onMouseMove)
    }
  }, [])

  return (
    <>
      <Cursor
        className={`${!!cursorType ? "hovered" : ""} ${cursorType} ${
          toggleMenu ? "nav-open" : ""
        }`}
        style={{
          left: `${mousePosition.x - diff}px`,
          top: `${mousePosition.y - diff}px`,
        }}
      />
    </>
  )
}

export default CustomCursor
