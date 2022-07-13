/* eslint-disable react/jsx-props-no-spreading */
import { UploadOutlined } from '@ant-design/icons'
import { Button, Upload as AntUpload, message } from 'antd'
import React from 'react'

function Upload() {
  const token = localStorage.getItem('token')

  const props = {
    name: 'file',
    action: 'http://localhost:5000/posts',
    headers: {
      authorization: `Bearer ${token}`,
    },

    onChange(info) {
      if (info.file.status !== 'uploading') {
        message.success(`${info.file.name} file uploaded done`)
      }

      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`)
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`)
      }
    },
  }

  return (
    <AntUpload accept=".csv" {...props}>
      <Button icon={<UploadOutlined />}>Click to Upload</Button>
    </AntUpload>
  )
}

export default Upload
