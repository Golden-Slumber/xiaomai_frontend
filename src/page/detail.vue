<template>
  <div>
    <topMenu activeIndex="null" ></topMenu>
    <el-row type="flex" justify="center" :gutter="100">
      <el-col :span="16">
        <el-card class="xm-card">
          <el-row type="flex" justify="center" :gutter="50">
            <el-col :span="8">
              <el-image :src="detail.show.image"
                        :fit="fits">
              </el-image>
            </el-col>
            <el-col :span="12">
              <h2>{{detail.show.name}}</h2>
              <h3>{{detail.show.venue}}</h3>
              <el-form :model="model" class="xm-form" ref="form">
                <el-form-item label="场次">
                  <el-select v-model="session_id" filterable @change="switchSession(session_id)" placeholder="请选择">
                    <el-option
                      v-for="item in detail.sessions"
                      :key="item.session.id"
                      :label="getDateFormat(item.session.time)"
                      :value="item.session.id">
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="票档">
                  <el-select v-model="ticket" filterable @change="switchTicket(ticket)" placeholder="请选择">
                    <el-option
                      v-for="item in options"
                      :key="item.id"
                      :label="item.price"
                      :value="item.id"
                      :disabled="item.remaining_amount === 0">
                    </el-option>
                  </el-select>
                  <label>元</label>
                </el-form-item >
                <el-form-item label="数量">
                  <el-input-number v-model="num" :step="1" @change="handleChange" :min="1" :max="6">
                  </el-input-number>
                </el-form-item>
                <el-form-item label="合计">
                  <span>{{total+' 元'}}</span>
                </el-form-item>
                <el-button type="primary" @click="switchPay">立即预定</el-button>
              </el-form>
            </el-col>
          </el-row>
        </el-card>
        <el-card class="xm-card">
          <el-row type="flex" justify="center" :gutter="50" class="xm-row">
            <el-col :span="22">
              <h3>温馨提示</h3>
            </el-col>
          </el-row>
          <el-row type="flex" justify="center">
            <el-col :span="22">
              <el-divider></el-divider>
            </el-col>
          </el-row>
          <el-row type="flex" justify="center">
            <el-col :span="22">
              <p class="xm-p">
                您知悉，因各地疫情情况，演出地或您所在地疫情防控政策可能影响您的出行安排或演出的入场验证要求。若演出受不可抗力影响延期或取消导致退票的，大麦仅支持退回票款，其它因观演发生的费用需由您自行承担。
              </p>
            </el-col>
          </el-row>

          <el-row type="flex" justify="center" :gutter="50" class="xm-row">
            <el-col :span="22">
              <h3>购票须知</h3>
            </el-col>
          </el-row>
          <el-row type="flex" justify="center">
            <el-col :span="22">
              <el-divider></el-divider>
            </el-col>
          </el-row>
          <el-row type="flex" justify="center">
            <el-col :span="22">
              <h5>限购规则</h5>
              <p class="xm-p">
                每笔订单最多购买6张
              </p>
              <h5>退票/换票规则</h5>
              <p class="xm-p">
                票品为有价证券，非普通商品，其背后承载的文化服务具有时效性，稀缺性等特征，不支持退换。
              </p>
              <h5>配送信息说明</h5>
              <p class="xm-p">
                不支持修改配送电话、地址等信息
              </p>
              <h5>入场规则</h5>
              <p class="xm-p">
                须携带纸质门票验票入场
              </p>
              <h5>儿童购票</h5>
              <p class="xm-p">
                1.2米以下儿童可在已购票家长陪同下免票入场，每位大人限携带一位儿童
              </p>
              <h5>发票说明</h5>
              <p class="xm-p">
                演出开始前，去【APP-订单详情页】提交发票申请。演出结束后1个月左右邮寄给你，需自付邮费。
              </p>
              <h5>实名购票规则</h5>
              <p class="xm-p">
                一张门票对应一个证件；证件支持：身份证
              </p>
              <h5>异常排单说明</h5>
              <p class="xm-p">
                对于异常订购行为，大麦网有权在订单成立或者生效之后取消相应订单。异常订购行为包括但不限于以下情形： （1）通过同一ID订购超出限购张数的订单。 （2）经合理判断认为非真实消费者的下单行为，包括但不限于通过批量相同或虚构的支付账号、收货地址（包括下单时填写及最终实际收货地址）、收件人、电话号码订购超出限购张数的订单。
              </p>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="xm-info">
          <el-row type="flex" justify="center" :gutter="50" class="xm-row">
            <el-col :span="22">
              <el-row>
                <i class="el-icon-circle-close"></i>
                <label>不支持退</label>
              </el-row>
              <p class="xm-infop">票品为有价证券，非普通商品，其背后承载的文化服务具有时效性，稀缺性等特征，不支持退换。</p>
            </el-col>
          </el-row>
          <el-row type="flex" justify="center" :gutter="50" class="xm-row">
            <el-col :span="22">
              <el-row>
                <i class="el-icon-circle-check"></i>
                <label>实名制观演</label>
              </el-row>
              <p class="xm-infop">本项目需实名制购票及入场，观演请本人携带购票时填写证件验证入场</p>
            </el-col>
          </el-row>
          <el-row type="flex" justify="center" :gutter="50" class="xm-row">
            <el-col :span="22">
              <el-row>
                <i class="el-icon-circle-check"></i>
                <label>快递票</label>
              </el-row>
              <p class="xm-infop">快递票：纸质票会在开票后快递到您留下的收货地址，需您承担邮寄费用。注：离开演时间仅3天时，不再寄送快递票，支持在指定取票地点取票（具体以下单后票夹信息为准）</p>
            </el-col>
          </el-row>
          <el-row type="flex" justify="center" :gutter="50" class="xm-row">
            <el-col :span="22">
              <el-row>
                <i class="el-icon-circle-check"></i>
                <label>纸质发票</label>
              </el-row>
              <p class="xm-infop">该项目支持开具纸质发票，请您在演出开始前通过订单页补开，发票将在演出结束后1个月左右，统一由主办方提供</p>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import topMenu from './topMenu'

