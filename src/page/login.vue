<template>
  <div class="login_page fillcontain">
    <transition name="el-fade-in">
      <el-card class="form_contianer" border v-show="showLogin">
        <span class="manage_tip">小麦网</span>
        <el-form :model="form" :rules="rules" ref="form">
          <el-form-item label="手机号码" prop="phone_number">
            <el-input v-model="form.phone_number"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="form.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit('form')" class="submit_btn">登录</el-button>
          </el-form-item>
          <el-form-item>
            <label @click="switchRegister" class="xm-word">没有账号？去注册</label>
          </el-form-item>
        </el-form>
      </el-card>
    </transition>
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: 'login',
  data () {
    const validatePhone = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入手机号'))
      } else {
        if (this.form.phone_number !== '') {
          this.$refs.form.validateField('username')
        }
        callback()
      }
    }
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.form.password !== '') {
          this.$refs.form.validateField('repeat_password')
        }
        callback()
      }
    }
    return {
      form: {
        username: '',
        password: '',
        repeat_password: '',
        phone_number: ''
      },
      rules: {
        phone_number: [
          {validator: validatePhone, trigger: 'blur'}
        ],
        password: [
          {validator: validatePass, trigger: 'blur'}
        ]
      },
      showLogin: false
    }
  },
  mounted () {
    this.showLogin = true
  },
  methods: {
    onSubmit (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$axios({
            method: 'post',
            url: 'http://123.60.219.102:10010/damai/user-service/user/login/',
            data: {
              phone: this.form.phone_number,
              password: this.form.password
            }
          }).then(({data}) => {
            console.log('respose', data)
            const response = data
            if (response.code === 1) {
              this.$notify.error({
                title: '失败',
                message: '登录失败',
                duration: 3000
              })
            } else {
              console.log('token1')
              console.log(response.data.token)
              window.localStorage.setItem('token', response.data.token)
              this.$store.dispatch('setToken', response.data.token)
              this.$store.dispatch('login')
              this.$store.dispatch('setPhoneNumber', this.form.phone_number)
              this.$router.push('/')
              this.$notify({
                title: '成功',
                message: '欢迎您，' + this.form.phone_number,
                type: 'success',
                duration: 3000
              })
            }
          }).catch((error) => {
            console.log(error)
            this.$notify.error({
              title: '失败',
              message: '登录失败',
              duration: 3000
            })
          })
        } else {
          console.log('error!')
          this.$notify.error({
            title: '失败',
            message: '登录失败',
            duration: 3000
          })
          return false
        }
      })
      console.log('submit!')
    },
    switchRegister () {
      this.$router.push('/register')
    },
    ...mapActions([
      'setUsername',
      'setPhoneNumber',
      'login'
    ])
  }
}
</script>

<style lang="less" scoped>
@import '../style/mixin';

.login_page {
  //background-color: #E0E0E0;
}

.xm-word:hover {
  color: #409EFF;
}

.manage_tip {
  //position: absolute;
  //width: 100%;
  //top: -100px;
  //left: 0;
  font-size: 34px;
  color: #409EFF;
}

.form_contianer {
  //.wh(320px, 210px);
  //.ctp(320px, 210px);
  width: 420px;
  height: 410px;
  .center();
  padding: 25px;
  border-width: thin;
  border-color: black;
  text-align: center;
  background-color: #fff;

  .submit_btn {
    width: 100%;
    font-size: 16px;
    margin-top: 10px;
  }
}

.tip {
  font-size: 12px;
  color: red;
}

.form-fade-enter-active, .form-fade-leave-active {
  transition: all 1s;
}

.form-fade-enter, .form-fade-leave-active {
  transform: translate3d(0, -50px, 0);
  opacity: 0;
}
</style>
