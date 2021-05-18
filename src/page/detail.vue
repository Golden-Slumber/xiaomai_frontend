<template>
  <div>
    <topMenu activeIndex="null" ></topMenu>
    <el-container>
      <el-main>
        <el-card>
          <el-container>
            <el-aside>
              <div class="block">
                <el-image :src="url"
                          :fit="fits">
                </el-image>
              </div>
            </el-aside>
            <el-main>
              <h2>【盐城】2021东台西溪草莓音乐节</h2>
              <h3>场馆：盐城市 | 江苏省东台市西溪景区西溪植物园内</h3>
              <el-form :model="model" class="xm-form" ref="form">
                <el-form-item label="场次">
                  <el-select v-model="time" filterable placeholder="请选择">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                      :disabled="item.disabled">
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="票档">
                  <el-select v-model="ticket" filterable placeholder="请选择">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                      :disabled="item.disabled">
                    </el-option>
                  </el-select>
                </el-form-item >
                <el-form-item label="数量">
                  <el-input-number v-model="num" @change="handleChange" :min="1" :max="6">
                  </el-input-number>
                </el-form-item>
                <el-form-item label="合计">
                  <span>{{price}}</span>
                </el-form-item>
                <el-button type="primary">立即预定</el-button>
              </el-form>
            </el-main>
          </el-container>
        </el-card>
        <el-card>
          <div v-for="o in 4" :key="o" class="text item">
            {{'列表内容 ' + o }}
          </div>
        </el-card>
      </el-main>
      <el-aside>
        <el-card class="box-card">
          <div v-for="o in 4" :key="o" class="text item">
            {{'列表内容 ' + o }}
          </div>
        </el-card>
      </el-aside>
    </el-container>
  </div>
</template>

<script>
import topMenu from './topMenu'

export default {
  name: 'detail',
  data () {
    const p = 3 * this.num
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
      time: '',
      ticket: '',
      num: '',
      price: p
    }
  },
  methods: {
    handleChange (value) {
      console.log(value)
    }
  },
  components: {
    topMenu
  }
}
</script>

<style lang="less" scoped>
@import '../style/mixin';

.xm-form{
  margin-top: 50px;
  margin-left: 50px;
}

</style>
