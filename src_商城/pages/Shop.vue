<template>
  <div>
    <router-view></router-view>
    <van-tabbar route>
      <van-tabbar-item replace to="/index" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/fen" icon="apps-o">分类</van-tabbar-item>
      <van-tabbar-item replace to="/gou" icon="shopping-cart-o">购物车</van-tabbar-item>
      <van-tabbar-item replace to="/ge" icon="manager-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="less">
</style>
