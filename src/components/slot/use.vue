<template>
  <div>
    <DataResource>
      <template  v-slot:MyGame2="games">
        <ol>
          <li v-for="(game,index) in games.games" :key="index">{{game}}</li>
        </ol>
      </template>
      <template   v-slot:MyGame1="games" >
        <ul>
          <li v-for="(game,index) in games.games" :key="index">{{game}}</li>
        </ul>
      </template>
      <template  v-slot:MyGame3="games">
        <ol v-show="games.games.length" >
          <li style="color: rebeccapurple" v-for="(game,index) in games.games" :key="index">{{game}}</li>
        </ol>
      </template>
    </DataResource>

  </div>
</template>

<script>
import DataResource from './data'
export default {
  name: "UseSlot",
  components: {
    DataResource
  }
}
</script>

<style scoped>

</style>