import { useEffect, useRef, useState } from 'react'

interface UseLazyVideoProps {
  videoIndex: number
  totalVideos: number
  onVideoReady?: () => void
}

export const useLazyVideo = ({ videoIndex, totalVideos, onVideoReady }: UseLazyVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    setIsLoading(true)

    const handleCanPlay = () => {
      setIsLoading(false)
      onVideoReady?.()
    }

    const handleLoadedMetadata = () => {
      video.play().catch(() => {})
    }

    video.addEventListener('canplay', handleCanPlay)
    video.addEventListener('loadedmetadata', handleLoadedMetadata)

    return () => {
      video.removeEventListener('canplay', handleCanPlay)
      video.removeEventListener('loadedmetadata', handleLoadedMetadata)
    }
  }, [videoIndex, onVideoReady])

  return { videoRef, isLoading }
}

export const preloadVideo = (src: string) => {
  if (typeof document === 'undefined') return

  const video = document.createElement('video')
  video.src = src
  video.preload = 'auto'
  video.style.display = 'none'
  document.body.appendChild(video)

  setTimeout(() => {
    video.remove()
  }, 5000)
}
