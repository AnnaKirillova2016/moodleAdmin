<template>
  <v-app-bar
    max-height="65px"
    color="#384683">
    <v-img
      src="http://isu.ru/images/logo.png"
      max-width="35px"
      max-height="35px"
    />
    <v-spacer/>
    <v-row
      justify="space-center"

    >
      <v-menu
        v-for="([text, rounded], index) in btns"
        :key="text"
        :rounded="rounded"
        offset-y
      >
        <template v-slot:activator="{ attrs, on }">
          <v-btn
            text
            color="#384683"
            class="white--text ma-1"
            v-bind="attrs"
            v-on="on"
          >
            {{ text }}
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="item in menus[index]"
            :key="item"
            link
          >
            <v-list-item-title v-text="item"></v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-row>
    <v-spacer/>
    <v-menu
      offset-y
      rounded="lg"
      transition="slide-y-transition"
      :close-on-content-click="false"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
        >
          logIn
        </v-btn>
      </template>
      <v-list>
        <v-list-tile></v-list-tile>
        <v-list-item>
          <loginForm/>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
  import loginForm from './loginForm.vue'
  export default {
    name: 'mainMenu',
    components: {
      loginForm
    },
    data: () => ({
      btns: [
        ['Moodle', 'lg'],
        ['1C', 'lg'],
        ['Настройки', 'lg']
      ],
      menus:[
        ['Обновить категории', 'Загрузить курс', 'Выгрузить курс', 'Обновить списочный состав'],
        ['Обновить журнал успеваемости'],
        ['Управление пользователями', 'Учетные записи moodle', 'Учетные записи 1С']
      ]
    })
  }
</script>

<style scoped>

</style>
