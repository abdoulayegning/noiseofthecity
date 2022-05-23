<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template> 
  <div>
    <router-view></router-view>  
  </div>
</template>

<script> 
 
export default {
  name: 'App',
  data(){
      return {
           
      }
  }, 
  mounted(){
     
  }
}
</script>

<style> 
body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  overflow-y: scroll;
  background-image: url('./assets/static.jpeg');  
}

#sketch { 
    position: absolute;
    z-index: -1000;
    top: 0;
    left: 0; 
}
 

@font-face {
    font-family: 'Stopwatch';
    src: url('./assets/stopwatch/StopwatchRegular.eot');
    src: url('./assets/stopwatch/StopwatchRegular.eot?#iefix') format('embedded-opentype'),
        url('./assets/stopwatch/StopwatchRegular.woff2') format('woff2'),
        url('./assets/stopwatch/StopwatchRegular.woff') format('woff'),
        url('./assets/stopwatch/StopwatchRegular.ttf') format('truetype'),
        url('./assets/stopwatch/StopwatchRegular.svg#StopwatchRegular') format('svg');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}


</style>
