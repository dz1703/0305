<template>
  <div>
      <model />
  </div>
  
</template>

<script>
import model from './main/model.vue'
export default {
  name: 'App',
  components: {
    model
  }
}
</script>

<style>
menu{
  height:100%;
  width:100%;
}
body{
  margin:0;
  padding:0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin:0;
  padding:0;
}
.menu{
  position: fixed;
  z-index:999;
  height:100%;
  width:100%;
}
</style>