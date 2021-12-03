
const Mock = require('mockjs')
const code = 200

export default {
  Login: () => {
    let data = {
      user: 'user'
    }
    return {
      code: code,
      data: data
    }
  }
}
