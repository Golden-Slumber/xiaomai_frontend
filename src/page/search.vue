<template>
  <div class="xm-search fillcontain">
    <topMenu activeIndex="2"> </topMenu>

    <el-row type="flex" justify="center" :gutter="100">
      <el-col :span="16">
        <el-card class="xm-card" broder>
          <el-row type="flex" justify="center" :gutter="50">
            <el-col :span="10">
              <span>城市:</span>
              <el-select v-model="value" filterable @change="switchCity(value)" placeholder="请选择">
                <el-option
                  v-for="item in cityOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-col>
<!--            <el-col :span="2">-->
<!--              <el-divider direction="vertical"></el-divider>-->
<!--            </el-col>-->
            <el-col :span="10">
              <span>分类：</span>
              <el-select v-model="value" filterable @change="switchCategory(value)" placeholder="请选择">
                <el-option
                  v-for="item in categoryOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
      <el-col :span="6"></el-col>
    </el-row>
    <el-row type="flex" justify="center" :gutter="100">
      <el-col :span="16">
<!--        <el-table :data="tableData" >-->
<!--          <el-table-column prop="date" label="日期" width="140">-->
<!--          </el-table-column>-->
<!--          <el-table-column prop="name" label="姓名" width="120">-->
<!--          </el-table-column>-->
<!--          <el-table-column prop="address" label="地址">-->
<!--          </el-table-column>-->
<!--        </el-table>-->
        <el-card v-for="item in tableData" :key="item.id" shadow="hover">
          <el-row type="flex" justify="center" align="middle" :gutter="50" >
            <el-col :span="6">
              <el-image :src="item.image" fit="fill"></el-image>
            </el-col>
            <el-col :span="16">
              <el-row class="xm-row">
                <label class="xm-name" @click="switchDetail(item.name)">{{item.name}}</label>
              </el-row>
              <el-row class="xm-row">
                <i class="el-icon-s-promotion"></i>
                <label class="xm-city">{{item.city}}</label>
                <label class="xm-city">{{item.venue}}</label>
              </el-row>
              <el-row class="xm-row">
                <label class="xm-price">{{item.typeName}}</label>
              </el-row>
            </el-col>
          </el-row>
        </el-card>
        <el-row type="flex" justify="center" class="xm-bot">
          <el-col :span="2">
            <template v-if="currentSize === 5">
              <label class="xm-more" @click="more">查看更多</label>
            </template>
            <template v-else>
              <label class="xm-more">已经没有更多了</label>
            </template>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="6">
        <el-card class="xm-header">
          <el-row >
            <span>您可能还喜欢</span>
          </el-row>
        </el-card>
        <el-card v-for="item in likeData" :key="item.url" shadow="hover">
          <el-row type="flex" justify="center" :gutter="50">
            <el-col :span="10">
              <el-image :src="item.url" ></el-image>
            </el-col>
            <el-col :span="12">
              <el-row><label class="demostration">{{item.name}}</label></el-row>
              <el-row><label class="demostration">{{item.city}}</label></el-row>
              <el-row><label class="demostration">{{item.price}}</label></el-row>
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
  name: 'search',
  components: {
    topMenu
  },
  data () {
    const item = {
      url: 'https://img.alicdn.com/bao/uploaded/https://img.alicdn.com/imgextra/i3/2251059038/O1CN01sx7cQ42GdSJRkEjJd_!!2251059038.png_q60.jpg_.webp',
      name: '开心麻花爆笑舞台剧《瞎画艺术家》',
      city: '上海市 | FANCL艺术中心 艺海剧院大剧场',
      price: '80'
    }
    const like = {
      url: 'https://img.alicdn.com/bao/uploaded/i4/2251059038/O1CN0124ekxA2GdSK3nQAFH_!!0-item_pic.jpg_q60.jpg_.webp',
      name: '重塑雕像的权利【喝彩之后】2021上海专场',
      city: '上海市 | 梅赛德斯-奔驰文化中心',
      price: '380'
    }
    return {
      cityOptions: [{
        value: '上海',
        label: '上海'
      }, {
        value: '北京',
        label: '北京'
      }, {
        value: '杭州',
        label: '杭州'
      }, {
        value: '成都',
        label: '成都'
      }, {
        value: '武汉',
        label: '武汉'
      }, {
        value: '南京',
        label: '南京'
      }, {
        value: '重庆',
        label: '重庆'
      }, {
        value: '西安',
        label: '西安'
      }, {
        value: '沈阳',
        label: '沈阳'
      }, {
        value: '长沙',
        label: '长沙'
      }],
      categoryOptions: [{
        value: '演唱会',
        label: '演唱会'
      }, {
        value: '话剧歌剧',
        label: '话剧歌剧'
      }, {
        value: '音乐会',
        label: '音乐会'
      }, {
        value: '曲苑杂坛',
        label: '曲苑杂坛'
      }, {
        value: '体育',
        label: '体育'
      }, {
        value: '展览休闲',
        label: '展览休闲'
      }, {
        value: '舞蹈芭蕾',
        label: '舞蹈芭蕾'
      }, {
        value: '儿童亲子',
        label: '儿童亲子'
      }, {
        value: '旅游演艺',
        label: '旅游演艺'
      }, {
        value: '其他',
        label: '其他'
      }],
      tableData: Array(10).fill(item),
      likeData: Array(4).fill(like),
      value: '',
      type: '0',
      currentPage: 1,
      currentSize: 0,
      currentOption: ''
    }
  },
  methods: {
    switchDetail (id) {
      this.$store.dispatch('setCurrentShow', id)
      console.log('show id', id)
      this.$router.push('/detail')
    },
    switchCity (value) {
      if (this.type !== '1') {
        this.type = '1'
      }
      this.currentPage = 1
      this.currentSize = 0
      this.currentOption = value
      this.$axios({
        method: 'post',
        url: 'http://123.60.219.102:10010/damai/show-service/show/getAllByCityInPage/',
        data: {
          page: this.currentPage,
          pageSize: 5,
          city: this.currentOption
        },
        headers: {
          'token': 'Bearer Token ' + window.localStorage.getItem('token')
        }
      }).then(({data}) => {
        if (data.code === 0) {
          this.tableData = data.data.showList
          this.currentSize = this.tableData.length
          this.currentPage += 1
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
    },
    switchCategory (value) {
      if (this.type !== '2') {
        this.type = '2'
      }
      this.currentPage = 1
      this.currentSize = 0
      this.currentOption = value
      this.$axios({
        method: 'post',
        url: 'http://123.60.219.102:10010/damai/show-service/show/getAllByTypeInPage/',
        data: {
          page: this.currentPage,
          pageSize: 5,
          type: this.currentOption
        },
        headers: {
          'token': 'Bearer Token ' + window.localStorage.getItem('token')
        }
      }).then(({data}) => {
        if (data.code === 0) {
          this.tableData = data.data.showList
          this.currentSize = this.tableData.length
          this.currentPage += 1
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
    },
    more () {
      if (this.type === '0') {
        this.$axios({
          method: 'post',
          url: 'http://123.60.219.102:10010/damai/show-service/show/getAllInPage/',
          data: {
            page: this.currentPage,
            pageSize: 5
          },
          headers: {
            'token': 'Bearer Token ' + window.localStorage.getItem('token')
          }
        }).then(({data}) => {
          if (data.code === 0) {
            this.tableData = this.tableData.concat(data.data.showList)
            this.currentSize = data.data.showList.length
            this.currentPage += 1
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
      } else if (this.type === '1') {
        this.$axios({
          method: 'post',
          url: 'http://123.60.219.102:10010/damai/show-service/show/getAllByCityInPage/',
          data: {
            page: this.currentPage,
            pageSize: 5,
            city: this.currentOption
          },
          headers: {
            'token': 'Bearer Token ' + window.localStorage.getItem('token')
          }
        }).then(({data}) => {
          if (data.code === 0) {
            this.tableData = this.tableData.concat(data.data.showList)
            this.currentSize = data.data.showList.length
            this.currentPage += 1
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
      } else {
        this.$axios({
          method: 'post',
          url: 'http://123.60.219.102:10010/damai/show-service/show/getAllByTypeInPage/',
          data: {
            page: this.currentPage,
            pageSize: 5,
            type: this.currentOption
          },
          headers: {
            'token': 'Bearer Token ' + window.localStorage.getItem('token')
          }
        }).then(({data}) => {
          if (data.code === 0) {
            this.tableData = this.tableData.concat(data.data.showList)
            this.currentSize = data.data.showList.length
            this.currentPage += 1
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
  },
  mounted () {
    // 进入该页面时加载初始show信息
    this.$axios({
      method: 'post',
      url: 'http://123.60.219.102:10010/damai/show-service/show/getAllInPage/',
      data: {
        page: this.currentPage,
        pageSize: 5
      },
      headers: {
        'token': 'Bearer Token ' + window.localStorage.getItem('token')
      }
    }).then(({data}) => {
      if (data.code === 0) {
        this.tableData = data.data.showList
        this.currentSize = this.tableData.length
        this.currentPage += 1
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
//@import '../style/mixin';
//
.xm-search{
  //background-color: #E0E0E0;
}

.xm-header {
  background-color: #F2F2F2;
}

.xm-row {
  margin-bottom: 30px
}

.el-icon-s-promotion {
  color: #409EFF;
}

.xm-card{
  margin-top: 10px;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 10px;
  //width: fit-content;
}

.demostration{
  font-size: x-small;
}

.xm-name {
  font-size: large;
}

.xm-name:hover{
  color: #409EFF;
}

.xm-city {
  font-size: small;
  color: gray;
}

.xm-price{
  font-size: large;
  color: #409EFF;
}

.xm-more:hover {
  color: #409EFF;
}

.xm-more{
  font-size: medium;
  color: gray;
}

.xm-bot{
  margin-top: 30px;
  margin-bottom: 30px;
}

.xm-divider{
  margin-left: 20px;
  margin-right: 20px;
}
</style>
