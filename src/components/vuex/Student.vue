<template>
  <div>
    <h1>student:</h1>
    <h1>学校：{{name}}</h1>
    <h1>班级：{{classRoom}}</h1>
    <ul>
      <li v-for="person in persons" :key="person.id">{{person.name}}</li>
    </ul>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: "Student",
  data(){
    return {

    }
  },
  mounted() {
  },
  computed:{
    ...mapState('school',['name','classRoom']),
    ...mapState('student',['persons'])
  }
}
</script>

<style scoped>

</style>