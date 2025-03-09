import "@/styles/globals.css"

import { Locale } from "@/i18n/routing"
import { StyleVariables } from "@/lib/style-variables"
import { colors, themes } from "@/styles/config.mjs"
import { NextIntlClientProvider } from "next-intl"
import { getMessages, getTranslations } from "next-intl/server"
import { Asap } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"

import Preloader from "@/components/preloader"
import { RealViewport } from "@/components/real-viewport"

const asap = Asap({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-asap",
})

export async function generateMetadata({ params: { locale } }: { params: { locale: Locale } }) {
  const t = await getTranslations({ locale, namespace: "metadata.default" })

  return {
    title: t("title"),
    description: t("description"),
    icons: {
      icon: [
        { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        { url: "/favicon/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
        { url: "/favicon/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
        { url: "/favicon/favicon.ico", sizes: "any", type: "image/x-icon" },
      ],
      apple: [{ url: "/favicon/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    },
  }
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode
  params: { locale: string }
}>) {
  const messages = await getMessages()

  return (
    <html lang={locale}>
      <head>
        <StyleVariables colors={colors} themes={themes} />
      </head>
      <body className={`${asap.variable} antialiased`}>
        <RealViewport />
        <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
        <Preloader />
        <Analytics />
      </body>
    </html>
  )
}
