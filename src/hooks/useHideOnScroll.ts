import { useEffect, useState } from 'react'

export function useHideOnScroll(threshold = 96): boolean {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    let lastY = window.scrollY

    function handleScroll() {
      const currentY = window.scrollY
      setHidden(currentY > lastY && currentY > threshold)
      lastY = currentY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [threshold])

  return hidden
}
