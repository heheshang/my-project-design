'use client'

import data from '@/../product/sections/file-transfer/data.json'
import { FileTransfer } from './components/FileTransfer'

// Type assertion for the imported JSON data
const fileTransferData = data as {
  users: typeof data.users
  fileTransfers: typeof data.fileTransfers
}

// Create users map
const usersMap = fileTransferData.users.reduce((acc, user) => {
  acc[user.id] = user
  return acc
}, {} as Record<string, typeof fileTransferData.users[0]>)

export default function FileTransferPreview() {
  return (
    <FileTransfer
      currentUser={{
        id: 'user-1',
        name: '张伟',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ZhangWei'
      }}
      fileTransfers={fileTransferData.fileTransfers}
      users={usersMap}
      onPause={(id) => console.log('Pause transfer:', id)}
      onResume={(id) => console.log('Resume transfer:', id)}
      onCancel={(id) => console.log('Cancel transfer:', id)}
      onRetry={(id) => console.log('Retry transfer:', id)}
      onOpenFolder={(id) => console.log('Open folder:', id)}
      onRedownload={(id) => console.log('Redownload:', id)}
      onSendFile={(files) => console.log('Send files:', files.map(f => f.name))}
    />
  )
}
