<template>
  <div class="xm-search fillcontain">
    <topMenu activeIndex="2"> </topMenu>

    <el-row type="flex" justify="center" :gutter="100">
      <el-col :span="16">
        <el-card class="xm-card" broder>
          <el-row type="flex" justify="center" :gutter="50">
            <el-col :span="10">
              <span>城市:</span>
              <el-select v-model="value" filterable placeholder="请选择">
                <el-option
                  v-for="item in options"
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
              <el-select v-model="value" filterable placeholder="请选择">
                <el-option
                  v-for="item in options"
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
        <el-card v-for="item in tableData" :key="item.url" shadow="hover">
          <el-row type="flex" justify="center" align="middle" :gutter="50" >
            <el-col :span="6">
              <el-image :src="item.url" fit="fill"></el-image>
            </el-col>
            <el-col :span="16">
              <el-row class="xm-row">
                <label class="xm-name" @click="switchDetail">{{item.name}}</label>
              </el-row>
              <el-row class="xm-row">
                <i class="el-icon-s-promotion"></i>
                <label class="xm-city">{{item.city}}</label>
              </el-row>
              <el-row class="xm-row">
                <label class="xm-price">{{item.price}}</label>
              </el-row>
            </el-col>
          </el-row>
        </el-card>
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
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
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
      tableData: Array(20).fill(item),
      likeData: Array(4).fill(like),
      value: ''
    }
  },
  methods: {
    switchDetail () {
      this.$router.push('/detail')
    }
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
  background-color: #E0E0E0;
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

.xm-divider{
  margin-left: 20px;
  margin-right: 20px;
}
</style>
