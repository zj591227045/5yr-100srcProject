import './globals.css'
import type { Metadata } from 'next'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export const metadata: Metadata = {
  title: '5年100个开源项目挑战 | 5-Year 100 Open Source Projects Challenge',
  description: '探索、创新、分享 - 通过AI辅助开发完成100个开源项目的个人挑战',
  keywords: ['开源项目', 'AI开发', '编程挑战', 'Open Source', 'AI-Assisted Development'],
  authors: [{ name: 'zj591227045' }],
  openGraph: {
    title: '5年100个开源项目挑战',
    description: '探索、创新、分享 - 通过AI辅助开发完成100个开源项目的个人挑战',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
} 