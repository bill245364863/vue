<template>
  <div>
    <el-input v-model="input" placeholder="请输入内容" @change="add"/>
  </div>
</template>

<script>
import {nanoid} from 'nanoid'
export default {
  name: "MyHead",
  data() {
    return {
      input: ''
    }
  },
  methods: {
    add() {
      if(!this.input.trim()) return  alert('输入不能为空')
      const obj = {id: nanoid(), title: this.input, done: false}
      //
      this.$bus.$emit("addTask",obj)
      this.input = ''
    }
  }
}
</script>

<style scoped>

</style>