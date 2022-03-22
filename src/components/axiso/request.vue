<template>
  <span>{{data}}</span>
</template>

<script>
import axios from 'axios'
export default {
  name: "request",
  data(){
    return{
      data:''
    }
  },
  mounted() {
    this.getOrderInfo();
  },
  methods: {
    getOrderInfo() {
      axios.get("http://localhost:8080/bill/payment/get/1").then(
          res => {
            this.data = res.data
            console.log("success",res.data)
      }, error => {
            console.log("error",error.error)
      })
    }
  }
}
</script>

<style scoped>

</style>