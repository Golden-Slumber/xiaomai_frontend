<template>
  <div>
    <el-menu :default-active = "activeIndex" class="el-menu-demo" mode="horizontal" background-color="#545c64"
             text-color="#fff" active-text-color="#ffd04b" @select="handleSelect">
      <el-menu-item index="1">主页</el-menu-item>
      <el-menu-item index="2">分类</el-menu-item>
      <el-submenu index="3" class="xm-submenu">
        <template slot="title" >我</template>
        <el-menu-item index="3-1">订单</el-menu-item>
        <el-menu-item index="3-2">注销</el-menu-item>
      </el-submenu>
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
    }
  }
}
</script>

<style lang="less" scoped>

.xm-submenu{
  position: absolute;
  right: 0px;
}

</style>
