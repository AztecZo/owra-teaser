"use client"

import { colors } from "@/styles/config.mjs"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"

import { IconOwraLogo } from "@/components/icons"
import { gsap } from "@/components/gsap"

export default function App() {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.to(ref.current, {
      autoAlpha: 0,
      duration: 0.4,
      delay: 1,
    })
  })

  return (
    <div ref={ref} className="fixed inset-0 flex items-center justify-center bg-toasted-marshmallow-fluff z-[1000]">
      <div className="w-60">
        <IconOwraLogo fill={colors["algerian-colar"]} />
      </div>
    </div>
  )
}
