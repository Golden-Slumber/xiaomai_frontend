<template>
  <div>
    <el-menu :default-active = "activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1" @click="switchHome">主页</el-menu-item>
      <el-menu-item index="2" @click="switchSearch">分类</el-menu-item>
      <div v-if="this.$store.state.isLogin">
        <el-submenu index="3" class="xm-submenu">
          <template slot="title" >我</template>
          <el-menu-item index="3-1" @click="switchOrder">订单</el-menu-item>
          <el-menu-item index="3-2" @click="logout">注销</el-menu-item>
        </el-submenu>
      </div>
      <div v-else>
        <el-menu-item index="3" @click="switchLogin" class="xm-submenu">
          登录
        </el-menu-item>
      </div>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'topMenu',
  props: {
    activeIndex: String
  },
  methods: {
    handleSelect (key, keypath) {
      console.log(key, keypath)
    },
    switchHome () {
      this.$router.push('/')
    },
    switchSearch () {
      this.$router.push('/search')
    },
    switchOrder () {
      this.$router.push('/order')
    },
    switchLogin () {
      this.$router.push('/login')
    },
    logout () {
      this.$store.dispatch('logout')
    }
  }
}
</script>

<style lang="less" scoped>

.xm-submenu{
  position: absolute;
  right: 0px;
}

.el-menu-demo{
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
}

</style>
