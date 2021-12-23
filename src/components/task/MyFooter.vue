<template>
  <div class="footer">
    <el-row :gutter="20">
      <el-col :span="8"><i class="el-icon-edit"><span>完成0/未完成0</span></i></el-col>
      <el-col :span="6" :offset="7">
        <el-button type="primary" icon="el-icon-delete-solid">清除已完成任务</el-button>
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