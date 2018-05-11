<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <headerArea />
    <mainArea/> 
    <footerArea />
  </div>
</template>

<script>
import headerArea from "./components/headerArea"
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
/* textarea{
  width: 200px;
  height: 100px;
} */
#app {
  min-height:100%;
  flex:1;
  display:flex;
  flex-direction: column;
}
</style>
