'use client'

import data from '@/../product/sections/collaboration/data.json'
import { CollaborationTools } from './components/CollaborationTools'

// Type assertion for the imported JSON data
const collaborationData = data as {
  users: typeof data.users
  screenshots: typeof data.screenshots
}

// Create users map
const usersMap = collaborationData.users.reduce((acc, user) => {
  acc[user.id] = user
  return acc
}, {} as Record<string, typeof collaborationData.users[0]>)

export default function CollaborationToolsPreview() {
  return (
    <CollaborationTools
      currentUser={{
        id: 'user-1',
        name: '张伟',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ZhangWei'
      }}
      screenshots={collaborationData.screenshots}
      users={usersMap}
      onScreenshot={(type) => console.log('Take screenshot:', type)}
      onSave={(id) => console.log('Save screenshot:', id)}
      onCopy={(id) => console.log('Copy screenshot:', id)}
      onSendToContact={(id, contactId) => console.log('Send to contact:', id, contactId)}
      onSendToChat={(id, conversationId) => console.log('Send to chat:', id, conversationId)}
      onUndo={() => console.log('Undo')}
      onRedo={() => console.log('Redo')}
    />
  )
}
