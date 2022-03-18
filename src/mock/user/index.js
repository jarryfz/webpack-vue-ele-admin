export default {
  Login: (req) => {
    let params = null
    let data = {}
    let code = 200
    if(req.type === 'POST') {
      params = JSON.parse(req.body)
    }
    if(params.userName === 'admin') {
      code = 200
      data = {
        userName: '超级管理员',
        role: 1
      }
    } else {
      code = 200
      data = {
        userName: '管理员',
        role: 2
      }
    }
    return {
      code: code,
      data: data
    }
  },
  getUserInfo: (req) => {
    let params = JSON.parse(req.body)
    let roleName = null
    if(params.id === 1) {
      roleName = 'admin'
    } else {
      roleName = 'user'
    }
    return {
      code: 200,
      data: {
        roleName: roleName
      }
    }
  }
}
