<template>
  <div class="xm-page fillcontain">
    <topMenu activeIndex="null"> </topMenu>
    <el-row type="flex" justify="center" class="xm-common">
      <el-col :span="18">
        <el-steps :active="2" finish-status="success">
          <el-step title="选择商品"></el-step>
          <el-step title="确认订单信息"></el-step>
          <el-step title="支付订单"></el-step>
        </el-steps>
      </el-col>
    </el-row >
    <el-row type="flex" justify="center">
      <el-col :span="18">
        <el-divider class="xm-common"></el-divider>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center" class="xm-common">
      <el-col :span="18">
        <i class="el-icon-truck" ></i>
        <h3>快递</h3>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center" class="xm-common">
      <el-col :span="18">
        <el-divider class="xm-common"></el-divider>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center" class="xm-common">
      <el-col :span="18">
        <h3>观演人</h3>
        <span>XXX</span>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center" class="xm-common">
      <el-col :span="18">
        <el-divider class="xm-common"></el-divider>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center" class="xm-common">
      <el-col :span="18">
        <el-card>
          <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
              prop="date"
              label="日期"
              width="180">
            </el-table-column>
            <el-table-column
              prop="name"
              label="姓名"
              width="180">
            </el-table-column>
            <el-table-column
              prop="address"
              label="地址">
            </el-table-column>
          </el-table>
          <el-form>
            <el-form-item>
              <el-checkbox v-model="checked" class="xm-checkbox">备选项</el-checkbox>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" class="xm-button">支付订单</el-button>
            </el-form-item>
          </el-form>
        </el-card>
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
        address: '上海市普陀区金沙江路 1518 弄'
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

.xm-button{
  float: right;
  margin-right: 10px;
}
</style>
