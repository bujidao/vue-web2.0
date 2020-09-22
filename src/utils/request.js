import axios from 'axios'

const getUrl = apiModel => {
  const apiModels = {
    MTEST1: process.env.TEST_BASE_API1,
    MTEST2: process.env.TEST_BASE_API2
  }
  return apiModels[apiModel]
}

// create an axios instance
const service = axios.create({
  // baseURL: process.env.TEST_BASE_API, // url = base url + request url
  withCredentials: false, // send cookies when cross-domain requests
  timeout: 30 * 1000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    config.baseURL = getUrl(config.apiModel)
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code.
   */
  response => {
    const res = response.data
    return res
  },
  error => {
    console.log('err' + error) // for debug
    return Promise.reject(error)
  }
)

export default service
