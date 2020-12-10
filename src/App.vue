<template>
  <v-app>
    <topBar/>
<!--    <sideBar/>-->
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
  import topBar from './components/topBar.vue'
  import sideBar from './components/sideBar.vue'
export default {
  name: 'App',
  components: {
    topBar,
    sideBar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

}
</style>
