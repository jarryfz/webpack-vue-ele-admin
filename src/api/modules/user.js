import { get, post } from '../axios'

export default {
  login: function (params) {
    return get(params, 'user/login')
  },
  getRoleInfo: function (params) {
    return get(params, '/user/roleInfo')
  }
}
