<!-- Frontend page layout -->
<template>
  <v-app>
    <frontend-app-bar />

    <v-content>
      <v-responsive min-height="100vh">
        <router-view />
      </v-responsive>
    </v-content>

    <frontend-footer />
  </v-app>
</template>

<script>
export default {
  name: "FrontendLayout",
  components: {
    FrontendAppBar: () => import("./AppBar"),
    FrontendFooter: () => import("./Footer")
  },

  data: () => ({
    //
  }),

  computed: {},

  methods: {},

  mounted() {}
};
</script>

<style lang='scss' scoped>
</style>