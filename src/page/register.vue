<template>
  <div class="register_page fillcontain">
    <transition name="el-fade-in">
      <el-card class="form_contianer" border v-show="showRegister">
        <span class="manage_tip">小麦网</span>
        <el-form :model="form" :rules="rules" ref="form">
          <el-form-item label="手机号码" prop="phone_number">
            <el-input v-model="form.phone_number"></el-input>
          </el-form-item>
          <el-form-item label="用户名" prop="username">
            <el-input v-model="form.username"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="form.password"></el-input>
          </el-form-item>
          <el-form-item label="重复密码" prop="repeat_password">
            <el-input type="password" v-model="form.repeat_password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit('form')" class="submit_btn">注册</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'register',
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
    const validateName = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'))
      } else {
        if (this.form.username !== '') {
          this.$refs.form.validateField('password')
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
    const validateCheckpass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请确认密码'))
      } else if (value !== this.form.password) {
        callback(new Error('两次密码不一致'))
      } else {
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
        username: [
          {validator: validateName, trigger: 'blur'}
        ],
        password: [
          {validator: validatePass, trigger: 'blur'}
        ],
        repeat_password: [
          {validator: validateCheckpass, trigger: 'blur'}
        ]
      },
      showRegister: false
    }
  },
  mounted () {
    this.showRegister = true
  },
  methods: {
    onSubmit (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$router.push('/login')
          alert('submit!')
        } else {
          console.log('error!')
          return false
        }
      })
      console.log('submit!')
    }
  }
}
</script>

<style lang="less" scoped>
@import '../style/mixin';

.register_page {
  //background-color: #E0E0E0;
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
  height: 600px;
  .center();
  padding: 25px;
  border-width: thin;
  border-color: #000000;
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
