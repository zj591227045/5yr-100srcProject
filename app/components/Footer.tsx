import { Github, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">关于项目</h3>
            <p className="text-gray-600 text-sm">
              5年100个开源项目挑战是一个个人成长项目，通过AI辅助开发的方式探索编程的边界，为开源社区贡献有价值的工具和解决方案。
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">快速链接</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="text-gray-600 hover:text-primary-600 transition-colors">首页</a>
              </li>
              <li>
                <a href="/projects" className="text-gray-600 hover:text-primary-600 transition-colors">项目列表</a>
              </li>
              <li>
                <a href="/about" className="text-gray-600 hover:text-primary-600 transition-colors">关于挑战</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">联系方式</h3>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/zj591227045" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-600 transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              © 2025 5年100个开源项目挑战. 保留所有权利.
            </p>
            <p className="text-gray-600 text-sm flex items-center mt-2 md:mt-0">
              Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> and AI
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
} 