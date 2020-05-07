<template>
<div>
View
</div>  
</template>
<script>
export default {
  created () { // 生命周期 当组件被加载时
    // console.log('创建了');
    let province = this.$route.path;
    console.log(province)
  }
}
</script>
<style>

</style>
