import { Target, Lightbulb, Users, Zap, Calendar, Trophy } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              关于5年100个开源项目挑战
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              探索、创新、分享 - 一个关于成长、学习和贡献的编程之旅
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Introduction */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  挑战介绍
                </h2>
                <div className="prose prose-lg text-gray-700">
                  <p className="mb-4">
                    这是一个雄心勃勃的个人挑战：在5年内完成100个开源项目。从2025年3月开始，
                    我将定期发布新的开源项目，涵盖人工智能、数据分析、Web开发、移动应用等多个领域。
                    每个项目都将秉持开源精神，为社区贡献有价值的工具和解决方案。
                  </p>
                  
                  <p className="mb-4">
                    <strong>特别说明</strong>：作为非专业程序员，我通过AI工具的辅助来完成所有项目的设计和开发。
                    这不仅是一次个人挑战，也是对AI辅助编程潜力的探索。每个项目都会记录AI参与的方式和程度，
                    分享人机协作的经验和心得。
                  </p>
                </div>
              </div>

              {/* Vision */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  项目愿景
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex space-x-4">
                    <div className="bg-primary-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Target className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">多样化的技术栈</h3>
                      <p className="text-gray-600">探索不同的编程语言、框架和技术领域，不断扩展技术边界</p>
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Lightbulb className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">实用性优先</h3>
                      <p className="text-gray-600">创建解决实际问题的工具和应用，注重项目的实用价值</p>
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">开放协作</h3>
                      <p className="text-gray-600">欢迎贡献者参与项目开发和改进，共同建设开源生态</p>
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Zap className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">AI协作模式</h3>
                      <p className="text-gray-600">探索和完善人类与AI合作开发的高效模式</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* AI Development Philosophy */}
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg border border-purple-200 p-8">
                <h2 className="text-3xl font-bold text-purple-900 mb-6">
                  AI辅助开发理念
                </h2>
                <div className="prose prose-lg text-purple-800">
                  <p className="mb-4">
                    在这个挑战中，AI不仅仅是一个工具，更是我的开发伙伴。通过与AI的深度协作，
                    我探索着编程的新可能性：
                  </p>
                  
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li><strong>降低技术门槛</strong>：让非专业程序员也能完成复杂项目</li>
                    <li><strong>提高开发效率</strong>：快速原型设计和迭代开发</li>
                    <li><strong>学习新技术</strong>：在实践中掌握新的编程语言和框架</li>
                    <li><strong>创新思维</strong>：AI提供不同的解决方案和创意启发</li>
                    <li><strong>质量保证</strong>：代码审查和最佳实践建议</li>
                  </ul>
                  
                  <p>
                    每个项目都会详细记录AI参与的过程，分享人机协作的经验，
                    为其他开发者提供AI辅助编程的实用指南。
                  </p>
                </div>
              </div>

              {/* Timeline */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  挑战时间线
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary-100 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Calendar className="h-5 w-5 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">2025年3月 - 挑战启动</h3>
                      <p className="text-gray-600">发布首批项目，建立开发流程和标准</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Target className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">2025年 - 第一年目标</h3>
                      <p className="text-gray-600">完成20个项目，建立稳定的发布节奏</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-100 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Zap className="h-5 w-5 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">2026-2028年 - 加速发展</h3>
                      <p className="text-gray-600">每年完成20-25个项目，探索更多技术领域</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-100 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Trophy className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">2030年 - 挑战完成</h3>
                      <p className="text-gray-600">完成100个项目，总结经验并规划下一阶段</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Stats */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  挑战统计
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">开始时间</span>
                    <span className="font-medium">2025年3月</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">目标项目</span>
                    <span className="font-medium">100个</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">挑战期限</span>
                    <span className="font-medium">5年</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">已完成</span>
                    <span className="font-medium text-green-600">8个</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">完成率</span>
                    <span className="font-medium text-primary-600">8%</span>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  联系作者
                </h3>
                <div className="space-y-3">
                  <a 
                    href="https://github.com/zj591227045" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors"
                  >
                    <span>GitHub</span>
                  </a>
                </div>
              </div>

              {/* Support */}
              <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-lg border border-primary-200 p-6">
                <h3 className="text-lg font-semibold text-primary-900 mb-4">
                  支持项目
                </h3>
                <p className="text-primary-800 text-sm mb-4">
                  如果你喜欢这个挑战，欢迎：
                </p>
                <ul className="text-primary-800 text-sm space-y-1">
                  <li>• 给项目点个 Star</li>
                  <li>• 分享给更多人</li>
                  <li>• 提出改进建议</li>
                  <li>• 参与项目贡献</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 