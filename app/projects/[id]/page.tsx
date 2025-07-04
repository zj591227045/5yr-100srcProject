import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Github, Calendar, Tag, Star, CheckCircle, BookOpen } from 'lucide-react'
import { getProjectById, projects } from '../../data/projects'

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }))
}

interface ProjectDetailPageProps {
  params: {
    id: string
  }
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const project = getProjectById(params.id)
  
  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/projects" className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            <span>返回项目列表</span>
          </Link>
        </div>
      </div>

      {/* Project Header */}
      <section className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-4">
                <h1 className="text-4xl font-bold text-gray-900">
                  {project.name}
                </h1>
                <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">
                  {project.status === 'completed' ? '已完成' : '进行中'}
                </span>
              </div>
              
              <p className="text-xl text-gray-600 mb-6 max-w-3xl">
                {project.description}
              </p>
              
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>发布时间：{project.releaseDate}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Tag className="h-4 w-4" />
                  <span>分类：{project.category}</span>
                </div>
              </div>
            </div>
            
            <div className="mt-6 lg:mt-0 lg:ml-8">
              <div className="flex space-x-4">
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                >
                  <Github className="h-5 w-5" />
                  <span>查看源码</span>
                </a>
                {project.docUrl && (
                  <Link
                    href={project.docUrl}
                    target="_blank"
                    className="inline-flex items-center space-x-2 bg-white border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
                  >
                    <BookOpen className="h-5 w-5" />
                    <span>查看文档</span>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Features */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  主要功能
                </h2>
                <ul className="space-y-3">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  技术栈
                </h2>
                <div className="flex flex-wrap gap-3">
                  {project.techStack.map((tech, index) => (
                    <span 
                      key={index} 
                      className="bg-primary-50 text-primary-700 px-3 py-2 rounded-lg text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* AI Development Note */}
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg border border-purple-200 p-6">
                <div className="flex items-start space-x-3">
                  <Star className="h-6 w-6 text-purple-600 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold text-purple-900 mb-2">
                      AI 辅助开发说明
                    </h3>
                    <p className="text-purple-800">
                      本项目是通过AI辅助开发完成的。作为非专业程序员，我利用AI工具来完成项目设计、
                      代码编写和问题解决。这种开发模式展示了AI在降低编程门槛和提高开发效率方面的巨大潜力。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Project Info */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  项目信息
                </h3>
                <dl className="space-y-3">
                  <div>
                    <dt className="text-sm font-medium text-gray-500">项目名称</dt>
                    <dd className="text-sm text-gray-900">{project.name}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">英文名称</dt>
                    <dd className="text-sm text-gray-900">{project.nameEn}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">发布时间</dt>
                    <dd className="text-sm text-gray-900">{project.releaseDate}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">项目状态</dt>
                    <dd className="text-sm text-gray-900">
                      {project.status === 'completed' ? '已完成' : '进行中'}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">项目分类</dt>
                    <dd className="text-sm text-gray-900">{project.category}</dd>
                  </div>
                </dl>
              </div>

              {/* Tags */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  标签
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="bg-gray-100 text-gray-700 text-sm px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  快速链接
                </h3>
                <div className="space-y-3">
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors"
                  >
                    <Github className="h-4 w-4" />
                    <span>GitHub 仓库</span>
                  </a>
                  {project.docUrl && (
                    <Link
                      href={project.docUrl}
                      target="_blank"
                      className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors"
                    >
                      <BookOpen className="h-4 w-4" />
                      <span>查看文档</span>
                    </Link>
                  )}
                  <Link 
                    href="/projects"
                    className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    <span>返回项目列表</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 