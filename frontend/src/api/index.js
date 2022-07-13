/* eslint-disable import/prefer-default-export */
import axios from 'axios'

axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL

export const postUserData = (data) => {
  const formdata = new FormData()
  formdata.append('username', data.email)
  formdata.append('password', data.password)
  formdata.append('client_id', process.env.REACT_APP_CLIENT_ID)
  formdata.append('client_secret', process.env.REACT_APP_CLIENT_SECRET)
  formdata.append('grant_type', 'password')
  return axios({
    url: '/oauth/token/',
    method: 'post',
    data: formdata,
    headers: {
      Accept: 'application/json',
      'content-type': 'application/json',
    },
  })
}

export const logout = (data) => {
  const myHeaders = new Headers()
  myHeaders.append('Authorization', `Bearer ${data}`)
  const formdata = new FormData()
  formdata.append('token', data)
  formdata.append('client_id', process.env.REACT_APP_CLIENT_ID)
  formdata.append('client_secret', process.env.REACT_APP_CLIENT_SECRET)
  return axios({
    url: '/oauth/revoke_token/',
    method: 'post',
    data: formdata,
    headers: myHeaders,
  })
}

export const fetchData = (url, token) => {
  const myHeaders = new Headers()
  myHeaders.append('Authorization', `Bearer ${token}`)
  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
  }
  return fetch(`${process.env.REACT_APP_API_BASE_URL}${url}`, requestOptions)
}

export const update = (data, url, token) => {
  const myHeaders = new Headers()
  const requestOptions = {
    method: 'PATCH',
    headers: myHeaders,
    body: data,
    redirect: 'follow',
  }
  myHeaders.append('Authorization', `Bearer ${token}`)
  return fetch(`${process.env.REACT_APP_API_BASE_URL}${url}`, requestOptions)
}

export const post = (data, url, token) => {
  const myHeaders = new Headers()
  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: data,
    redirect: 'follow',
  }
  myHeaders.append('Authorization', `Bearer ${token}`)
  return fetch(`${process.env.REACT_APP_API_BASE_URL}${url}`, requestOptions)
}
export const deleteData = (url, token) => {
  const myHeaders = new Headers()
  const requestOptions = {
    method: 'DELETE',
    headers: myHeaders,
  }
  myHeaders.append('Authorization', `Bearer ${token}`)
  return fetch(`${process.env.REACT_APP_API_BASE_URL}${url}`, requestOptions)
}
