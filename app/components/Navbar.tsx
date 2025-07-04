'use client'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Code, Github } from 'lucide-react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Code className="h-8 w-8 text-primary-600" />
              <span className="font-bold text-xl text-gray-900">5年100源码</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              首页
            </Link>
            <Link href="/projects" className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              项目列表
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              关于挑战
            </Link>
            <a 
              href="https://github.com/zj591227045/5yr-100srcProject" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-1 bg-primary-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-700 transition-colors"
            >
              <Github className="h-4 w-4" />
              <span>GitHub</span>
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-primary-600 focus:outline-none focus:text-primary-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200">
              <Link href="/" className="block text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-base font-medium">
                首页
              </Link>
              <Link href="/projects" className="block text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-base font-medium">
                项目列表
              </Link>
              <Link href="/about" className="block text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-base font-medium">
                关于挑战
              </Link>
              <a 
                href="https://github.com/zj591227045/5yr-100srcProject" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-1 text-primary-600 px-3 py-2 rounded-md text-base font-medium"
              >
                <Github className="h-4 w-4" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
} 