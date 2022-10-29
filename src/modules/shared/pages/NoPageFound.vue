<template>
  <div class="no-page-found">
    <h1>404</h1>
    <h2>Page not found</h2>
    <p>The page you are looking for does not exist.</p>
  </div>
</template>

<script>
export default {
  name: 'NoPageFound'
}
</script>

<style>
.no-page-found {
  text-align: center;
  margin-top: 100px;
  h1 {
    font-size: 100px;
    font-weight: 100;
  }
  h2 {
    font-size: 30px;
    font-weight: 100;
  }
}
</style>
