<template>
    <v-row class="justify-center mx-1">
      <v-col class="justify-center" style="min-width: 48%">
        <v-btn color="#384683" outlined small class="ma-1"
        >Добавить</v-btn>
        <v-btn color="#384683" outlined small class="ma-1" @click="sync1c"
        >Синхронизировать с 1C</v-btn>
        <v-btn color="#384683" outlined small class="ma-1"
        >Удалить все</v-btn>
        <v-treeview
          class="text-xs"
          open-on-click
          :items="moodleTree"
        />
      </v-col>
      <v-col class="justify-center" style="min-width: 48%">
        <v-btn color="#384683" outlined small class="ma-1"
        >Добавить</v-btn>
        <v-btn color="#384683" outlined small class="ma-1"
        >Синхронизировать с Moodle</v-btn>
        <v-btn color="#384683" outlined small class="ma-1"
        >Удалить все</v-btn>
        <v-treeview
          class="text-xs"
          open-on-click
          :items="odinSTree"
        />
      </v-col>
    </v-row>

</template>

<script>
  import {mapActions, mapState} from 'vuex'
  export default {
    name: 'vsCategory',
    computed: {
    ...mapState(['moodleTree', 'odinSTree'])
    },
    methods: {
      ...mapActions(['getAllTrees', 'syncCat']),
      getTrees () {
          this.getAllTrees()
    },
      sync1c () {
      this.syncCat('1c')
      }
    },
    created () {
      this.getTrees()
    }
  }
</script>

<style scoped>

</style>
