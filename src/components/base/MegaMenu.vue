<!--  -->
<template>
  <v-menu
    v-model="shown"
    bottom
    right
    offset-y
    :close-on-content-click="false"
    max-height="calc(100% - 16px)"
    max-width="1000"
    nudge-left="200"
    transition="slide-y-transition"
  >
    <template v-slot:activator="{ on: menu }">
      <v-btn text v-on="menu" min-width="48">
        <v-icon left class="hidden-md-and-up" v-if="icon">{{ icon }}</v-icon>
        <span class="subtitle-1 text-capitalize font-weight-light">{{ text }}</span>
        <v-icon right class="hidden-sm-and-down">mdi-menu-down</v-icon>
      </v-btn>
    </template>

    <v-card>
      <v-container>
        <v-row align="start" justify="start">
          <template v-for="item in items">
            <v-col cols="auto" :key="item.text">
              <base-link-item v-bind="item" @click="shown = false"></base-link-item>
            </v-col>
          </template>
        </v-row>
      </v-container>
    </v-card>
  </v-menu>
</template>

<script>
export default {
  name: "BaseMegaMenu",

  components: {},

  props: {
    text: { type: String, default: "" },
    icon: { type: [Boolean, String], default: false },
    items: { type: [Array] },
  },

  data: () => ({
    shown: false,
  }),

  computed: {},

  methods: {},

  mounted() {}
};
</script>

<style lang='scss' scoped>
</style>