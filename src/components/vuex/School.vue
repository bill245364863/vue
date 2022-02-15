<template>
  <div>
    <h1>school:</h1>
    <span>学生人数为：{{ personCount.length }}</span>

    <br>
    <input type="text" v-model="student.name"/>
    <button @click="addStudent">添加人员</button>
    <button @click="addHuangStudent">添加姓黄的人员</button>
    <button @click="addFilterStudent(student.name)">添加不重复的人员</button>
  </div>
</template>

<script>
import {nanoid} from 'nanoid'
import {mapActions} from 'vuex'
export default {
  name: "School",
  data() {
    return {
      student: {
        name: ''
      }

    }
  },
  watch:{
    /*student(x,y){
      console.log(x,y)
    }*/
  },
  computed: {
    personCount() {
      return this.$store.state.student.persons
    }
  },
  methods: {
    addStudent() {
      const studentObj = {
        id:nanoid(),
        name: this.student.name
      }
      //添加学生 是用commit唤醒mutation里面的方法
      this.$store.commit('student/ADD_STUDENT', studentObj)
    },
    addHuangStudent(){
      const studentObj = {
        id:nanoid(),
        name: this.student.name
      }
      //添加学生 是用commit唤醒mutation里面的方法
      this.$store.dispatch('student/addHuangStudent', studentObj)
    },
    //添加不重复的学生
    /*addFilterStudent(){
      const studentObj = {
        name: this.student.name
      }
      this.$store.dispatch("student/addFilterStudent",studentObj)
    }*/
    //添加不重复的学生
    ...mapActions('student',['addFilterStudent'])
  }
}
</script>

<style scoped>

</style>