import gsap from 'gsap'
import { useCallback, useEffect, useRef, useState } from 'react'

const Cursor = () => {
  const cursor = useRef()
  const [hasMoved, setHasMoved] = useState(false)
  const [isPointer, setIsPointer] = useState(false)

  const onMouseMove = useCallback(
    ({ clientX, clientY }) => {
      gsap.to(cursor.current, {
        x: clientX,
        y: clientY,
        duration: hasMoved ? 0.6 : 0,
        ease: 'expo.out',
      })
      setHasMoved(true)
    },
    [hasMoved],
  )

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove, false)

    return () => {
      window.removeEventListener('mousemove', onMouseMove, false)
    }
  }, [hasMoved])

  useEffect(() => {
    let elements = []

    const onMouseEnter = () => {
      setIsPointer(true)
    }
    const onMouseLeave = () => {
      setIsPointer(false)
    }

    elements = [
      ...document.querySelectorAll(
        "button,a,input,label,[data-cursor='pointer']",
      ),
    ]

    elements.forEach(element => {
      element.addEventListener('mouseenter', onMouseEnter, false)
      element.addEventListener('mouseleave', onMouseLeave, false)
    })

    return () => {
      elements.forEach(element => {
        element.removeEventListener('mouseenter', onMouseEnter, false)
        element.removeEventListener('mouseleave', onMouseLeave, false)
      })
    }
  }, [])

  return (
    <div className="cursor__container">
      <div ref={cursor} className="cursor__wrapper">
        <div className={`cursor ${isPointer ? 'pointer' : ''}`} />
      </div>
    </div>
  )
}

export default Cursor
