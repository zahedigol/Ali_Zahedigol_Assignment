/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Col, Row, Input, Button, Form, message } from 'antd'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { postUserData } from '../../api'

const Container = styled(Row)`
  background-color: #f6f6f6;
  width: 100vw;
  height: 100vh;
`

const FormContainer = styled(Col)`
  background-color: #fff;
  border-radius: 4px;
  padding: 8px;
`

const FormItem = styled(Row)`
  margin: 12px 0;
  & .ant-form-item-label {
    padding: 0;
  }
`

function Login() {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const post = async (event) => {
    setLoading(true)
    await postUserData(event)
      .then((res) => {
        if (res.status === 200) {
          localStorage.setItem('token', res.data.access_token)
          setLoading(false)
          navigate('/', { replace: true })
        }
      })
      .catch(() => {
        message.error('wrong email or password!')
        setLoading(false)
      })
  }
  // if (token) {
  //   return <Navigate to="/" />;
  // }
  return (
    <Container justify="center" align="middle">
      <FormContainer xs={14} md={10}>
        <Form onFinish={post} requiredMark="optional">
          <Row justify="center">
            <h1>Login</h1>
          </Row>
          <FormItem justify="center">
            <Col md={14}>
              <Form.Item
                name="email"
                style={{ margin: 0 }}
                label="email:"
                labelCol={{ span: 24 }}
                rules={[
                  {
                    required: true,
                    message: 'please enter your email address',
                  },
                ]}
              >
                <Input type="email" placeholder="example@example.co" allowClear />
              </Form.Item>
            </Col>
          </FormItem>
          <FormItem justify="center">
            <Col md={14}>
              <Form.Item
                name="password"
                style={{ margin: 0 }}
                label="password : "
                labelCol={{ span: 24 }}
                rules={[{ required: true, message: 'please enter your password' }]}
              >
                <Input type="password" placeholder="********" allowClear />
              </Form.Item>
            </Col>
          </FormItem>
          <FormItem justify="center">
            <Button htmlType="submit" type="primary" loading={loading}>
              click
            </Button>
          </FormItem>
        </Form>
      </FormContainer>
    </Container>
  )
}

export default Login
