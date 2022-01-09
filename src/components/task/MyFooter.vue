<template>
<!--  taskTotal = 0 为假 其余都是为真-->
  <div class="footer" v-show="taskTotal">
    <el-row :gutter="20">
      <el-col :span="12"><el-link type="primary" disabled>已完成{{taskFinish}}</el-link>/<el-link type="danger" disabled>全部{{taskTotal}}</el-link></el-col>
      <el-col :span="6" :offset="4">
        <el-button type="danger" icon="el-icon-delete-solid" @click="deleteFinishTask">清除已完成任务</el-button>
      </el-col>
    </el-row>

  </div>
</template>

<script>
export default {
  name: "MyFooter",
  data(){
    return {
     task:[]
    }
  },
  methods:{
    //删除已完成的任务
    deleteFinishTask(){
      this.$bus.$emit('deleteFinishTask')
    },
    //处理任务消息列表
    handleTask(task){
      this.task = task
    }
  },
  created() {
    this.$bus.$on('taskToFooter',this.handleTask)
  },
  mounted() {
 },
  computed:{
    taskTotal(){
      return this.task.length
    },
    taskFinish(){
      return this.task.reduce((pre,current)=> pre + (current.done ? 1:0),0)
    }

  },
  destroyed() {
    this.$bus.$off('taskToFooter')

  }
}
</script>

<style scoped>

.footer {
  padding-top: 20px;
}
</style>