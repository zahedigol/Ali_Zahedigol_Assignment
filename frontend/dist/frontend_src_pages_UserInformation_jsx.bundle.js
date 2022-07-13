"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(globalThis["webpackChunkassignment"] = globalThis["webpackChunkassignment"] || []).push([["frontend_src_pages_UserInformation_jsx"],{

/***/ "./frontend/src/api/index.js":
/*!***********************************!*\
  !*** ./frontend/src/api/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"deleteData\": () => (/* binding */ deleteData),\n/* harmony export */   \"fetchData\": () => (/* binding */ fetchData),\n/* harmony export */   \"logout\": () => (/* binding */ logout),\n/* harmony export */   \"post\": () => (/* binding */ post),\n/* harmony export */   \"postUserData\": () => (/* binding */ postUserData),\n/* harmony export */   \"update\": () => (/* binding */ update)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* eslint-disable import/prefer-default-export */\n\n(axios__WEBPACK_IMPORTED_MODULE_0___default().defaults.baseURL) = \"http://127.0.0.1:8000\";\nconst postUserData = data => {\n  const formdata = new FormData();\n  formdata.append('username', data.email);\n  formdata.append('password', data.password);\n  formdata.append('client_id', \"C8Qp0eQnhosJ9Z1DNd7UvQ5M9tiMT4pleqlWkqW3\");\n  formdata.append('client_secret', \"b49eoIqNsMEtUhlGjymYabD14AbfCWx99Z0bcsO82AYweB9ZaZJJtZARmDx1f1QN3kjy7IpKYuuZzynUy7NDpeRVZcFPA8XaHR1pAXvVeBNMh9dxvZjqknSrqvwzDkRd\");\n  formdata.append('grant_type', 'password');\n  return axios__WEBPACK_IMPORTED_MODULE_0___default()({\n    url: '/oauth/token/',\n    method: 'post',\n    data: formdata,\n    headers: {\n      Accept: 'application/json',\n      'content-type': 'application/json'\n    }\n  });\n};\nconst logout = data => {\n  const myHeaders = new Headers();\n  myHeaders.append('Authorization', `Bearer ${data}`);\n  const formdata = new FormData();\n  formdata.append('token', data);\n  formdata.append('client_id', \"C8Qp0eQnhosJ9Z1DNd7UvQ5M9tiMT4pleqlWkqW3\");\n  formdata.append('client_secret', \"b49eoIqNsMEtUhlGjymYabD14AbfCWx99Z0bcsO82AYweB9ZaZJJtZARmDx1f1QN3kjy7IpKYuuZzynUy7NDpeRVZcFPA8XaHR1pAXvVeBNMh9dxvZjqknSrqvwzDkRd\");\n  return axios__WEBPACK_IMPORTED_MODULE_0___default()({\n    url: '/oauth/revoke_token/',\n    method: 'post',\n    data: formdata,\n    headers: myHeaders\n  });\n};\nconst fetchData = (url, token) => {\n  const myHeaders = new Headers();\n  myHeaders.append('Authorization', `Bearer ${token}`);\n  const requestOptions = {\n    method: 'GET',\n    headers: myHeaders,\n    redirect: 'follow'\n  };\n  return fetch(`${\"http://127.0.0.1:8000\"}${url}`, requestOptions);\n};\nconst update = (data, url, token) => {\n  const myHeaders = new Headers();\n  const requestOptions = {\n    method: 'PATCH',\n    headers: myHeaders,\n    body: data,\n    redirect: 'follow'\n  };\n  myHeaders.append('Authorization', `Bearer ${token}`);\n  return fetch(`${\"http://127.0.0.1:8000\"}${url}`, requestOptions);\n};\nconst post = (data, url, token) => {\n  const myHeaders = new Headers();\n  const requestOptions = {\n    method: 'POST',\n    headers: myHeaders,\n    body: data,\n    redirect: 'follow'\n  };\n  myHeaders.append('Authorization', `Bearer ${token}`);\n  return fetch(`${\"http://127.0.0.1:8000\"}${url}`, requestOptions);\n};\nconst deleteData = (url, token) => {\n  const myHeaders = new Headers();\n  const requestOptions = {\n    method: 'DELETE',\n    headers: myHeaders\n  };\n  myHeaders.append('Authorization', `Bearer ${token}`);\n  return fetch(`${\"http://127.0.0.1:8000\"}${url}`, requestOptions);\n};\n\n//# sourceURL=webpack://assignment/./frontend/src/api/index.js?");

