'use client'

import data from '@/../product/sections/messaging/data.json'
import { Messaging } from './components/Messaging'

// Type assertion for the imported JSON data
const messagingData = data as {
  conversations: typeof data.conversations
  currentConversation: typeof data.currentConversation
  currentUser: typeof data.currentUser
}

export default function MessagingPreview() {
  return (
    <Messaging
      conversations={messagingData.conversations}
      currentConversation={messagingData.currentConversation}
      currentUser={messagingData.currentUser}
      onSendMessage={(content) => console.log('Send message:', content)}
      onSendImage={(file) => console.log('Send image:', file.name)}
      onConversationSelect={(id) => console.log('Select conversation:', id)}
      onMessageReply={(id) => console.log('Reply to message:', id)}
      onMessageReact={(id, emoji) => console.log('React to message:', id, emoji)}
      onMessageRetract={(id) => console.log('Retract message:', id)}
    />
  )
}
