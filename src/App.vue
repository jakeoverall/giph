<template>
  <div id="app">
    <form @submit.prevent="handleQuery">
      <input type="text" v-model.trim="query" required />
    </form>
    <gimage />
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      query: ''
    }
  },
  methods: {
    handleQuery() {
      if (!this.query) { return }
      this.$store.dispatch('getRandomGif', this.query)
    }
  }


}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
