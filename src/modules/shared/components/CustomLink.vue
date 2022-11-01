<template>
  <a v-if="isExternalLink"
     target="_blank"
     :href="link.to"
     class="normal-link" >{{ link.name }}</a>

  <router-link
      v-else
      :to="link.to"
      v-slot="{ href, isActive }">
    <a :href="href"
       :class=" isActive ? 'is-active' : 'normal-link'"> {{ link.name }} </a>
  </router-link>

</template>

<script>
export default {
  name: "CustomLink",

  props: {
    link: {
      type: Object,
      required: true
    }
  },
  computed: {
    isExternalLink() {
      return this.link.to.startsWith('http');
    }
  }

}
</script>

<style scoped>
.is-active {
  color: #42b983;
}
.normal-link {
  color: #2c3e50;
  font-weight: bold;
  margin: 0 0.5rem;
}
</style>
