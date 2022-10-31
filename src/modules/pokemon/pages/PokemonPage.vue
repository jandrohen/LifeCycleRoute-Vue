<template>
  <h1>Pokemon: <span>#{{ id }}</span></h1>
  <div v-if="pokemon">
    <img :src="pokemon.sprites.front_default" :alt="pokemon.name">
  </div>
</template>

<script>
export default {

  props: {
    id: {
      type: Number,
      required: true
    }
  },

  name: "PokemonPage",

  data() {
    return {
      // id: null
      pokemon: null
    };
  },

  created() {
    // const { id } = this.$route.params;
    // this.id = id;
    // console.log(id);
    this.fetchPokemon();
  },

  methods: {
    async fetchPokemon() {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${ this.id }`)
        this.pokemon = await response.json();
        console.log(this.pokemon);
      } catch (error) {
        this.$router.push('/');
        console.log('No hay nada que hacer')
      }
    }
  },

  watch: {
    id() {
      this.fetchPokemon();
    }
  }

}
</script>

<style scoped>

</style>
