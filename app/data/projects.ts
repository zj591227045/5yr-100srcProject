export interface Project {
  id: string;
  name: string;
  description: string;
  releaseDate: string;
  githubUrl: string;
  category: string;
  tags: string[];
  status: 'completed' | 'in-progress' | 'planned';
  docUrl?: string;
}

export const projects: Project[] = [
  {
    id: 'ai-debate',
    name: 'AI-Debate',
    description: '基于AI模型的辩论平台，支持角色定制、实时评分和多种辩论格式',
    releaseDate: '2025年3月',
    githubUrl: 'https://github.com/zj591227045/Ai-Debate',
    category: 'AI机器学习',
    tags: ['AI', '辩论', 'NLP'],
    status: 'completed'
  },
  {
    id: 'deep-stress-model',
    name: 'DeepStressModel',
    description: 'AI模型压力测试工具，评估模型性能和稳定性',
    releaseDate: '2025年3月',
    githubUrl: 'https://github.com/zj591227045/DeepStressModel',
    category: 'AI机器学习',
    tags: ['AI', '压力测试', '性能评估'],
    status: 'completed'
  },
  {
    id: 'astrbot-plugin-merge-wemsg',
    name: 'astrbot_plugin_Merge_WeMSG',
    description: '适用于AstrBot的微信聊天消息合并插件',
    releaseDate: '2025年4月',
    githubUrl: 'https://github.com/zj591227045/astrbot_plugin_Merge_WeMSG',
    category: '工具/插件',
    tags: ['微信', '消息合并', 'AstrBot'],
    status: 'completed'
  },
  {
    id: 'wxauto-mgt',
    name: 'WXAUTO-MGT',
    description: '微信自动化管理系统，提供微信机器人管理和监控功能',
    releaseDate: '2025年5月',
    githubUrl: 'https://github.com/zj591227045/WXAUTO-MGT',
    category: '自动化管理',
    tags: ['微信', '自动化', '机器人管理'],
    status: 'completed',
    docUrl: '/wxauto-mgt/index.html'
  },
  {
    id: 'wxauto-http-api',
    name: 'WXAUTO-HTTP-API',
    description: '微信自动化HTTP API接口，支持远程调用微信功能',
    releaseDate: '2025年5月',
    githubUrl: 'https://github.com/zj591227045/WXAUTO-HTTP-API',
    category: 'API/接口',
    tags: ['微信', 'HTTP API', '远程调用'],
    status: 'completed'
  },
  {
    id: 'zhiweijz',
    name: '只为记账',
    description: '简洁高效的个人记账应用，支持多账户管理和数据分析',
    releaseDate: '2025年6月',
    githubUrl: 'https://github.com/zj591227045/zhiweijz',
    category: '生活工具',
    tags: ['记账', '财务管理', '数据分析'],
    status: 'completed'
  },
  {
    id: 'wxauto4zhiweijz',
    name: '只为记账-微信助手',
    description: '只为记账应用的微信机器人助手，支持语音记账和智能分类',
    releaseDate: '2025年6月',
    githubUrl: 'https://github.com/zj591227045/wxauto4zhiweijz',
    category: '生活工具',
    tags: ['微信机器人', '语音记账', '智能分类'],
    status: 'completed'
  },
  {
    id: 'zhiweijz-import-records',
    name: '智能导入工具',
    description: '只为记账的智能数据导入工具，支持多种格式转换和智能识别',
    releaseDate: '2025年6月',
    githubUrl: 'https://github.com/zj591227045/zhiweijz_import_records',
    category: '工具/数据处理',
    tags: ['数据导入', '格式转换', '智能识别'],
    status: 'completed'
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