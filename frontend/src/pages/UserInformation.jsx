/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { Row, Col, Button, Form, Input, Select, Spin, message } from 'antd'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { fetchData, logout, update, post } from '../api'

const Layout = styled(Row)`
  background-color: #f6f6f6;
  padding: 1rem 0;
  min-height: 100vh;
  min-width: 100vw;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Container = styled(Row)`
  background-color: #fff;
  width: 80vw;
  padding: 1rem 2rem;
  & .ant-form-item-label {
    padding: 0;
  }
`

function UserInformation() {
  const token = localStorage.getItem('token')
  const [userForm] = Form.useForm()
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const [userInfo, setUserInfo] = useState()
  const [countryList, setCountryList] = useState([])
  const [countryID, setCountryID] = useState()
  const [cityID, setCityID] = useState()
  const [cityList, setCityList] = useState([])
  const [file, setFile] = useState()
  const [textCSV, setTextCSV] = useState()
  useEffect(() => {
    setLoading(true)
    fetchData('/api/users/my/', token)
      .then((response) => response.json())
      .then((result) => {
        setUserInfo(result)
        setLoading(false)
      })
    fetchData('/api/countries/', token)
      .then((response) => response.json())
      .then((result) => {
        setCountryList(result)
        setLoading(false)
      })
  }, [])

  const handleCityChange = (e) => {
    userForm.setFieldsValue({ city: e?.toString() })
    setCityID(e)
  }

  const handleCountryChange = (e) => {
    handleCityChange(null)
    const country = countryList.find((item) => item.id === +e)
    setCityList(country.cities)
    setCountryID(e)
    userForm.setFieldsValue({ country: e?.toString() })
  }

  useEffect(() => {
    if (!userInfo?.city || countryList.length === 0) return
    const cities = countryList && countryList[parseInt(userInfo?.country, 10) - 1].cities
    handleCountryChange(userInfo?.country)
    const city = cities?.find((item) => item.id === userInfo.city)?.id
    handleCityChange(city)
  }, [countryList, userInfo])

  const handleFinishInfoForm = (e) => {
    const formdata = new FormData()
    formdata.append('email', e.email)
    formdata.append('first_name', e.firstName)
    formdata.append('last_name', e.lastName)
    formdata.append('gender', e.gender)
    formdata.append('age', e.age)
    formdata.append('city', cityID ?? '')

    update(formdata, `/api/users/${userInfo?.id}/`, token)
      .then((response) => response.json())
      .then((data) => {
        setUserInfo(data)
        message.success('user Updated successfully')
      })
      .catch(() => message.error('something went wrong!'))
  }

  const onFileUpload = () => {
    const formData = new FormData()
    formData.append('csv', file)
    post(formData, '/api/sales/import-csv/', token)
      .then((response) => response.json())
      .then((result) => {
        if (result?.error) {
          message.error(result?.error)
        } else {
          message.success('file uploaded!')
        }
      })
      .catch((_) => {
        message.error('something went wrong! try again')
      })
  }
  const textFileUpload = () => {
    const blob = new Blob([textCSV], { type: 'text/csv;charset=utf-8;', filename: 'data.csv' })
    const formData = new FormData()
    formData.append('csv', blob)
    post(formData, '/api/sales/import-csv/', token)
      .then((response) => response.json())
      .then((result) => {
        if (result?.error) {
          message.error(result?.error)
        } else {
          message.success('file uploaded!')
        }
      })
      .catch((_) => {
        message.error('something went wrong! try again')
      })
  }

  const onFileChange = (event) => {
    setFile(event.target.files[0])
  }

  const handleTextCSVChange = (event) => {
    setTextCSV(event.target.value)
  }

  const { Option } = Select
  const { TextArea } = Input
  if (loading) {
    return (
      <Row justify="center" align="middle" style={{ width: '100vw', height: '100vh' }}>
        <Spin size="large" />
      </Row>
    )
  }
  return (
    <Layout justify="center">
      <Container>
        <Col xs={24} style={{ height: 'fit-content' }}>
          <Row justify="end">
            <Button type="primary" onClick={() => navigate('/', { replace: true })}>
              Homepage
            </Button>
            <Button
              style={{ marginLeft: 8 }}
              type="primary"
              onClick={() => {
                logout(token).then((res) => {
                  if (res.status === 200) {
                    localStorage.clear('token')
                    navigate('/auth/login', { replace: true })
                  }
                })
              }}
            >
              Log out
            </Button>
          </Row>
        </Col>
        <Col xs={24}>
          <Form requiredMark="optional" onFinish={handleFinishInfoForm} form={userForm}>
            <Row>
              <Col md={{ span: 7, offset: 1 }}>
                <Form.Item
                  name="firstName"
                  style={{ margin: 0 }}
                  label="name:"
                  initialValue={userInfo?.first_name}
                  labelCol={{ span: 24 }}
                  rules={[
                    {
                      required: true,
                      message: 'please enter your name',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col md={{ span: 7, offset: 1 }}>
                <Form.Item
                  name="lastName"
                  style={{ margin: 0 }}
                  label="last name:"
                  initialValue={userInfo?.last_name}
                  labelCol={{ span: 24 }}
                  rules={[
                    {
                      required: true,
                      message: 'please enter your last name',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col md={{ span: 7, offset: 1 }}>
                <Form.Item
                  name="gender"
                  style={{ margin: 0 }}
                  label="gender:"
                  initialValue={userInfo?.gender?.toString()}
                  labelCol={{ span: 24 }}
                  rules={[
                    {
                      required: true,
                      message: 'please enter your gender',
                    },
                  ]}
                >
                  <Select>
                    <Option value="1">Male</Option>
                    <Option value="2">female</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col md={{ span: 7, offset: 1 }}>
                <Form.Item
                  name="age"
                  style={{ margin: 0 }}
                  label="age:"
                  initialValue={userInfo?.age}
                  labelCol={{ span: 24 }}
                  rules={[
                    {
                      required: true,
                      message: 'please enter your age',
                    },
                  ]}
                >
                  <Input type="number" />
                </Form.Item>
              </Col>
              <Col md={{ span: 7, offset: 1 }}>
                <Form.Item
                  name="email"
                  style={{ margin: 0 }}
                  label="email:"
                  labelCol={{ span: 24 }}
                  initialValue={userInfo?.email}
                  rules={[
                    {
                      required: true,
                      message: 'please enter your email address',
                    },
                  ]}
                >
                  <Input type="email" allowClear />
                </Form.Item>
              </Col>
              <Col md={{ span: 7, offset: 1 }}>
                <Form.Item
                  name="country"
                  style={{ margin: 0 }}
                  label="country:"
                  labelCol={{ span: 24 }}
                  rules={[
                    {
                      required: false,
                      message: 'please enter country',
                    },
                  ]}
                >
                  <Select
                    showSearch
                    onChange={handleCountryChange}
                    filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
                  >
                    {countryList.map((item) => {
                      return <Option key={item.id.toString()}>{item.name}</Option>
                    })}
                  </Select>
                </Form.Item>
              </Col>
              <Col md={{ span: 7, offset: 1 }}>
                <Form.Item
                  name="city"
                  style={{ margin: 0 }}
                  label="city:"
                  labelCol={{ span: 24 }}
                  rules={[
                    {
                      required: false,
                      message: 'please enter city',
                    },
                  ]}
                >
                  <Select
                    disabled={!countryID}
                    filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
                    showSearch
                    onChange={handleCityChange}
                  >
                    {cityList.map((item) => (
                      <Option key={item.id.toString()}>{item.name}</Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
              <Col span={24} offset={1} style={{ marginTop: 12 }}>
                <Button htmlType="submit">Update user Data</Button>
              </Col>
            </Row>
          </Form>
        </Col>

        <Col md={{ span: 23, offset: 1 }} style={{ marginTop: 16 }}>
          <h2>Input data</h2>
          <Input type="file" name="file" onChange={onFileChange} accept=".csv" />
          <Button type="primary" onClick={onFileUpload}>
            Upload
          </Button>
        </Col>
        <Col md={{ span: 23, offset: 1 }} style={{ marginTop: 16 }}>
          <h2>Input data</h2>
          <Form>
            <TextArea placeholder="you can type here" rows={6} onChange={handleTextCSVChange} />
            <Row justify="center" style={{ marginTop: 8 }}>
              <Button
                type="primary"
                htmlType="submit"
                onClick={() => {
                  textFileUpload()
                  return false
                }}
              >
                Upload
              </Button>
            </Row>
          </Form>
        </Col>
      </Container>
    </Layout>
  )
}

export default UserInformation
