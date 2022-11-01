<template>
  <div class="navbar">
    <router-link :to="{ name: 'home' }">Pokemon List</router-link>
    <router-link :to="{ name: 'pokemon-id', params: { id: 32 } }">Pokemon por id</router-link>
    <router-link :to="{ name: 'about' }">About</router-link>
  </div>
</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style scoped>
.navbar {
  padding: 0 1rem;
}
.navbar a {
  color: #2c3e50;
  font-weight: bold;
  margin: 0 0.5rem;
}
a.router-link-exact-active {
  color: #42b983;
}
</style>
