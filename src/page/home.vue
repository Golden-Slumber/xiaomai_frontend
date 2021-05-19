<template>
  <div class="fillcontain">
    <topMenu active-index="1"></topMenu>
    <el-row type="flex" justify="center" class="xm-common">
      <el-col :span="18" :xl="10">
<!--        <el-carousel :interval="5000" :height="bannerHeight+'px'" arrow="always">-->
<!--          <el-carousel-item v-for="item in pictures" :key="item.url">-->
<!--            <img ref="bannerHeight" @load="imgload" :src="item.url" class="xm-img"/>-->
<!--          </el-carousel-item>-->
<!--        </el-carousel>-->
        <el-carousel :interval="5000" :height="bannerHeight + 'px'" arrow="always">
          <el-carousel-item v-for="item in pictures" :key="item.url">
            <img ref="bannerHeight" :src="item.url" class="xm-img" />
          </el-carousel-item>
        </el-carousel>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center" class="xm-common">
      <el-col :span="20">
        <el-divider></el-divider>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center">
      <el-col :span="20">
        <el-card shadow="hover">
          <el-row type="flex" justify="center" class="xm-row"  border>
            <el-col offset="2">
              <h2>演唱会</h2>
            </el-col>
          </el-row>
          <el-row type="flex" :gutter="50" justify="center" class="xm-common">
            <!--        <div  >-->
            <!--         -->
            <!--&lt;!&ndash;          <el-col :span="1" :xl="1" class="xm-col">&ndash;&gt;-->
            <!--&lt;!&ndash;            <span>{{item.name}}}</span>&ndash;&gt;-->
            <!--&lt;!&ndash;            <span>{{item.city}}</span>&ndash;&gt;-->
            <!--&lt;!&ndash;            <span class="xm-price">{{item.price}}}</span>&ndash;&gt;-->
            <!--&lt;!&ndash;          </el-col>&ndash;&gt;-->
            <!--        </div>-->
            <el-col  v-for="item in showdata1" :span="5" :key="item.id" class="xm-col">
              <el-row>
                <el-image :src="item.image" fit="fill">
                  <div slot="error" class="image-slot">
                    <i class="el-icon-picture-outline"></i>
                  </div>
                </el-image>
              </el-row>
              <el-row >
                <label class="demonstration">{{item.name}}</label>
              </el-row>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center" class="xm-common">
      <el-col :span="20">
        <el-divider></el-divider>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center">
      <el-col :span="20">
        <el-card shadow="hover">
          <el-row type="flex" justify="center" class="xm-common">
            <el-col offset="2">
              <h2>话剧歌剧</h2>
            </el-col>
          </el-row>
          <el-row type="flex" :gutter="50" justify="center" class="xm-common">
            <!--        <div  >-->
            <!--         -->
            <!--&lt;!&ndash;          <el-col :span="1" :xl="1" class="xm-col">&ndash;&gt;-->
            <!--&lt;!&ndash;            <span>{{item.name}}}</span>&ndash;&gt;-->
            <!--&lt;!&ndash;            <span>{{item.city}}</span>&ndash;&gt;-->
            <!--&lt;!&ndash;            <span class="xm-price">{{item.price}}}</span>&ndash;&gt;-->
            <!--&lt;!&ndash;          </el-col>&ndash;&gt;-->
            <!--        </div>-->
            <el-col  v-for="item in showdata2" :span="5" :key="item.url" class="xm-col">
              <el-row>
                <el-image :src="item.url" fit="fill"></el-image>
              </el-row>
              <el-row>
                <label class="demonstration">{{item.name}}</label>
              </el-row>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center" class="xm-common">
      <el-col :span="20">
        <el-divider></el-divider>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center" class="xm-common">
      <el-col :span="20">
        <el-card shadow="hover">
          <el-row type="flex" justify="center" class="xm-common">
            <el-col offset="2">
              <h2>体育比赛</h2>
            </el-col>
          </el-row>
          <el-row type="flex" :gutter="50" justify="center" class="xm-common">
            <!--        <div  >-->
            <!--         -->
            <!--&lt;!&ndash;          <el-col :span="1" :xl="1" class="xm-col">&ndash;&gt;-->
            <!--&lt;!&ndash;            <span>{{item.name}}}</span>&ndash;&gt;-->
            <!--&lt;!&ndash;            <span>{{item.city}}</span>&ndash;&gt;-->
            <!--&lt;!&ndash;            <span class="xm-price">{{item.price}}}</span>&ndash;&gt;-->
            <!--&lt;!&ndash;          </el-col>&ndash;&gt;-->
            <!--        </div>-->
            <el-col  v-for="item in showdata3" :span="5" :key="item.url" class="xm-col">
              <el-row>
                <el-image :src="item.url" fit="fill"></el-image>
              </el-row>
              <el-row>
                <label class="demonstration">{{item.name}}</label>
              </el-row>
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
  name: 'home',
  components: {
    topMenu
  },
  data () {
    const data1 = {
      url: 'https://img.alicdn.com/bao/uploaded/https://img.alicdn.com/imgextra/i2/2251059038/O1CN018t2xIM2GdSJpfMJ1T_!!2251059038.jpg',
      name: '【光明如实辰山草地广播音乐节】浪漫法兰西之夜——余隆与上海交响乐团音乐会',
      city: '上海市 | 辰山植物园',
      price: '350'
    }
    const data2 = {
      url: 'https://img.alicdn.com/bao/uploaded/https://img.alicdn.com/imgextra/i3/2251059038/O1CN01sx7cQ42GdSJRkEjJd_!!2251059038.png_q60.jpg_.webp',
      name: '开心麻花爆笑舞台剧《瞎画艺术家》',
      city: '上海市 | FANCL艺术中心 艺海剧院大剧场',
      price: '80'
    }
    const data3 = {
      url: 'https://img.alicdn.com/bao/uploaded/https://img.alicdn.com/imgextra/i4/2251059038/O1CN015S2uLA2GdSK0tAI9P_!!2251059038.jpg',
      name: '2022国际足联卡塔尔世界杯&2023亚足联中国亚洲杯联合预选赛第二阶段',
      city: '苏州市 | 苏州奥林匹克体育中心体育场',
      price: '150'
    }
    return {
      bannerHeight: '',
      screenWidth: '',
      pictures: [
        {url: 'https://gw.alicdn.com/imgextra/i1/O1CN01mK1P6B1JLzswMc8Ut_!!6000000001013-0-tps-1200-320.jpg'},
        {url: 'https://gw.alicdn.com/imgextra/i1/O1CN01jTl8cr1hrBdypchqy_!!6000000004330-0-tps-1200-320.jpg'},
        {url: 'https://gw.alicdn.com/imgextra/i3/O1CN011V486d1H9VqgSszEI_!!6000000000715-0-tps-1200-320.jpg'},
        {url: 'https://gw.alicdn.com/imgextra/i3/O1CN01O731Mo1JNN58xgEKr_!!6000000001016-0-tps-1200-320.jpg'},
        {url: 'https://gw.alicdn.com/imgextra/i1/O1CN01LVq6jM1nNlsvVUwWr_!!6000000005078-0-tps-1200-320.jpg'},
        {url: 'https://gw.alicdn.com/imgextra/i4/O1CN01tADq7D1KwvRfn7ZvO_!!6000000001229-0-tps-1200-320.jpg'},
        {url: 'https://gw.alicdn.com/imgextra/i2/O1CN01l3vVC21tRn42o7JDI_!!6000000005899-0-tps-1200-320.jpg'}
      ],
      showdata1: Array(4).fill(data1),
      showdata2: Array(4).fill(data2),
      showdata3: Array(4).fill(data3)
    }
  },
  methods: {
    // imgload () {
    //   this.$nextTick(() => {
    //     this.bannerHeight = this.$refs.bannerHeight[0].height
    //     console.log(this.$refs.bannerHeight[0].height)
    //   })
    // }
    setSize: function () {
      // 通过浏览器宽度(图片宽度)计算高度
      this.bannerHeight = 400 / 1920 * this.screenWidth
    }
  },
  mounted () {
    console.log('show token')
    console.log(this.$store.state.token)
    // 演唱会
    this.$axios({
      method: 'post',
      url: 'http://123.60.219.102:10010/damai/show-service/show/getAllByTypeInPage/',
      data: {
        page: 1,
        pageSize: 4,
        type: '演唱会'
      },
      headers: {
        'token': 'Bearer Token ' + window.localStorage.getItem('token')
      }
    }).then(({data}) => {
      this.showdata1 = data.data.showList
    }).catch((error) => {
      console.log(error)
    })
    // // 话剧歌剧
    // this.$axios({
    //   method: 'post',
    //   url: 'http://123.60.219.102:10010/damai/show-service/show/getAllByTypeInPage/',
    //   data: {
    //     page: 1,
    //     pageSize: 3,
    //     type: '话剧歌剧'
    //   }
    // }).then((reponse) => {
    //   if (reponse.code === 0) {
    //     this.showdata2 = reponse.data.showList
    //   }
    // }).catch((error) => {
    //   console.log(error)
    // })
    // // 体育比赛
    // this.$axios({
    //   method: 'post',
    //   url: 'http://123.60.219.102:10010/damai/show-service/show/getAllByTypeInPage/',
    //   data: {
    //     page: 1,
    //     pageSize: 3,
    //     type: '体育比赛'
    //   }
    // }).then((reponse) => {
    //   if (reponse.code === 0) {
    //     this.showdata3 = reponse.data.showList
    //   }
    // }).catch((error) => {
    //   console.log(error)
    // })
    // 首次加载时,需要调用一次
    this.screenWidth = window.innerWidth
    this.setSize()
    // 窗口大小发生改变时,调用一次
    window.onresize = () => {
      this.screenWidth = window.innerWidth
      this.setSize()
    }
  }
}
</script>

<style lang="less" scoped>

.xm-common {
  margin-top: 20px;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
  width: 100%;
  height: 100%;
}

.xm-box {
  border-width: thin;
  border-color: black;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);

}

.xm-img {
  max-width: 100%;
  max-height: 100%;
}

.xm-col {
  margin-top: 5px;
  margin-left: 1px;
}

.xm-price {
  float: bottom;
  margin-bottom: 0px;
}

.xm-card {
  //margin-top: 5px;
  //margin-left: 5px;
  width: fit-content;
  alignment: center;
}

.xm-row {
  margin-top: 20px;
  border-width: thin;
  border-color: black;
}

.demonstration{
  font-size: small;
  color: #555555;
}

.demonstration:hover{
  color: #409EFF;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}

img{
  /*设置图片宽度和浏览器宽度一致*/
  width: 100%;
  height: inherit;
}
</style>
