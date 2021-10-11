<template>
  <div id="app">
    <router-link to="/home" tag="button">home</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    components: {

    }
  }

</script>

<style>
  @import "assets/css/base.css";
</style>
