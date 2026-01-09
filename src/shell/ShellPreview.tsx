'use client'

import { AppShell } from './components/AppShell'
import { MessageSquare, Users, Building2 } from 'lucide-react'

export default function ShellPreview() {
  const navigationItems = [
    {
      id: 'chat',
      label: '聊天',
      icon: 'chat',
      href: '/chat',
      isActive: true,
    },
    {
      id: 'contacts',
      label: '通讯录',
      icon: 'contacts',
      href: '/contacts',
    },
    {
      id: 'organization',
      label: '组织架构',
      icon: 'organization',
      href: '/organization',
    },
  ]

  const currentUser = {
    name: '张三',
    avatarUrl: undefined,
    status: 'online' as const,
  }

  return (
    <AppShell
      navigationItems={navigationItems}
      currentUser={currentUser}
      activeNav="chat"
      onNavigate={(id) => console.log('Navigate to:', id)}
      onSettings={() => console.log('Open settings')}
      onLogout={() => console.log('Logout')}
    >
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <MessageSquare className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-2">
            欢迎使用飞秋
          </h2>
          <p className="text-slate-600 dark:text-slate-400">
            选择一个会话开始聊天
          </p>
        </div>
      </div>
    </AppShell>
  )
}
