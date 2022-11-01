<template>
  <div class="navbar">
<!--    <router-link :to="{ name: 'home' }">Pokemon List</router-link>-->
<!--    <router-link :to="{ name: 'pokemon-id', params: { id: 32 } }">Pokemon por id</router-link>-->
<!--    <router-link :to="{ name: 'about' }">About</router-link>-->
    <CustomLink
        v-for="link in links"
        :key="link.to"
        :link="link"
    />
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
  name: "Navbar",

  data() {
    return {
      links:[
        { to: '/home', name: 'Pokemons'},
        { to: '/pokemonid/50', name: 'Por ID'},
        { to: '/about', name: 'About'},
        { to: 'https://google.com', name: 'Google'}
      ]
    }
  },

  components: {
   CustomLink: defineAsyncComponent(() => import('./CustomLink.vue'))
  }

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
