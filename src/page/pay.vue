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
                  width="300">
                  <template slot-scope="scope">
                    <el-row type="flex" justify="center" align="middle" :gutter="10">
                      <el-col :span="12">
                        <el-image :src="scope.row.url"></el-image>
                      </el-col>
                      <el-col :span="12">
                        <el-row><label class="demostration">{{scope.row.name}}</label></el-row>
                        <el-row><label class="demostration">{{scope.row.city}}</label></el-row>
                      </el-col>
                    </el-row>
                  </template>
                </el-table-column>
                <el-table-column
                  prop="price"
                  label="单价"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="amount"
                  label="数量">
                </el-table-column>
                <el-table-column
                  prop="total"
                  label="小计">
                </el-table-column>
              </el-table>
              <el-form>
                <el-form-item>
                  <el-checkbox v-model="checked" class="xm-checkbox">我已经阅读并同意《订票服务条款》</el-checkbox>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" class="xm-button" @click="placeOrder">支付订单</el-button>
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
        url: 'https://img.alicdn.com/bao/uploaded/https://img.alicdn.com/imgextra/i3/2251059038/O1CN01sx7cQ42GdSJRkEjJd_!!2251059038.png_q60.jpg_.webp',
        name: '开心麻花爆笑舞台剧《瞎画艺术家》',
        city: '上海市 | FANCL艺术中心 艺海剧院大剧场',
        price: '90',
        amount: '1',
        total: '90'
      }],
      checked: true
    }
  },
  mounted () {
    this.tableData = [
      {
        url: this.$store.state.currentImage,
        name: this.$store.state.currentShowName,
        city: this.$store.state.currentShowVenue,
        price: this.$store.state.currentPrice,
        amount: this.$store.state.currentAmount,
        total: this.$store.state.currentPrice * this.$store.state.currentAmount
      }
    ]
  },
  methods: {
    placeOrder () {
      this.$axios({
        method: 'post',
        url: 'http://123.60.219.102:10010/damai/order-service/order/place/',
        data: {
          showID: this.$store.state.currentShow,
          sessionID: this.$store.state.currentSession,
          ticketID: this.$store.state.currentTicket,
          // todo userid
          userID: '20',
          amount: this.$store.state.currentAmount
        },
        headers: {
          'token': 'Bearer Token ' + window.localStorage.getItem('token')
        }
      }).then(({data}) => {
        if (data.code === 0) {
          this.$notify({
            title: '成功',
            message: '支付成功',
            type: 'success',
            duration: 3000
          })
          this.$router.push('/order')
        } else {
          this.$notify.error({
            title: '失败',
            message: '支付失败',
            duration: 3000
          })
        }
      }).catch((error) => {
        console.log(error)
        this.$notify.error({
          title: '失败',
          message: '支付失败',
          duration: 3000
        })
      })
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

.demostration{
  font-size: 1px;
}

.xm-button{
  float: right;
  margin-right: 10px;
}
</style>
