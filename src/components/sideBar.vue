<template>
  <v-navigation-drawer
    permanent
    expand-on-hover
    color="#384683">
    <v-list>
      <v-list-item link>
        <v-list-item-icon>
          <v-icon>mdi-folder</v-icon>
        </v-list-item-icon>
        <v-list-item-title>My Files</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  export default {
    name: 'sideBar'
  }
</script>

<style scoped>

</style>
