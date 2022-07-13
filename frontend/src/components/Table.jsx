import { Popconfirm, Table as AntTable, Typography, Form, Input, Row, Button, Modal } from 'antd'

import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const StyledTable = styled(AntTable)`
  .editable-row .ant-form-item-explain {
    position: absolute;
    top: 100%;
    font-size: 12px;
  }
`

function Table({ dataSource, onRemoveRecord, onUpdateRecord }) {
  const [currentRecord, setCurrentRecord] = useState()
  const [visibleModal, setVisibleModal] = useState(false)
  const [form] = Form.useForm()

  useEffect(() => {
    if (visibleModal) {
      const record = dataSource.find((r) => r.id === currentRecord)
      form.setFieldsValue({
        sales_number: record.sales_number,
        revenue: record.revenue,
      })
    }
  }, [visibleModal])
  const columns = [
    {
      title: 'Date',
      dataIndex: 'date',
      editable: false,
    },
    {
      title: 'Product',
      dataIndex: 'product',
      editable: false,
    },
    {
      title: 'Number',
      dataIndex: 'sales_number',
      editable: true,
    },
    {
      title: 'Revenue',
      dataIndex: 'revenue',
      editable: true,
    },
    {
      title: 'Operation',
      dataIndex: 'operation',
      render: (_, record) => {
        return (
          <>
            <Typography.Link
              onClick={() => {
                setVisibleModal(true)
                setCurrentRecord(record.id)
              }}
            >
              Edit
            </Typography.Link>
            <Popconfirm title="Sure to delete?" onConfirm={() => onRemoveRecord(record.id)}>
              <Typography.Link style={{ color: 'red', marginLeft: 6 }}>delete</Typography.Link>
            </Popconfirm>
          </>
        )
      },
    },
  ]

  return (
    <>
      <StyledTable
        bordered
        rowKey="id"
        dataSource={dataSource}
        columns={columns}
        rowClassName="editable-row"
        pagination={false}
      />
      <Modal title="edit Product" footer={false} visible={visibleModal} onCancel={() => setVisibleModal(false)}>
        <Form
          onFinish={(e) => {
            onUpdateRecord(currentRecord, e)
            setVisibleModal(false)
          }}
          requiredMark="optional"
          form={form}
        >
          <Form.Item
            name="revenue"
            label="new revenue"
            labelCol={{ span: 24 }}
            rules={[
              {
                required: true,
                message: 'please enter new revenue',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="sales_number"
            label="new sales number"
            labelCol={{ span: 24 }}
            rules={[
              {
                required: true,
                message: 'please enter new sales number',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Row justify="center">
            <Button htmlType="submit" type="primary">
              {' '}
              Edit
            </Button>
          </Row>
        </Form>
      </Modal>
    </>
  )
}

export default Table
