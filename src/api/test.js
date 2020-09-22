import request from '@/utils/request'

/**
 * 测试数据一
 * @param {*} params 参数
 */
export const queryTest1 = params => {
  return request({
    url: 'test/api/get',
    method: 'get',
    params: params,
    apiModel: 'MTEST1'
  })
}

/**
 * 测试数据二
 * @param {*} params 参数
 */
export const queryTest2 = params => {
  return request({
    url: 'single-code/list',
    method: 'get',
    params: params,
    apiModel: 'MTEST2'
  })
}
