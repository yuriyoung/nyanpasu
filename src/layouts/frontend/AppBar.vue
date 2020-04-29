<!-- app bar -->
<template>
  <v-app-bar id="app-toolbar" app elevate-on-scroll color="white" extension-height="40">
    <v-container class="pa-0 d-flex">
      <base-logo />

      <v-toolbar-items>
        <base-tutorial-menu />
        <base-mega-menu>
          技术支持
        </base-mega-menu>
      </v-toolbar-items>

      <v-spacer />

    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  name: "FrontendAppBar",
  components: {},

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