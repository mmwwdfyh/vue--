<template>
  <div>
    <div class="banner">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item,index) in bannerlist" :key="index">
          <img :src="item.picUrl" />
        </van-swipe-item>
      </van-swipe>
      <nav>
        <ul>
          <li>
            <van-icon name="like" size="50" color="#FF0000" />
            <p>签到</p>
          </li>
          <li>
            <van-icon name="bag" size="50" color="#FF0000" />
            <p>礼券</p>
          </li>
          <li @click="toogle">
            <van-icon name="coupon" size="50" color="#FF0000" />
            <p>砍价</p>
          </li>
          <li @click="zhuan">
            <van-icon name="gift" size="50" color="#FF0000" />
            <p>专栏</p>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bannerlist: []
    };
  },
  created() {
    this.$axios.get("https://api.it120.cc/small4/banner/list").then(mgs => {
      this.bannerlist = mgs.data;
    });
  },
  mounted() {},
  methods: {
    toogle(){
      this.$router.push("/kanjia")
    },
    zhuan(){
      this.$router.push("/zhuan")
    }
  }
};
</script>

<style scoped lang="less">
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  //   background-color: #39a9ed;
}
.banner {
  width: 5.2rem;
  position: relative;
  img {
    width: 5.2rem;
    height: 5.2rem;
  }
}
nav {
  width: 5.2rem;
  // padding: 0.3rem 0.12rem;
  box-sizing: border-box;
  position: absolute;
  bottom: 0px;
  background-color: #fff;
  border-top-left-radius: 0.3rem;
  border-top-right-radius: 0.3rem;
  ul {
    width: 5rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    li {
      width: 1.1rem;
      text-align: center;
      p {
        margin-bottom: 0.12rem;
        font-size: 0.35rem;
      }
    }
  }
}
</style>
