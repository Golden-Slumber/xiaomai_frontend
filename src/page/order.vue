<template>
  <div class="fillcontain">
    <topMenu activeIndex="3"></topMenu>
    <el-row type="flex" justify="center" class="xm-common">
      <el-col :span="12">
        <el-row class="xm-common">
          <h2>我的订单</h2>
        </el-row>
        <el-divider></el-divider>
        <el-table
          :data="tableData"
          style="width: 100%" class="xm-common">
          <el-table-column
            label="项目信息"
            width="300">
            <template slot-scope="scope">
              <el-row type="flex" justify="center" align="middle" :gutter="10">
                <el-col :span="12">
                  <el-image :src="scope.row.image"></el-image>
                </el-col>
                <el-col :span="12">
                  <el-row><label class="demostration">{{scope.row.name}}</label></el-row>
<!--                  <el-row><label class="demostration">{{scope.row.city}}</label></el-row>-->
                </el-col>
              </el-row>
            </template>
          </el-table-column>
          <el-table-column
            prop="quantity"
            label="数量">
          </el-table-column>
          <el-table-column
            label="总价"
            width="180">
            <template slot-scope="scope">
              <label>{{scope.row.amount + '元'}}</label>
            </template>
          </el-table-column>
          <el-table-column
            label="交易状态">
            <template slot-scope="scope">
              <template v-if="scope.row.status === 'Successful'">
                <label class="demostration">交易成功</label>
              </template>
              <template v-else>
                <label class="demostration">交易失败</label>
              </template>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import topMenu from './topMenu'
export default {
  name: 'order',
  components: {
    topMenu
  },
  data () {
    return {
      tableData: [{
        url: 'https://img.alicdn.com/bao/uploaded/https://img.alicdn.com/imgextra/i3/2251059038/O1CN01sx7cQ42GdSJRkEjJd_!!2251059038.png_q60.jpg_.webp',
        name: '开心麻花爆笑舞台剧《瞎画艺术家》',
        city: '上海市 | FANCL艺术中心 艺海剧院大剧场',
        price: '90',
        amount: '1',
        total: '90',
        status: '交易完成'
      }, {
        url: 'https://img.alicdn.com/bao/uploaded/https://img.alicdn.com/imgextra/i3/2251059038/O1CN01sx7cQ42GdSJRkEjJd_!!2251059038.png_q60.jpg_.webp',
        name: '开心麻花爆笑舞台剧《瞎画艺术家》',
        city: '上海市 | FANCL艺术中心 艺海剧院大剧场',
        price: '90',
        amount: '1',
        total: '90',
        status: '交易完成'
      }, {
        url: 'https://img.alicdn.com/bao/uploaded/https://img.alicdn.com/imgextra/i3/2251059038/O1CN01sx7cQ42GdSJRkEjJd_!!2251059038.png_q60.jpg_.webp',
        name: '开心麻花爆笑舞台剧《瞎画艺术家》',
        city: '上海市 | FANCL艺术中心 艺海剧院大剧场',
        price: '90',
        amount: '1',
        total: '90',
        status: '交易完成'
      }, {
        url: 'https://img.alicdn.com/bao/uploaded/https://img.alicdn.com/imgextra/i3/2251059038/O1CN01sx7cQ42GdSJRkEjJd_!!2251059038.png_q60.jpg_.webp',
        name: '开心麻花爆笑舞台剧《瞎画艺术家》',
        city: '上海市 | FANCL艺术中心 艺海剧院大剧场',
        price: '90',
        amount: '1',
        total: '90',
        status: '交易完成'
      }]
    }
  },
  mounted () {
    this.$axios({
      method: 'post',
      url: 'http://123.60.219.102:10010/damai/order-service/order/orders',
      data: {
        pageNo: 0,
        pageSize: 100
      },
      headers: {
        'token': 'Bearer Token ' + window.localStorage.getItem('token')
      }
    }).then(({data}) => {
      if (data.code === 0) {
        this.tableData = data.data
      } else {
        this.$notify.error({
          title: '糟糕',
          message: '出错啦！',
          duration: 3000
        })
      }
    }).catch((error) => {
      console.log(error)
      this.$notify.error({
        title: '糟糕',
        message: '出错啦！',
        duration: 3000
      })
    })
  }
}
</script>

<style lang="less" scoped>

.xm-common{
  margin-top: 50px;
}
</style>
