<template>
  <v-card
    min-width="50px"
    flat
  >
    <v-card-text>
      <v-col>
        <v-row>
          <v-text-field
            label="Login"
            clearable
          />
        </v-row>
        <v-row>
          <v-text-field
            label="Password"
            clearable
            type="password"
          />
        </v-row>
        <v-row>
          <a href="#">forgot password?</a>
        </v-row>
      </v-col>
    </v-card-text>
    <v-card-actions>
      <v-btn
        color="#384683"
        block
        class="white--text"
      >
        sign in
      </v-btn>

    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    name: 'loginForm'
  }
</script>

<style scoped>

</style>
