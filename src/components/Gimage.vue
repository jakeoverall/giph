<template>
  <img :src="gimage.url" height="250" v-if="gimage.url" />
  <div v-else>
    loading....
  </div>
</template>

<script>
export default {
  computed: {
    gimage() {
      return this.$store.state.gimage
    }
  }
}
</script>