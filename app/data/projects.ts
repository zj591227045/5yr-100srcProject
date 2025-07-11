export interface Project {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  releaseDate: string;
  githubUrl: string;
  category: string;
  tags: string[];
  status: 'completed' | 'in-progress' | 'planned';
  docUrl?: string;
  features: string[];
  techStack: string[];
}

export const projects: Project[] = [
  {
    id: 'ai-debate',
    name: 'AI-Debate',
    nameEn: 'AI-Debate',
    description: '基于AI模型的辩论平台，支持角色定制、实时评分和多种辩论格式',
    releaseDate: '2025年3月',
    githubUrl: 'https://github.com/zj591227045/Ai-Debate',
    category: 'AI机器学习',
    tags: ['AI', '辩论', 'NLP'],
    status: 'completed',
    features: [
      '支持多种辩论格式（一对一、团队赛等）',
      '实时AI评分和点评',
      '自定义角色和立场',
      '辩论历史记录和回放',
      '数据分析和学习建议'
    ],
    techStack: ['Next.js', 'OpenAI API', 'TailwindCSS', 'MongoDB', 'WebSocket']
  },
  {
    id: 'deep-stress-model',
    name: 'DeepStressModel',
    nameEn: 'DeepStressModel',
    description: 'AI模型压力测试工具，评估模型性能和稳定性',
    releaseDate: '2025年3月',
    githubUrl: 'https://github.com/zj591227045/DeepStressModel',
    category: 'AI机器学习',
    tags: ['AI', '压力测试', '性能评估'],
    status: 'completed',
    features: [
      '多维度性能评估',
      '自动化压力测试',
      '实时监控和报警',
      '性能报告生成',
      '异常分析和建议'
    ],
    techStack: ['Python', 'PyTorch', 'FastAPI', 'Redis', 'Grafana']
  },
  {
    id: 'astrbot-plugin-merge-wemsg',
    name: 'astrbot_plugin_Merge_WeMSG',
    nameEn: 'astrbot_plugin_Merge_WeMSG',
    description: '适用于AstrBot的微信聊天消息合并插件',
    releaseDate: '2025年4月',
    githubUrl: 'https://github.com/zj591227045/astrbot_plugin_Merge_WeMSG',
    category: '工具/插件',
    tags: ['微信', '消息合并', 'AstrBot'],
    status: 'completed',
    features: [
      '智能消息合并',
      '自定义合并规则',
      '多格式导出支持',
      '历史记录管理',
      '插件配置界面'
    ],
    techStack: ['Python', 'AstrBot SDK', 'SQLite', 'Vue.js']
  },
  {
    id: 'wxauto-mgt',
    name: 'WXAUTO-MGT',
    nameEn: 'WXAUTO-MGT',
    description: '微信自动化管理系统，提供微信机器人管理和监控功能',
    releaseDate: '2025年5月',
    githubUrl: 'https://github.com/zj591227045/WXAUTO-MGT',
    category: '自动化管理',
    tags: ['微信', '自动化', '机器人管理'],
    status: 'completed',
    docUrl: '/wxauto-mgt/index.html',
    features: [
      '多账号管理',
      '消息规则配置',
      '自动化任务调度',
      '实时监控和报警',
      '数据统计分析'
    ],
    techStack: ['Node.js', 'Express', 'React', 'MongoDB', 'Redis']
  },
  {
    id: 'wxauto-http-api',
    name: 'WXAUTO-HTTP-API',
    nameEn: 'WXAUTO-HTTP-API',
    description: '微信自动化HTTP API接口，支持远程调用微信功能',
    releaseDate: '2025年5月',
    githubUrl: 'https://github.com/zj591227045/WXAUTO-HTTP-API',
    category: 'API/接口',
    tags: ['微信', 'HTTP API', '远程调用'],
    status: 'completed',
    features: [
      'RESTful API设计',
      '完整的接口文档',
      '权限认证机制',
      '请求限流保护',
      '开发者SDK'
    ],
    techStack: ['Node.js', 'Express', 'TypeScript', 'Swagger', 'JWT']
  },
  {
    id: 'zhiweijz',
    name: '只为记账',
    nameEn: 'ZhiWeiJZ',
    description: '简洁高效的个人记账应用，支持多账户管理和数据分析',
    releaseDate: '2025年6月',
    githubUrl: 'https://github.com/zj591227045/zhiweijz',
    category: '生活工具',
    tags: ['记账', '财务管理', '数据分析'],
    status: 'completed',
    features: [
      '多账户管理',
      '智能分类统计',
      '预算设置提醒',
      '数据可视化',
      '导入导出功能'
    ],
    techStack: ['Flutter', 'SQLite', 'Provider', 'Charts']
  },
  {
    id: 'wxauto4zhiweijz',
    name: '只为记账-微信助手',
    nameEn: 'ZhiWeiJZ-WeChatBot',
    description: '只为记账应用的微信机器人助手，支持语音记账和智能分类',
    releaseDate: '2025年6月',
    githubUrl: 'https://github.com/zj591227045/wxauto4zhiweijz',
    category: '生活工具',
    tags: ['微信机器人', '语音记账', '智能分类'],
    status: 'completed',
    features: [
      '语音记账识别',
      '智能分类推荐',
      '快捷记账指令',
      '账单同步提醒',
      '语音播报统计'
    ],
    techStack: ['Python', 'FastAPI', 'NLP', 'SQLAlchemy']
  },
  {
    id: 'zhiweijz-import-records',
    name: '智能导入工具',
    nameEn: 'ZhiWeiJZ-ImportTool',
    description: '只为记账的智能数据导入工具，支持多种格式转换和智能识别',
    releaseDate: '2025年6月',
    githubUrl: 'https://github.com/zj591227045/zhiweijz_import_records',
    category: '工具/数据处理',
    tags: ['数据导入', '格式转换', '智能识别'],
    status: 'completed',
    features: [
      '多格式支持',
      '智能字段匹配',
      '数据清洗转换',
      '批量导入处理',
      '错误检查修正'
    ],
    techStack: ['Python', 'Pandas', 'PyQt', 'SQLite']
  }
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id)
}

export const getProjectsByCategory = (category: string): Project[] => {
  return projects.filter(project => project.category === category)
}

export const getCompletedProjects = (): Project[] => {
  return projects.filter(project => project.status === 'completed')
}

export const getProjectStats = () => {
  const total = 100
  const completed = projects.filter(p => p.status === 'completed').length
  const inProgress = projects.filter(p => p.status === 'in-progress').length
  const planned = projects.filter(p => p.status === 'planned').length
  
  return {
    total,
    completed,
    inProgress,
    planned,
    completionRate: (completed / total * 100).toFixed(1)
  }
} 