export default {
  name: 'detail',
  data () {
    // const p = this.price * this.num
    return {
      fits: 'fill',
      url: 'https://img.alicdn.com/imgextra/i1/2251059038/O1CN012zd19z2GdSJpRRm9F_!!2251059038.jpg_q60.jpg_.webp',
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶',
        disabled: true
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      detail: {},
      session_id: '',
      time: '',
      ticket: '',
      num: 0,
      price: 0,
      total: 0
    }
  },
  methods: {
    getDateFormat (value) {
      const date = new Date(value)
      return date.toLocaleString('zh-CN')
      // return date.getFullYear() + '-' + this.checkTime(date.getMonth() + 1) + '-' + this.checkTime(date.getDate())
    },
    checkTime (value) {
      if (value < 10) {
        value = '0' + value
      }
      return value
    },
    handleChange (value) {
      this.num = value
      this.total = value * this.price
      console.log(value)
    },
    switchPay () {
      this.$store.dispatch('setCurrentPrice', this.price)
      this.$store.dispatch('setCurrentAmount', this.num)
      this.$store.dispatch('setCurrentShowName', this.detail.show.name)
      this.$store.dispatch('setCurrentShowVenue', this.detail.show.venue)
      this.$store.dispatch('setCurrentSession', this.session_id)
      this.$store.dispatch('setCurrentTicket', this.ticket)
      this.$store.dispatch('setCurrentImage', this.detail.show.image)
      this.$router.push('/pay')
    },
    // eslint-disable-next-line camelcase
    switchSession (session_id) {
      let currentSession = this.detail.sessions.find((item, i) => {
        // eslint-disable-next-line camelcase
        return item.session.id === session_id
      })
      this.options = currentSession.tickets
    },
    switchTicket (value) {
      let ticket = this.options.find((item, i) => {
        return item.id === value
      })
      this.price = ticket.price
      this.total = this.price * this.num
      console.log('current price', this.price)
    }
  },
  components: {
    topMenu
  },
  mounted () {
    this.$axios({
      method: 'post',
      url: 'http://123.60.219.102:10010/damai/show-service/show/getDetail/',
      data: {
        id: this.$store.state.currentShow
      },
      headers: {
        'token': 'Bearer Token ' + window.localStorage.getItem('token')
      }
    }).then(({data}) => {
      if (data.code === 0) {
        this.detail = data.data
        console.log('sessions', this.detail.sessions)
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
@import '../style/mixin';

.xm-form{
  margin-top: 50px;
  margin-left: 50px;
}

.xm-info {
  margin-top: 20px;
  background-color: #FAFAFA;
}

.xm-card{
  margin-top: 20px;
}

.xm-p {
  line-height: 30px;
  color: gray;
}

.el-icon-circle-close {
  color: #409EFF;
}

.el-icon-circle-check {
  color: #409EFF;
}

.xm-infop {
  color: gray;
  font-size: small;
}

.xm-row {
  margin-top: 20px;
}
</style>
