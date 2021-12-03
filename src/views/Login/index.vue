<template>
  <div class="app-login">
    <div class="login-form-wrap">
      <div class="login-title">登录webpack-vue-ele-admin</div>
      <el-form ref="loginForm" :model="form" :rules="rules">
        <el-form-item prop="userName">
          <el-input v-model="form.userName" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input show-password v-model="form.password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-button class="login-btn" type="primary" @click="login">登录</el-button>
      </el-form>
      <div class="login-tip">
        账号：admin 密码：随意
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Login',
  data() {
    return {
      form: {
        userName: 'admin',
        password: '123456'
      },
      rules: {
        userName: [{ required: true, message: '用户名必填', trigger: 'blur' }],
        password: [{ required: true, message: '密码必填', trigger: 'blur' }]
      }
    }
  },
  computed: {
    ...mapGetters(['addRoutes'])
  },
  methods: {
    ...mapActions({
      loginFun: 'loginFun',
      generateRoutes: 'generateRoutes',
      setIsAddRoutes: 'setIsAddRoutes'
    }),
    login () {
      this.$refs.loginForm.validate(async (v) => {
        if(v) {
          const res = await this.$api.user.login(this.form)
          if (res) {
            this.loginFun(this.form).then(() => {
              this.generateRoutes().then(() => {
                this.$router.addRoutes(this.addRoutes) // 动态添加可访问路由表
                this.setIsAddRoutes(true)
                this.$router.push({path: '/'})
              })
            })
          }
        } else {
          return false
        }
      })
    }
  },
}
</script>
<style lang="less" scoped>
  .app-login {
    position: relative;
    width: 100%;
    height: 100%;
    background: #293a4c;
    color: #ffffff;
    .login-form-wrap {
      width: 400px;
      height: 400px;
      // background: #ffffff;
      position: absolute;
      left: 50%;
      top: 50%;
      margin: -200px 0 0 -200px;
      .login-title {
        font-size: 18px;
        font-weight: 700;
        text-align: center;
        margin-bottom: 25px;
      }
      .login-btn {
        width: 100%;
      }
      .login-tip {
        font-size: 14px;
        margin-top: 18px;
      }
    }
  }
  /deep/ .el-input__inner {
    background-color: #243443;
    border: #33495e;
    height: 40px;
  }
  /deep/ .el-form-item {
    margin-bottom: 22px;
  }
</style>