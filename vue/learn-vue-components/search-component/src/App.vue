<template>
  <div id="app">
    <search />
    <router-view/>
  </div>
</template>
<script>
import Search from './components/Search';

export default {
  components:{
    Search
  }
}
</script>
<style>
*{
  margin: 0;
  padding: 0;
}
#app{
  padding: 0 15px;
}
</style>
