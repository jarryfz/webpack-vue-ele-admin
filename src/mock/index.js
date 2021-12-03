
import Mock from 'mockjs'
import userApi from './user/index'

Mock.mock(/\/user\/login/, 'get', userApi.Login)
