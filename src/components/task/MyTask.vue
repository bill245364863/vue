<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="7">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>我的代办任务</span>
          </div>
          <MyHead />
          <MyList />
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
  components: {
    MyHead, MyList, MyFooter
  },
}
</script>

<style scoped>
.el-col {
  border-radius: 4px;
}
</style>