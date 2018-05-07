<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <jsOnline/> 
    
  </div>
</template>

<script>
import jsOnline from './components/jsOnline'

export default {
  name: 'App',
  components: {
    jsOnline
  }
}
</script>

<style>
textarea{
  width: 200px;
  height: 100px;
}
</style>
