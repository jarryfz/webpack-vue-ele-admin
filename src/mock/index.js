
import Mock from 'mockjs'
import userApi from './user/index'

Mock.mock(/\/user\/login/, 'post', userApi.Login)
Mock.mock(RegExp('user/userInfo' + '.*'), 'get', userApi.getUserInfo)
