<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="7">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>我的代办任务</span>
          </div>
          <MyHead :receive="receive"/>
          <MyList :tableData="tableData"/>
          <MyFooter/>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import MyHead from './MyHead'
import MyList from './MyList'
import MyFooter from './MyFooter'

export default {
  name: "MyTask",
  data(){
    return{
      tableData: [{
        id: 'hdjaksdhajk',
        title: '学代码',
        done: true
      },{
        id: 'hdjaksfgfdshajk',
        title: '学代码',
        done: false
      },{
        id: 'hdjaksdgfgfdhajk',
        title: '学代码',
        done: true
      },{
        id: 'hdjaksdfdfgfdhajk',
        title: '学代码',
        done: true
      },{
        id: 'hdjaksdfgfgdhajk',
        title: '学代码',
        done: true
      }]
    }
  },
  components: {
    MyHead, MyList, MyFooter
  },
  methods: {
    receive(x){
      this.tableData.unshift(x)
    }
  }
}
</script>

<style scoped>
.el-col {
  border-radius: 4px;
}
</style>