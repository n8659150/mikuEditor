<template>
  <div class="footerWrap">
    <footer>Created by Jack Li using Vue 2.0 with love</footer> 
  </div>
</template>

<script>
export default {
  name: "footerArea",
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footerWrap {
  background:rgba(29,29,31,0.07);
  padding-top:8px;
}
  footer {
    /* border:1px solid red; */
    text-align: center;
    background:#fff;
    height:27px;
    line-height:27px;
  }
</style>
