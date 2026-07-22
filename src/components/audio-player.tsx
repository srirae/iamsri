"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "motion/react"
import { Play, Pause, Volume2, VolumeX, Music } from "lucide-react"

import { Button } from "@/components/base/ui/button"

export function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  // Provide a default song path that the user can replace
  const songPath = "/song.mp3"

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play().catch(err => console.log("Audio play failed:", err))
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  useEffect(() => {
    const audio = audioRef.current
    if (audio) {
      const handleEnded = () => setIsPlaying(false)
      audio.addEventListener("ended", handleEnded)
      return () => audio.removeEventListener("ended", handleEnded)
    }
  }, [])

  return (
    <motion.div
      drag
      dragMomentum={false}
      initial={{ x: 0, y: 0 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full border border-line bg-background/80 p-2 pr-4 shadow-xl backdrop-blur-md cursor-grab active:cursor-grabbing"
    >
      <audio ref={audioRef} src={songPath} loop />
      
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
        <Music className="size-5" />
      </div>

      <div className="flex flex-col min-w-[80px]">
        <span className="text-sm font-medium leading-none">Vibe Check</span>
        <span className="text-xs text-muted-foreground">lofi beats</span>
      </div>

      <div className="ml-2 flex items-center gap-1">
        <Button
          size="icon-sm"
          variant="ghost"
          className="rounded-full"
          onClick={togglePlay}
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? <Pause className="size-4" /> : <Play className="size-4" />}
        </Button>
        <Button
          size="icon-sm"
          variant="ghost"
          className="rounded-full"
          onClick={toggleMute}
          aria-label={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? <VolumeX className="size-4" /> : <Volume2 className="size-4" />}
        </Button>
      </div>
    </motion.div>
  )
}
