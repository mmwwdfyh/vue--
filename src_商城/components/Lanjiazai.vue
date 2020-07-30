<template>
  <div class="box">
    <div class="item" v-for="(item,index) in goodsList" :key="index">
      <img src="@/assets/logo.png" :data_src="item.pic" />
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      goodsList: []
    };
  },
  created() {},
  mounted() {
    this.getGoods();
    document.addEventListener("scroll", this.lazyload);
  },
  methods: {
    getGoods() {
      this.$axios
        .get("https://api.it120.cc/small4/shop/goods/list")
        .then(res => {
          this.goodsList = res.data;
          this.$nextTick(() => {
            this.lazyload();
          });
        });
    },
    lazyload() {
      //定义一个兼容性的写法
      let html = document.documentElement || document.body;
      //获取所有的图片信息
      let imgs = document.querySelectorAll("img");

      for (let i = 0; i < imgs.lentght; i++) {
           //如果页面的滚动高度+可视区域窗口>图片距离顶端的高度
        //html.scrollTop + html.clientHeight > imgs[i].offsetTop
        if(html.scrollTop + html.clientHeight > imgs[i].offsetTop){
            this.$toast.loading("努力加载中，请稍后");
            setTimeout(function(){
                imgs[i].src = imgs[i].getAttribute("data_src");
            },3000)
        }
      }
    }
  }
};
</script>

<style scoped lang="less">
.box {
  width: 100%;
  background: #f0f0f0;
  .item {
    width: 100%;
    margin-bottom: 0.3rem;
    img {
      width: 100%;
      height: 5.5rem;
    }
  }
}
</style>
