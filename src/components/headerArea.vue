<template>
  <transition appear  appear-active-class="animated bounceInDown">
  <div>
    
      <header>
        <img src="../assets/miku_logo.png" alt="miku_logo">
      </header>
    
  </div>
  </transition>
</template>

<script>
export default {
  name: "headerArea",
  data() {
    return {
      hello: true
    };
  }
};
</script>

<style scoped>
header {
  height: 43px;
  box-shadow: 0 10px 60px 0 rgba(29, 29, 31, 0.07);
  opacity: 0.94;
}
header img {
  display: inline-block;
  height: 43px;
  line-height: 43px;
  position: absolute;
  left: 16px;
}

/* fade 效果*/
.header-appear {
  opacity: 0;
}
.header-appear-active {
  transition: all 2s ease;
}
</style>
