<template>
  <h1>About Page</h1>
  <hr>
  <h2>{{ message }}</h2>
  <button @click="onChangeName">
    Cambiar mensaje
  </button>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello World'
    }
  },
  methods: {
    onChangeName() {
      console.log('cambiando mensaje')
      this.message = 'Hello Vue'
    }
  },
  name: "AboutPage",
  beforeCreate() {
    console.log("AboutPage beforeCreate");
  },
  created() {
    console.log("AboutPage created");
  },
  beforeMount() {
    console.log("AboutPage beforeMount");
  },
  mounted() {
    console.log("AboutPage mounted");
  },
  beforeUpdate() {
    console.log("AboutPage beforeUpdate");
  },
  updated() {
    console.log("AboutPage updated");
  },
  activated() {
    console.log("AboutPage activated");
  },
  deactivated() {
    console.log("AboutPage deactivated");
  },
  beforeUnmount() {
    console.log("AboutPage beforeUnmount");
  },
  unmounted() {
    console.log("AboutPage unmounted");
  },
  errorCaptured() {
    console.log("AboutPage errorCaptured");
  },
  renderTracked() {
    console.log("AboutPage renderTracked");
  },
  renderTriggered() {
    console.log("AboutPage renderTriggered");
  },
  beforeDestroy() {
    console.log("AboutPage beforeDestroy");
  },
  destroyed() {
    console.log("AboutPage destroyed");
  },

}
</script>

<style scoped>

</style>
