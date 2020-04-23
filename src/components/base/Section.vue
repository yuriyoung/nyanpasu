<!-- $attrs available in vue 2.4 or later-->
<template>
    <v-container class="py-6 py-md-12" fluid tag="section" v-bind="$attrs" v-on="$listeners"></v-container>
</template>

<script>
export default {
    name: "BaseSection",
    components: {},

    data: () => ({
        //
    }),

    computed: {},

    methods: {},

    mounted(){}
}
</script>

<style lang='scss' scoped>
</style>