<template>
  <div id="app">
    <WeatherApp />
  </div>
</template>

<script>
import WeatherApp from './components/WeatherApp.vue'

export default {
  name: 'app',

  components: {
    WeatherApp
  }
}
</script>

<style>
/** Global **/
@import url('https://fonts.google.com/specimen/Roboto?selection.family=Roboto:400,700');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'robotoregular';
  text-align: center;
  color: rgba(255, 255, 255, 0.9);
}
</style>
