<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-btn
        href=""
        target="_blank"
        text
      >
        <span class="mr-2">Test technique de stage</span>
      </v-btn>

       
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://www.frymarshall.com"
        target="_blank"
        text
      >
        <span class="mr-2">FRY Marshall</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  }),
};
</script>
