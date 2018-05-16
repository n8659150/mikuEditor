<template>
  <div id="app">
    <headerArea />
    <mainArea/> 
    <footerArea />
  </div>
</template>

<script>
import headerArea from "./components/headerArea";
import mainArea from "./components/mainArea";
import footerArea from "./components/footerArea";
export default {
  name: "App",
  components: {
    headerArea,
    mainArea,
    footerArea
  }
};
</script>

<style>
#app {
  min-height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
}
</style>
