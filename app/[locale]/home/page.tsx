"use client"

import s from "./home.module.css"

import cn from "clsx"
import Link from "next/link"
import { useEffect, useLayoutEffect, useRef, useState } from "react"
import { useMouse, useWindowSize } from "react-use"

import { IconChillOwraLogo, IconMunchLogo, IconOwraLogo } from "@/components/icons"
import { LetterSwapForward } from "@/components/letter-swap-forward"
import { Img } from "@/components/utility/img"

import { breakpoints, colors } from "@/styles/config.mjs"

export function Home() {
  const ref = useRef<HTMLDivElement>(null)
  const { docX } = useMouse(ref)
  const { width: windowWidth } = useWindowSize()
  const isMobile = windowWidth < breakpoints.breakpointMobile

  const [position, setPosition] = useState<"left" | "right" | "center">("center")

  useLayoutEffect(() => {
    setPosition("left")
  }, [isMobile])

  useEffect(() => {
    if (isMobile) {
      return
    }

    const oneSixth = windowWidth / 12

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
  }, [docX, position, windowWidth, isMobile])

  return (
    <div
      className="relative w-screen h-screen flex flex-col items-stretch font-asap bg-toasted-marshmallow-fluff overflow-hidden"
      ref={ref}
    >
      <div className="h-16 flex items-center justify-center py-4 border-b border-glazed-sugar">
        <div className="h-full">
          <IconOwraLogo fill={colors["algerian-colar"]} />
        </div>
      </div>
      <div className="relative flex flex-1">
        <div
          className={cn(s["mobile-switch"], "relative flex font-asap text-sm z-50", {
            [s.left]: position === "left",
            [s.right]: position === "right",
          })}
        >
          <div
            className={cn(
              s["mobile-switch-item"],
              s["mobile-switch-item-left"],
              "flex items-center justify-center z-20"
            )}
            onClick={() => setPosition("left")}
          >
            Munch Owra
          </div>
          <div
            className={cn(
              s["mobile-switch-item"],
              s["mobile-switch-item-right"],
              "flex items-center justify-center z-20"
            )}
            onClick={() => setPosition("right")}
          >
            Chill Owra
          </div>
          <div className={cn(s["mobile-switch-bg"], "z-10")}></div>
        </div>
        <div
          className={cn(
            "relative flex items-center justify-center transition-all duration-1000 border-r border-glazed-sugar",
            position === "center" && "w-1/2",
            position === "left" && "w-full bd:w-8/12",
            position === "right" && "w-0 bd:w-4/12"
          )}
        >
          <div className={s.wrapper}>
            <div
              className={cn(s["munch-owra-container"], "transition-opacity duration-500", {
                "opacity-0": position === "right",
              })}
            >
              <div className={cn(s["items"])}>
                <div className={cn(s["munch-owra"], s["munch-owra-1"])}>
                  <div className={cn(s["transform-container"], { [s.right]: position === "right" })}>
                    <Img
                      src="/img/freshburst.png"
                      alt="Munch Owra"
                      className="w-full h-full object-contain rotate-6"
                      height={1000}
                      width={1000}
                    />
                  </div>
                </div>
                <div className={cn(s["munch-owra"], s["munch-owra-2"])}>
                  <div className={cn(s["transform-container"], { [s.right]: position === "right" })}>
                    <Img
                      src="/img/nutrifusion.png"
                      alt="Munch Owra"
                      className="w-full h-full object-contain -rotate-12"
                      height={1000}
                      width={1000}
                    />
                  </div>
                </div>
                <div className={cn(s["munch-owra"], s["munch-owra-3"])}>
                  <div className={cn(s["transform-container"], { [s.right]: position === "right" })}>
                    <Img
                      src="/img/chocoshell.png"
                      alt="Munch Owra"
                      className="w-full h-full object-contain -rotate-12"
                      height={1000}
                      width={1000}
                    />
                  </div>
                </div>
                <div className={cn(s["munch-owra"], s["munch-owra-4"])}>
                  <div className={cn(s["transform-container"], { [s.right]: position === "right" })}>
                    <Img
                      src="/img/royalcrisp.png"
                      alt="Munch Owra"
                      className="w-full h-full object-contain -rotate-12"
                      height={1000}
                      width={1000}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              className={cn(s["munch-container"], "transition-opacity", "duration-500", {
                "opacity-0": position === "right",
              })}
            >
              <div className={cn(s["munch"], s["m-1"])}>
                <Img
                  src="/img/m-1.png"
                  alt="Chill Owra"
                  className="w-full h-full object-contain"
                  height={200}
                  width={200}
                />
              </div>
              <div className={cn(s["munch"], s["m-2"])}>
                <Img
                  src="/img/m-2.png"
                  alt="Chill Owra"
                  className="w-full h-full object-contain"
                  height={200}
                  width={200}
                />
              </div>
              <div className={cn(s["munch"], s["m-3"])}>
                <Img
                  src="/img/m-3.png"
                  alt="Chill Owra"
                  className="w-full h-full object-contain"
                  height={200}
                  width={200}
                />
              </div>
              <div className={cn(s["munch"], s["m-4"])}>
                <Img
                  src="/img/m-4.png"
                  alt="Chill Owra"
                  className="w-full h-full object-contain"
                  height={200}
                  width={200}
                />
              </div>
              <div className={cn(s["munch"], s["m-5"])}>
                <Img
                  src="/img/m-5.png"
                  alt="Chill Owra"
                  className="w-full h-full object-contain"
                  height={200}
                  width={200}
                />
              </div>
              <div className={cn(s["munch"], s["m-6"])}>
                <Img
                  src="/img/m-6.png"
                  alt="Chill Owra"
                  className="w-full h-full object-contain"
                  height={200}
                  width={200}
                />
              </div>
            </div>
            <div
              className={cn(s["text-container"], "transition-opacity duration-700", {
                "opacity-0 bd:opacity-50": position === "right",
              })}
            >
              <div className="text-center text-cedar-wood-finish flex flex-col items-center gap-8 bd:gap-10">
                <div className={s["logo-container"]}>
                  <IconMunchLogo fill={colors["cedar-wood-finish"]} />
                </div>
                <p className="text-2xl bd:text-3xl w-96 leading-normal">
                  Her gün <span className="font-bold italic">Zinde kalın</span>, <br /> her lokmada{" "}
                  <span className="font-bold italic">Doğal atıştırın.</span>
                </p>
                <Link
                  href="https://www.munchowra.com"
                  className="inline-block bg-cedar-wood-finish text-toasted-marshmallow-fluff px-6 py-2 rounded-xl text-base font-bold hover:bg-cedar-wood-finish hover:text-toasted-marshmallow-fluff transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LetterSwapForward label="Ürünleri İnceleyin" reverse={false} />
                </Link>
              </div>
            </div>
          </div>
        </div>
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
              className={cn(s["chill-owra-container"], "transition-opacity duration-500", {
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
              className={cn(s["text-container"], "transition-opacity duration-700", {
                "opacity-0 bd:opacity-50": position === "left",
              })}
            >
              <div className="text-center text-blue-ruin flex flex-col items-center gap-8 bd:gap-10">
                <div className={s["logo-container"]}>
                  <IconChillOwraLogo fill={colors["blue-ruin"]} />
                </div>
                <p className="text-2xl bd:text-3xl w-96 leading-normal">
                  Kalite ve eğlencenin <br />
                  <span className="font-bold italic">buluşma noktası!</span>
                </p>
                <Link
                  href="https://www.chillowra.com"
                  className="inline-block bg-blue-ruin text-toasted-marshmallow-fluff px-6 py-2 rounded-xl text-base font-bold hover:bg-blue-ruin hover:text-toasted-marshmallow-fluff transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LetterSwapForward label="Ürünleri İnceleyin" reverse={false} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
