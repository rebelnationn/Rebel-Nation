"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

const EVENT_END = Date.UTC(2026, 10, 27, 4, 59)
const CAMPAIGN_IMAGE =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2264-0Wz8gUKlthwAGw8z9ULw5dn3AFjnle.jpeg"

function Countdown() {
  const [now, setNow] = useState<number | null>(null)

  useEffect(() => {
    const update = () => setNow(Date.now())
    update()
    const interval = window.setInterval(update, 60_000)
    return () => window.clearInterval(interval)
  }, [])

  const remaining = now === null ? null : Math.max(0, EVENT_END - now)
  const days = remaining === null ? "--" : String(Math.floor(remaining / 86_400_000)).padStart(2, "0")
  const hours = remaining === null ? "--" : String(Math.floor((remaining % 86_400_000) / 3_600_000)).padStart(2, "0")
  const minutes = remaining === null ? "--" : String(Math.floor((remaining % 3_600_000) / 60_000)).padStart(2, "0")

  return (
    <section className="px-4 py-12 text-center text-white sm:py-16" aria-live="polite">
      {remaining === 0 ? (
        <h2 className="text-xl font-bold tracking-[0.18em] sm:text-2xl">BLACK FRIDAY IS OVER</h2>
      ) : (
        <>
          <h2 className="text-xs font-semibold tracking-[0.24em] sm:text-sm">BLACK FRIDAY BEGINS IN</h2>
          <div className="mx-auto mt-6 flex max-w-sm items-center justify-center gap-6 sm:gap-10">
            {[{ label: "DÍAS", value: days }, { label: "HORAS", value: hours }, { label: "MINUTOS", value: minutes }].map((unit) => (
              <div className="min-w-[72px]" key={unit.label}>
                <div className="text-3xl font-bold tabular-nums sm:text-4xl">{unit.value}</div>
                <div className="mt-2 text-[10px] tracking-[0.16em] text-white/70 sm:text-xs">{unit.label}</div>
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  )
}

export function BlackFridaySection() {
  return (
    <section className="bg-background" aria-label="Campaña Black Friday">
      <div className="mx-auto w-full max-w-5xl px-4 pt-8 sm:px-6 lg:px-8">
        <Image
          src={CAMPAIGN_IMAGE}
          alt="Campaña Black Friday de Rebel Nation: hasta 30% de descuento en prendas seleccionadas"
          width={1087}
          height={1447}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 960px"
          className="h-auto w-full"
          priority
        />
      </div>
      <Countdown />
    </section>
  )
}
