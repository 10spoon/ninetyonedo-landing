import React from "react"
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { Toaster } from 'sonner'
import './globals.css'

export const metadata: Metadata = {
  title: '91도 | 밀착 상담 기반 MVP 개발 파트너',
  description: '주식회사 91도: 랜딩 페이지부터 MVP 앱까지, 밀착 상담으로 비즈니스의 첫 발을 함께합니다.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon.png',
        type: 'image/png',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/icon.png',
  },
  openGraph: {
    title: '91도 | 밀착 상담 기반 MVP 개발 파트너',
    description: '주식회사 91도: 랜딩 페이지부터 MVP 앱까지, 밀착 상담으로 비즈니스의 첫 발을 함께합니다.',
    url: 'https://91do.co.kr',
    siteName: '91도',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '91도 | 밀착 상담 기반 MVP 개발 파트너',
    description: '주식회사 91도: 랜딩 페이지부터 MVP 앱까지, 밀착 상담으로 비즈니스의 첫 발을 함께합니다.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body className={`font-sans antialiased`}>
        {children}
        <Toaster position="top-center" richColors />
        <Analytics />
      </body>
    </html>
  )
}
