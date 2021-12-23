<template>
  <div class="footer">
    <el-row :gutter="20">
      <el-col :span="12"><el-link type="primary" disabled>已完成0</el-link>/<el-link type="danger" disabled>未完成1</el-link></el-col>
      <el-col :span="6" :offset="4">
        <el-button type="danger" icon="el-icon-delete-solid">清除已完成任务</el-button>
      </el-col>
    </el-row>

  </div>
</template>

<script>
export default {
  name: "MyFooter"
}
</script>

<style scoped>

.footer {
  padding-top: 20px;
}
</style>