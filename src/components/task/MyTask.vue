<template>
  <div>
    <el-row :gutter="20">
      <!--      事件总线-->
      <el-col :span="7">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>我的代办任务 [事件总线]</span>
          </div>
          <MyHead/>
          <MyList/>
          <MyFooter/>
        </el-card>
      </el-col>
      <!--      插槽-->
      <el-col :span="7">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>插槽 [默认插槽,具名插槽,作用域插槽]</span>
          </div>
          <UseSlot></UseSlot>
        </el-card>
      </el-col>
      <!--      vuex-->
      <el-col :span="7">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>vuex [actions,mutations,state,getters,commit,dispatch]</span>
          </div>
          <el-row>
            <el-col>
              <el-card class="box-card">
                <div slot="header" class="clearfix">
                  <span>School</span>
                </div>
                <School/>
              </el-card>
            </el-col>
          </el-row>
          <el-row>
            <el-col >
              <el-card class="box-card">
                <div slot="header" class="clearfix">
                  <span>Student</span>
                </div>
                <Student/>
              </el-card>
            </el-col>
          </el-row>
        </el-card>
      </el-col>

    </el-row>
    <el-row :gutter="20">
<!--      路由跳转-->
      <el-col :span="7">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>路由[route routes router]</span>
          </div>

        </el-card>
      </el-col>
<!--      请求跨域测试-->
      <el-col :span="7">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>axios</span>
          </div>
          <RequestDemo></RequestDemo>
        </el-card>
      </el-col>
    </el-row>

  </div>
</template>

<script>
import MyHead from './MyHead'
import MyList from './MyList'
import MyFooter from './MyFooter'
import UseSlot from '../slot/use'
import School from "@/components/vuex/School";
import Student from "@/components/vuex/Student";
import RequestDemo from "@/components/axiso/request"

export default {
  name: "MyTask",
  components: {
    MyHead, MyList, MyFooter, UseSlot, School, Student, RequestDemo
  },
}
</script>

<style scoped>
.el-col {
  border-radius: 4px;
}
</style>