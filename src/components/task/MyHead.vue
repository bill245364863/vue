<template>
  <div>
    <el-input v-model="input" placeholder="请输入内容" @change="add"></el-input>
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
  props: ['receive'],
  methods: {
    add() {
      if(!this.input.trim()) return  alert('输入不能为空')
      const obj = {id: nanoid(), title: this.input, done: false}
      this.receive(obj)
      this.input = ''
    }
  }
}
</script>

<style scoped>

</style>