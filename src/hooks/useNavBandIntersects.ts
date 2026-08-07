import { useEffect, useState } from 'react'
import { useLocation } from 'react-router'

const NAV_HEIGHT_PX = 96

/** Whether any element matching `selector` currently overlaps the fixed navbar's vertical band. */
export function useNavBandIntersects(selector: string): boolean {
  const location = useLocation()
  const [intersects, setIntersects] = useState(false)

  useEffect(() => {
    const update = () => {
      const targets = document.querySelectorAll(selector)
      const isIntersecting = Array.from(targets).some((el) => {
        const rect = el.getBoundingClientRect()
        return rect.top < NAV_HEIGHT_PX && rect.bottom > 0
      })
      setIntersects(isIntersecting)
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [selector, location.pathname])

  return intersects
}
