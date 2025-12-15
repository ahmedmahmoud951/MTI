export const getAnimationConfig = (isMobile: boolean, prefersReducedMotion: boolean) => {
  if (prefersReducedMotion) {
    return {
      enabled: false,
      boxShadowDuration: 0,
      rotateDuration: 0,
      pulseDuration: 0,
      staggerDelay: 0,
      itemDelay: 0,
    }
  }

  if (isMobile) {
    return {
      enabled: true,
      boxShadowDuration: 4,
      rotateDuration: 6,
      pulseDuration: 3,
      staggerDelay: 0.08,
      itemDelay: 0.4,
    }
  }

  return {
    enabled: true,
    boxShadowDuration: 2,
    rotateDuration: 4,
    pulseDuration: 2,
    staggerDelay: 0.15,
    itemDelay: 0.8,
  }
}

export const useAnimationConfig = () => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 640
  const prefersReducedMotion = 
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  return getAnimationConfig(isMobile, prefersReducedMotion)
}
