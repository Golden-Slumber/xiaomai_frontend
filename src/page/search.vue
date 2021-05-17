<template>
  <div class="xm-search fillcontain">
    <topMenu activeIndex="2"> </topMenu>
    <el-container>
      <el-header>
        <el-card class="xm-card" broder>
          <el-row :span="14">
            <span>城市:</span>
            <el-select v-model="value" filterable placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <el-divider direction="vertical" class="xm-divider"></el-divider>
            <span>分类：</span>
            <el-select v-model="value" filterable placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-row>
        </el-card>
      </el-header>
      <el-divider></el-divider>
      <el-container>
        <el-main class="xm-card">
          <el-table :data="tableData" >
            <el-table-column prop="date" label="日期" width="140">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="120">
            </el-table-column>
            <el-table-column prop="address" label="地址">
            </el-table-column>
          </el-table>
        </el-main>
        <el-aside>
          <el-card class="box-card">
            <div v-for="o in 4" :key="o" class="text item">
              {{'列表内容 ' + o }}
            </div>
          </el-card>
        </el-aside>
      </el-container>
    </el-container>
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
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
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
      value: ''
    }
  }
}
</script>

<style lang="less" scoped>
//@import '../style/mixin';
//
.xm-search{
  background-color: #E0E0E0;
}

.xm-card{
  margin-top: 10px;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 10px;
  width: fit-content;
}

.xm-divider{
  margin-left: 20px;
  margin-right: 20px;
}
</style>
