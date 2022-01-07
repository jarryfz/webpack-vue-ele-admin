import { get, post } from '../axios'

export default {
  login: function (params) {
    return post(params, 'user/login')
  },
  userInfo: function (params) {
    return get(params, '/user/userInfo')
  }
}
