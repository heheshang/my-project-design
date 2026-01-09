'use client'

import data from '@/../product/sections/basic-settings/data.json'
import { BasicSettings } from './components/BasicSettings'

export default function BasicSettingsPreview() {
  return (
    <BasicSettings
      user={data.user}
      networkConfig={data.networkConfig}
      networkStatus={data.networkStatus}
      activeTab="profile"
      onTabChange={(tab) => console.log('Tab changed:', tab)}
      onUpdateUser={(user) => console.log('Update user:', user)}
      onUploadAvatar={(file) => console.log('Upload avatar:', file.name)}
      onStatusChange={(status) => console.log('Status changed:', status)}
      onSaveNetworkConfig={(config) => console.log('Save network config:', config)}
      onCancelNetworkConfig={() => console.log('Cancel network config')}
    />
  )
}
