<template>
  <div>
    <div style="background-color: royalblue">
      <slot name="MyGame1" :games="games">1</slot>
    </div>
    <div style="background-color: aquamarine">
      <slot name="MyGame2" :games="games">2</slot>
    </div>
    <div style="background-color:brown">
      <slot name="MyGame3" :games="games">3</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "DataResource",
  data(){
    return {
      games:["穿越火线","qq飞车","qq三国","qq糖"]
    }
  }
}
</script>

<style scoped>

</style>