/***/ }),

/***/ "./frontend/src/pages/UserInformation.jsx":
/*!************************************************!*\
  !*** ./frontend/src/pages/UserInformation.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/row/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/form/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/message/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/select/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/input/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/spin/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/col/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/button/index.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/index.js\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api */ \"./frontend/src/api/index.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* eslint-disable no-unused-vars */\n\n\n\n\n\n\n\nconst Layout = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(antd__WEBPACK_IMPORTED_MODULE_4__[\"default\"])`\n  background-color: #f6f6f6;\n  padding: 1rem 0;\n  min-height: 100vh;\n  min-width: 100vw;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n`;\nconst Container = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(antd__WEBPACK_IMPORTED_MODULE_4__[\"default\"])`\n  background-color: #fff;\n  width: 80vw;\n  padding: 1rem 2rem;\n  & .ant-form-item-label {\n    padding: 0;\n  }\n`;\n\nfunction UserInformation() {\n  const token = localStorage.getItem('token');\n  const [userForm] = antd__WEBPACK_IMPORTED_MODULE_5__[\"default\"].useForm();\n  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useNavigate)();\n  const [userInfo, setUserInfo] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();\n  const [countryList, setCountryList] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n  const [countryID, setCountryID] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();\n  const [cityID, setCityID] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();\n  const [cityList, setCityList] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n  const [file, setFile] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();\n  const [textCSV, setTextCSV] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    setLoading(true);\n    (0,_api__WEBPACK_IMPORTED_MODULE_1__.fetchData)('/api/users/my/', token).then(response => response.json()).then(result => {\n      setUserInfo(result);\n      setLoading(false);\n    });\n    (0,_api__WEBPACK_IMPORTED_MODULE_1__.fetchData)('/api/countries/', token).then(response => response.json()).then(result => {\n      setCountryList(result);\n      setLoading(false);\n    });\n  }, []);\n\n  const handleCityChange = e => {\n    userForm.setFieldsValue({\n      city: e?.toString()\n    });\n    setCityID(e);\n  };\n\n  const handleCountryChange = e => {\n    handleCityChange(null);\n    const country = countryList.find(item => item.id === +e);\n    setCityList(country.cities);\n    setCountryID(e);\n    userForm.setFieldsValue({\n      country: e?.toString()\n    });\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    if (!userInfo?.city || countryList.length === 0) return;\n    const cities = countryList && countryList[parseInt(userInfo?.country, 10) - 1].cities;\n    handleCountryChange(userInfo?.country);\n    const city = cities?.find(item => item.id === userInfo.city)?.id;\n    handleCityChange(city);\n  }, [countryList, userInfo]);\n\n  const handleFinishInfoForm = e => {\n    const formdata = new FormData();\n    formdata.append('email', e.email);\n    formdata.append('first_name', e.firstName);\n    formdata.append('last_name', e.lastName);\n    formdata.append('gender', e.gender);\n    formdata.append('age', e.age);\n    formdata.append('city', cityID ?? '');\n    (0,_api__WEBPACK_IMPORTED_MODULE_1__.update)(formdata, `/api/users/${userInfo?.id}/`, token).then(response => response.json()).then(data => {\n      setUserInfo(data);\n      antd__WEBPACK_IMPORTED_MODULE_7__[\"default\"].success('user Updated successfully');\n    }).catch(() => antd__WEBPACK_IMPORTED_MODULE_7__[\"default\"].error('something went wrong!'));\n  };\n\n  const onFileUpload = () => {\n    const formData = new FormData();\n    formData.append('csv', file);\n    (0,_api__WEBPACK_IMPORTED_MODULE_1__.post)(formData, '/api/sales/import-csv/', token).then(response => response.json()).then(result => {\n      if (result?.error) {\n        antd__WEBPACK_IMPORTED_MODULE_7__[\"default\"].error(result?.error);\n      } else {\n        antd__WEBPACK_IMPORTED_MODULE_7__[\"default\"].success('file uploaded!');\n      }\n    }).catch(_ => {\n      antd__WEBPACK_IMPORTED_MODULE_7__[\"default\"].error('something went wrong! try again');\n    });\n  };\n\n  const textFileUpload = () => {\n    const blob = new Blob([textCSV], {\n      type: 'text/csv;charset=utf-8;',\n      filename: 'data.csv'\n    });\n    const formData = new FormData();\n    formData.append('csv', blob);\n    (0,_api__WEBPACK_IMPORTED_MODULE_1__.post)(formData, '/api/sales/import-csv/', token).then(response => response.json()).then(result => {\n      if (result?.error) {\n        antd__WEBPACK_IMPORTED_MODULE_7__[\"default\"].error(result?.error);\n      } else {\n        antd__WEBPACK_IMPORTED_MODULE_7__[\"default\"].success('file uploaded!');\n      }\n    }).catch(_ => {\n      antd__WEBPACK_IMPORTED_MODULE_7__[\"default\"].error('something went wrong! try again');\n    });\n  };\n\n  const onFileChange = event => {\n    setFile(event.target.files[0]);\n  };\n\n  const handleTextCSVChange = event => {\n    setTextCSV(event.target.value);\n  };\n\n  const {\n    Option\n  } = antd__WEBPACK_IMPORTED_MODULE_8__[\"default\"];\n  const {\n    TextArea\n  } = antd__WEBPACK_IMPORTED_MODULE_9__[\"default\"];\n\n  if (loading) {\n    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      justify: \"center\",\n      align: \"middle\",\n      style: {\n        width: '100vw',\n        height: '100vh'\n      },\n      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n        size: \"large\"\n      })\n    });\n  }\n\n  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Layout, {\n    justify: \"center\",\n    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(Container, {\n      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n        xs: 24,\n        style: {\n          height: 'fit-content'\n        },\n        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n          justify: \"end\",\n          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n            type: \"primary\",\n            onClick: () => navigate('/', {\n              replace: true\n            }),\n            children: \"Homepage\"\n          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n            style: {\n              marginLeft: 8\n            },\n            type: \"primary\",\n            onClick: () => {\n              (0,_api__WEBPACK_IMPORTED_MODULE_1__.logout)(token).then(res => {\n                if (res.status === 200) {\n                  localStorage.clear('token');\n                  navigate('/auth/login', {\n                    replace: true\n                  });\n                }\n              });\n            },\n            children: \"Log out\"\n          })]\n        })\n      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n        xs: 24,\n        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n          requiredMark: \"optional\",\n          onFinish: handleFinishInfoForm,\n          form: userForm,\n          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n              md: {\n                span: 7,\n                offset: 1\n              },\n              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Item, {\n                name: \"firstName\",\n                style: {\n                  margin: 0\n                },\n                label: \"name:\",\n                initialValue: userInfo?.first_name,\n                labelCol: {\n                  span: 24\n                },\n                rules: [{\n                  required: true,\n                  message: 'please enter your name'\n                }],\n                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {})\n              })\n            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n              md: {\n                span: 7,\n                offset: 1\n              },\n              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Item, {\n                name: \"lastName\",\n                style: {\n                  margin: 0\n                },\n                label: \"last name:\",\n                initialValue: userInfo?.last_name,\n                labelCol: {\n                  span: 24\n                },\n                rules: [{\n                  required: true,\n                  message: 'please enter your last name'\n                }],\n                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {})\n              })\n            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n              md: {\n                span: 7,\n                offset: 1\n              },\n              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Item, {\n                name: \"gender\",\n                style: {\n                  margin: 0\n                },\n                label: \"gender:\",\n                initialValue: userInfo?.gender?.toString(),\n                labelCol: {\n                  span: 24\n                },\n                rules: [{\n                  required: true,\n                  message: 'please enter your gender'\n                }],\n                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Option, {\n                    value: \"1\",\n                    children: \"Male\"\n                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Option, {\n                    value: \"2\",\n                    children: \"female\"\n                  })]\n                })\n              })\n            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n              md: {\n                span: 7,\n                offset: 1\n              },\n              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Item, {\n                name: \"age\",\n                style: {\n                  margin: 0\n                },\n                label: \"age:\",\n                initialValue: userInfo?.age,\n                labelCol: {\n                  span: 24\n                },\n                rules: [{\n                  required: true,\n                  message: 'please enter your age'\n                }],\n                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                  type: \"number\"\n                })\n              })\n            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n              md: {\n                span: 7,\n                offset: 1\n              },\n              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Item, {\n                name: \"email\",\n                style: {\n                  margin: 0\n                },\n                label: \"email:\",\n                labelCol: {\n                  span: 24\n                },\n                initialValue: userInfo?.email,\n                rules: [{\n                  required: true,\n                  message: 'please enter your email address'\n                }],\n                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                  type: \"email\",\n                  allowClear: true\n                })\n              })\n            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n              md: {\n                span: 7,\n                offset: 1\n              },\n              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Item, {\n                name: \"country\",\n                style: {\n                  margin: 0\n                },\n                label: \"country:\",\n                labelCol: {\n                  span: 24\n                },\n                rules: [{\n                  required: false,\n                  message: 'please enter country'\n                }],\n                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                  showSearch: true,\n                  onChange: handleCountryChange,\n                  filterOption: (input, option) => option.children.toLowerCase().includes(input.toLowerCase()),\n                  children: countryList.map(item => {\n                    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Option, {\n                      children: item.name\n                    }, item.id.toString());\n                  })\n                })\n              })\n            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n              md: {\n                span: 7,\n                offset: 1\n              },\n              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Item, {\n                name: \"city\",\n                style: {\n                  margin: 0\n                },\n                label: \"city:\",\n                labelCol: {\n                  span: 24\n                },\n                rules: [{\n                  required: false,\n                  message: 'please enter city'\n                }],\n                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                  disabled: !countryID,\n                  filterOption: (input, option) => option.children.toLowerCase().includes(input.toLowerCase()),\n                  showSearch: true,\n                  onChange: handleCityChange,\n                  children: cityList.map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Option, {\n                    children: item.name\n                  }, item.id.toString()))\n                })\n              })\n            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n              span: 24,\n              offset: 1,\n              style: {\n                marginTop: 12\n              },\n              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                htmlType: \"submit\",\n                children: \"Update user Data\"\n              })\n            })]\n          })\n        })\n      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n        md: {\n          span: 23,\n          offset: 1\n        },\n        style: {\n          marginTop: 16\n        },\n        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(\"h2\", {\n          children: \"Input data\"\n        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n          type: \"file\",\n          name: \"file\",\n          onChange: onFileChange,\n          accept: \".csv\"\n        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n          type: \"primary\",\n          onClick: onFileUpload,\n          children: \"Upload\"\n        })]\n      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n        md: {\n          span: 23,\n          offset: 1\n        },\n        style: {\n          marginTop: 16\n        },\n        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(\"h2\", {\n          children: \"Input data\"\n        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(TextArea, {\n            placeholder: \"you can type here\",\n            rows: 6,\n            onChange: handleTextCSVChange\n          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            justify: \"center\",\n            style: {\n              marginTop: 8\n            },\n            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n              type: \"primary\",\n              htmlType: \"submit\",\n              onClick: () => {\n                textFileUpload();\n                return false;\n              },\n              children: \"Upload\"\n            })\n          })]\n        })]\n      })]\n    })\n  });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserInformation);\n\n//# sourceURL=webpack://assignment/./frontend/src/pages/UserInformation.jsx?");

/***/ })

}]);