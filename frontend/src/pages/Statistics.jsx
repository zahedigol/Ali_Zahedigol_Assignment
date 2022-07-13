/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { Row, Col, Button, Spin, message, Select } from 'antd'
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'

import Table from '../components/Table'
import BarChart from '../components/Chart'
import { logout, fetchData, deleteData, update } from '../api'

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
  width: 90vw;
  padding: 1rem 2rem;
  & .ant-form-item-label {
    padding: 0;
  }
`

const Info = styled(Col)`
  border-bottom: 1px solid grey;
  margin-bottom: 2rem;
`

function Statistics() {
  const [loading, setLoading] = useState(false)
  const [userInfo, setUserInfo] = useState()
  const [countryList, setCountryList] = useState([])
  const [userCity, setUserCity] = useState([])
  const [saleList, setSaleList] = useState([])

  const [mode, setMode] = useState(1)
  const token = localStorage.getItem('token')
  const navigate = useNavigate()

  const { Option } = Select

  // fetch initial values
  useEffect(() => {
    setLoading(true)
    if (token) {
      fetchData('/api/users/my/', token)
        .then((response) => response.json())
        .then((result) => {
          setUserInfo(result)
          setLoading(false)
        })
      fetchData('/api/sales/', token)
        .then((response) => response.json())
        .then((result) => {
          setSaleList(result)
          setLoading(false)
        })
      fetchData('/api/countries/', token)
        .then((response) => response.json())
        .then((result) => {
          setCountryList(result)
          setLoading(false)
        })
    }
  }, [token])

  useEffect(() => {
    if (!userInfo?.city || countryList.length === 0) return
    const cities = countryList && countryList[parseInt(userInfo?.country, 10) - 1].cities
    const city = cities?.find((item) => item.id === userInfo.city).name
    setUserCity(city)
  }, [countryList])

  const onUpdateSaleRecord = (id, event) => {
    const formdata = new FormData()
    formdata.append('revenue', event.revenue)
    formdata.append('sales_number', event.sales_number)

    update(formdata, `/api/sales/${id}/`, token)
      .then((response) => response.json())
      .then((data) => {
        message.success('sale Updated successfully')
        setSaleList(saleList.map((item) => (item.id === id ? data : item)))
      })
      .catch(() => message.error('something went wrong!'))
  }
  const onRemoveSaleRecord = (id) => {
    deleteData(`/api/sales/${id}/`, token)
      .then(() => {
        message.success('item deleted!')
        setSaleList(saleList.filter((item) => item.id !== id))
      })
      .catch(() => message.error('item deleted,refresh the page'))
  }

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
        <Col xs={24} style={{ height: 'fit-content', paddingBottom: '2rem' }}>
          <Row justify="end">
            <Button type="primary" style={{ marginRight: 8 }}>
              <Link to="/new-data">Add Data</Link>
            </Button>

            <Button
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
        <Col xs={24} style={{ marginBottom: 12 }}>
          <h1 style={{ fontWeight: 'bold' }}>personal information</h1>
        </Col>
        <Info xs={{ span: 11 }}>
          <Row justify="space-between" align="bottom">
            <p style={{ fontWeight: 'bold' }}>Name</p>
            <p>
              {userInfo?.first_name} {userInfo?.last_name}
            </p>
          </Row>
        </Info>
        <Info xs={{ span: 11, offset: 2 }}>
          <Row justify="space-between" align="bottom">
            <p style={{ fontWeight: 'bold' }}>Email</p>
            <p>{userInfo?.email}</p>
          </Row>
        </Info>
        <Info xs={{ span: 11 }}>
          <Row justify="space-between" align="bottom">
            <p style={{ fontWeight: 'bold' }}>Age</p>
            <p>{userInfo?.age}</p>
          </Row>
        </Info>
        <Info xs={{ span: 11, offset: 2 }}>
          <Row justify="space-between" align="bottom">
            <p style={{ fontWeight: 'bold' }}>Country</p>
            <p>{countryList ? countryList?.find((item) => item?.id === userInfo?.country)?.name : ''}</p>
          </Row>
        </Info>
        <Info xs={{ span: 11 }}>
          <Row justify="space-between" align="bottom">
            <p style={{ fontWeight: 'bold' }}>Gender</p>
            <p>{userInfo?.gender === 1 ? 'male' : 'female'}</p>
          </Row>
        </Info>
        <Info xs={{ span: 11, offset: 2 }}>
          <Row justify="space-between" align="bottom">
            <p style={{ fontWeight: 'bold' }}>City</p>
            <p>{userCity}</p>
          </Row>
        </Info>
        <Col md={11}>
          {' '}
          <Table dataSource={saleList} onRemoveRecord={onRemoveSaleRecord} onUpdateRecord={onUpdateSaleRecord} />
        </Col>
        <Col xs={24} md={{ span: 11, offset: 2 }}>
          <Row justify="end">
            <Select onChange={(e) => setMode(e)} defaultValue="sales" style={{ width: 200 }}>
              <Option value={1}>sales number</Option>
              <Option value={2}>revenue</Option>
            </Select>
          </Row>
          <BarChart mode={mode} saleList={saleList} />
        </Col>
      </Container>
    </Layout>
  )
}

export default Statistics
