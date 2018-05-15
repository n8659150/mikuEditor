<template>
  <transition appear appear-active-class="animated bounceInDown">
    <div class="footerWrap">
      <footer>Created by 
        <a href="https://www.github.com/n8659150">Jack</a> 
        using <img src="../assets/logo.png" width="20" height="20" /> with <img src="../assets/hearts.png" width="24" height="24"></footer>
    </div>
  </transition>
</template>

<script>
export default {
  name: "footerArea"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footerWrap {
  border-top: 5px solid rgba(29,29,31,0.07);
  display:flex;
  justify-content: center;
}

  footer {
    /* border:1px solid red; */
    display:flex;
    width:243px;
    height:27px;
    line-height:27px;
    align-items: center;
    justify-content: space-between;
  }
</style>
