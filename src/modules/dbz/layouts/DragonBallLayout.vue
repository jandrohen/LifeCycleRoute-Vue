<template>
  <div class="dragonball-layout">
    <h1> DBZ Layout </h1>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "DragonBallLayout"
}
</script>

<style scoped>
.dragonball-layout {
  background-color: #1E90FF;
  padding: 20px;
}
</style>
