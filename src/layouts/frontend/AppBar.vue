<!-- app bar -->
<template>
  <v-app-bar id="app-toolbar" app elevate-on-scroll color="white" extension-height="40">
    <v-container class="pa-0 d-flex">
      <base-logo />

      <v-toolbar-items>
        <base-mega-menu text="Tutorials" :items="tutorials" />
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
    tutorials: require('@/data/tutorials'),
  }),

  computed: {},

  methods: {},

  mounted() {}
};
</script>

<style lang='scss' scoped>
</style>