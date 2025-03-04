"use client"

import s from "./home.module.css"

import cn from "clsx"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { useMouse } from "react-use"

import { IconMunchLogo, IconOwraLogo } from "@/components/icons"
import { Img } from "@/components/utility/img"
import { colors } from "@/styles/config.mjs"

export function Home() {
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
    <div className="w-screen h-screen flex flex-col items-stretch font-asap bg-neutral-50 overflow-hidden" ref={ref}>
      <div className="h-16 flex items-center justify-center py-4">
        <div className="h-full">
          <IconOwraLogo fill={colors["algerian-colar"]} />
        </div>
      </div>
      <div className="flex flex-1">
        <div
          className={cn(
            "bg-blue-500 flex items-center justify-center transition-all duration-1000",
            position === "center" && "w-1/2",
            position === "left" && "w-full bd:w-8/12",
            position === "right" && "w-0 bd:w-4/12"
          )}
        ></div>
        <div
          className={cn(
            "relative transition-all duration-1000",
            position === "center" && "w-1/2",
            position === "left" && "w-0 bd:w-4/12",
            position === "right" && "w-full bd:w-8/12"
          )}
        >
          <div className={s.wrapper}>
            <div
              className={cn(s["chill-owra-container"], "transition-opacity", "duration-500", {
                "opacity-0": position === "left",
              })}
            >
              <div className={cn(s["items"])}>
                <div className={cn(s["chill-owra"], s["chill-owra-1"])}>
                  <div className={cn(s["transform-container"], { [s.right]: position === "right" })}>
                    <Img
                      src="/img/chill-owra.png"
                      alt="Chill Owra"
                      className="w-full h-full object-contain rotate-6"
                      height={1000}
                      width={1000}
                    />
                  </div>
                </div>
                <div className={cn(s["chill-owra"], s["chill-owra-2"])}>
                  <div className={cn(s["transform-container"], { [s.right]: position === "right" })}>
                    <Img
                      src="/img/chill-owra.png"
                      alt="Chill Owra"
                      className="w-full h-full object-contain -rotate-12"
                      height={1000}
                      width={1000}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              className={cn(s["ice-container"], "transition-opacity", "duration-500", {
                "opacity-0": position === "left",
              })}
            >
              <div className={cn(s["ice"], s["ice-1"])}>
                <Img
                  src="/img/ice-1.png"
                  alt="Chill Owra"
                  className="w-full h-full object-contain"
                  height={200}
                  width={200}
                />
              </div>
              <div className={cn(s["ice"], s["ice-2"])}>
                <Img
                  src="/img/ice-2.png"
                  alt="Chill Owra"
                  className="w-full h-full object-contain"
                  height={200}
                  width={200}
                />
              </div>
              <div className={cn(s["ice"], s["ice-3"])}>
                <Img
                  src="/img/ice-3.png"
                  alt="Chill Owra"
                  className="w-full h-full object-contain"
                  height={200}
                  width={200}
                />
              </div>
              <div className={cn(s["ice"], s["ice-4"])}>
                <Img
                  src="/img/ice-4.png"
                  alt="Chill Owra"
                  className="w-full h-full object-contain"
                  height={200}
                  width={200}
                />
              </div>
              <div className={cn(s["ice"], s["ice-5"])}>
                <Img
                  src="/img/ice-5.png"
                  alt="Chill Owra"
                  className="w-full h-full object-contain"
                  height={200}
                  width={200}
                />
              </div>
              <div className={cn(s["ice"], s["ice-6"])}>
                <Img
                  src="/img/ice-6.png"
                  alt="Chill Owra"
                  className="w-full h-full object-contain"
                  height={200}
                  width={200}
                />
              </div>
            </div>
            <div
              className={cn(s["text-container"], "transition-opacity", "duration-700", {
                "opacity-0 bd:opacity-50": position === "left",
              })}
            >
              <div className="text-center text-cedar-wood-finish flex flex-col items-center gap-10">
                <div className={s["logo-container"]}>
                  <IconMunchLogo fill={colors["cedar-wood-finish"]} />
                </div>
                <p className="text-xl bd:text-3xl w-96 leading-normal">
                  Her gün <span className="font-bold italic">Zinde kalın</span>, <br /> her lokmada{" "}
                  <span className="font-bold italic">Doğal atıştırın.</span>
                </p>
                <Link
                  href="https://www.munchowra.com"
                  className="inline-block border-2 border-cedar-wood-finish px-6 py-2 rounded-xl text-base font-bold hover:bg-cedar-wood-finish hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ürünleri İnceleyin
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
