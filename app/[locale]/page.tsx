"use client"

import cn from "clsx"
import { useEffect, useRef, useState } from "react"
import { useMouse } from "react-use"

export default function Page() {
  const ref = useRef<HTMLDivElement>(null)
  const { docX } = useMouse(ref)

  const [position, setPosition] = useState<"left" | "right" | "center">("center")

  useEffect(() => {
    const oneSixth = window.innerWidth / 12

    const left = docX < oneSixth * 5
    const right = docX > oneSixth * 7
    const center = docX > oneSixth * 5 && docX < oneSixth * 7

    if (left) {
      if (position !== "left") setPosition("left")
    } else if (right) {
      if (position !== "right") setPosition("right")
    } else if (center) {
      if (position !== "center") setPosition("center")
    }
  }, [docX, position])

  return (
    <div className="w-screen h-screen flex items-stretch" ref={ref}>
      <div
        className={cn(
          "bg-blue-500 flex items-center justify-center transition-all duration-1000",
          position === "center" && "w-1/2",
          position === "left" && "w-9/12",
          position === "right" && "w-3/12"
        )}
      >
        <h2>Chill Owra</h2>
      </div>
      <div
        className={cn(
          "bg-orange-500 flex items-center justify-center transition-all duration-1000",
          position === "center" && "w-1/2",
          position === "left" && "w-3/12",
          position === "right" && "w-9/12"
        )}
      >
        <h2>Munch Owra</h2>
      </div>
    </div>
  )
}
