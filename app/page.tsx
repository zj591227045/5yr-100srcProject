import Link from 'next/link'
import { Github, Star, GitFork, Eye, Code, Lightbulb, Users, Zap, BookOpen } from 'lucide-react'
import { getProjectStats, getCompletedProjects } from './data/projects'

export default function Home() {
  const stats = getProjectStats()
  const recentProjects = getCompletedProjects().slice(-3).reverse()

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative gradient-bg text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            5年100个开源项目挑战
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100">
            探索、创新、分享 | 通过AI辅助开发的编程之旅
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/projects" 
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              浏览项目
            </Link>
            <a 
              href="https://github.com/zj591227045" 
              target="_blank" 
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors flex items-center justify-center space-x-2"
            >
              <Github className="h-5 w-5" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                {stats.completed}
              </div>
              <div className="text-gray-600">已完成项目</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
                {stats.completionRate}%
              </div>
              <div className="text-gray-600">完成进度</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">
                100
              </div>
              <div className="text-gray-600">目标项目</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">
                5
              </div>
              <div className="text-gray-600">挑战年限</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              关于这个挑战
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              这是一个雄心勃勃的个人挑战：在5年内完成100个开源项目。通过AI辅助开发的方式，
              探索编程的边界，为开源社区贡献有价值的工具和解决方案。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">多样化技术栈</h3>
              <p className="text-gray-600">探索不同的编程语言、框架和技术领域</p>
            </div>

            <div className="text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">实用性优先</h3>
              <p className="text-gray-600">创建解决实际问题的工具和应用</p>
            </div>

            <div className="text-center p-6">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">开放协作</h3>
              <p className="text-gray-600">欢迎贡献者参与项目开发和改进</p>
            </div>

            <div className="text-center p-6">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">AI协作模式</h3>
              <p className="text-gray-600">探索人类与AI合作开发的高效模式</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              最新项目
            </h2>
            <p className="text-xl text-gray-600">
              查看最近完成的开源项目
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentProjects.map((project) => (
              <div key={project.id} className="bg-white border border-gray-200 rounded-lg shadow-sm card-hover">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {project.name}
                    </h3>
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                      已完成
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 text-sm px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{project.releaseDate}</span>
                    <div className="flex space-x-3">
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-primary-600 transition-colors"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                      {project.docUrl && (
                        <Link 
                          href={project.docUrl}
                          target="_blank"
                          className="text-gray-600 hover:text-primary-600 transition-colors"
                        >
                          <BookOpen className="h-5 w-5" />
                        </Link>
                      )}
                      <Link 
                        href={`/projects/${project.id}`}
                        className="text-primary-600 hover:text-primary-700 font-medium text-sm"
                      >
                        查看详情
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link 
              href="/projects"
              className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors inline-block"
            >
              查看所有项目
            </Link>
          </div>
        </div>
      </section>

      {/* Progress Bar */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">挑战进度</h2>
            <p className="text-gray-300">距离完成100个项目还有 {100 - stats.completed} 个项目</p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-700 rounded-full h-4 mb-4">
              <div 
                className="bg-gradient-to-r from-primary-500 to-primary-600 h-4 rounded-full transition-all duration-500"
                style={{ width: `${stats.completionRate}%` }}
              ></div>
            </div>
            <div className="flex justify-between text-sm text-gray-300">
              <span>0</span>
              <span className="font-semibold">{stats.completed}/100</span>
              <span>100</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 