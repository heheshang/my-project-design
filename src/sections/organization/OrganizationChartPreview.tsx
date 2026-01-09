'use client'

import data from '@/../product/sections/organization/data.json'
import { OrganizationChart } from './components/OrganizationChart'

// Type assertion for the imported JSON data
const organizationData = data as {
  departments: typeof data.departments
  users: typeof data.users
}

export default function OrganizationChartPreview() {
  return (
    <OrganizationChart
      currentUser={{
        id: 'user-1',
        name: '张伟',
        pinyin: 'zhangwei',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ZhangWei',
        position: '前端工程师',
        department: '前端组',
        departmentId: 'dept-tech-frontend',
        status: 'online',
        email: 'zhangwei@company.com',
        phone: '138-0001-0001'
      }}
      departments={organizationData.departments}
      users={organizationData.users}
      onDepartmentSelect={(id) => console.log('Select department:', id)}
      onStartChat={(userId) => console.log('Start chat:', userId)}
      onViewDetails={(userId) => console.log('View details:', userId)}
      onSearch={(query) => console.log('Search:', query)}
    />
  )
}
