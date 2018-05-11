<template>
  <div>
    <header>
      <img src="../assets/miku_logo.png" alt="miku_logo">
    </header>
  </div>
</template>

<script>
export default {
  name: 'headerArea',
  data () {
    return {
      
    } 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  height:43px;
  box-shadow:0 10px 60px 0 rgba(29,29,31,0.07);
  opacity:0.94;
}
header img {
  display:inline-block;
  height:43px;
  line-height:43px;
  position:absolute;
  left:16px;
  }
</style>
