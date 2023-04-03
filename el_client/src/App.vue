<template>
  <div id="app">
    <router-view v-if="isShow" />
  </div>
</template>
<script>
export default {
  name: "App",
  provide() {
    return {
      reload: this.reload,
    };
  },
  data() {
    return {
      isShow: true,
    };
  },
  methods: {
    reload() {
      this.isShow = false;
      this.$nextTick(function () {
        this.isShow = true;
      });
    },
  },
};
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
* {
  margin: 0;
  padding: 0;
}
</style>
