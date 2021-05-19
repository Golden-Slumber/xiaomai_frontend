<template>
  <div class="xm-page fillcontain">
    <topMenu activeIndex="null"> </topMenu>
    <el-row type="flex" justify="center" class="xm-common">
      <el-col :span="12">
        <el-row class="xm-common">
          <el-steps :active="2">
            <el-step title="选择商品"></el-step>
            <el-step title="确认订单信息"></el-step>
            <el-step title="支付订单"></el-step>
          </el-steps>
        </el-row>
        <el-divider></el-divider>
        <el-row class="xm-common">
          <el-col :span="18">
            <h3 class="xm-common">配送方式</h3>
            <el-row class="xm-common">
              <i class="el-icon-truck" ></i>
              <label>快递</label>
            </el-row>
          </el-col>
        </el-row>
        <el-divider></el-divider>
        <el-row class="xm-common">
          <el-col :span="18">
            <h3 class="xm-common">观演人</h3>
            <span class="xm-common">XXX</span>
          </el-col>
        </el-row>
        <el-divider></el-divider>
        <el-row class="xm-common">
          <el-col>
            <el-row class="xm-common">
              <h3>确认订单信息</h3>
            </el-row>
            <el-card class="xm-common">
              <el-table
                :data="tableData"
                style="width: 100%">
                <el-table-column
                  label="项目信息"
                  width="180">
                  {{data.date}}
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="单价"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="address"
                  label="数量">
                </el-table-column>
                <el-table-column
                  prop="price"
                  label="小计">
                </el-table-column>
              </el-table>
              <el-form>
                <el-form-item>
                  <el-checkbox v-model="checked" class="xm-checkbox">我已经阅读并同意《订票服务条款》</el-checkbox>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" class="xm-button">支付订单</el-button>
                </el-form-item>
              </el-form>
            </el-card>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import topMenu from './topMenu'

export default {
  name: 'pay',
  components: {
    topMenu
  },
  data () {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        price: '90'
      }],
      checked: true
    }
  }
}
</script>

<style scoped>

.xm-page{
  /*background-color: #E0E0E0;*/
}

.xm-common{
  margin-top: 20px;
}

.xm-checkbox{
  float: right;
  margin-right: 10px;
}

.el-steps.el-steps--horizontal /deep/ .el-step.is-horizontal /deep/ {
  color: #409EFF !important;
  border-color: #409EFF !important;
}

.el-icon-truck{
  color: #409EFF;
}

.xm-button{
  float: right;
  margin-right: 10px;
}
</style>
