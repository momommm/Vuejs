<template>
    <div class="app-container">
        <mt-header fixed title="固定在顶部"></mt-header>


        <van-tabbar v-model="active">
  <van-tabbar-item icon="home-o">标签</van-tabbar-item>
  <van-tabbar-item icon="search">标签</van-tabbar-item>
  <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
  <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
    </van-tabbar>
    <h1 >这是一个APP组件</h1>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                active: 0
            }
        }
    }
</script>

<style scoped>
.app-container{
    padding-top: 40px;
}
</style>