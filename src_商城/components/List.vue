<template>
  <div>
    <span @click="fan">fan</span>
    <!-- <ul class="goods-item">
       <li class="g-item" v-for="(item,index) in list" :key="index">
         <img :src="item.pic" alt="">
         <p>{{ item.name }}</p>
         <p>{{ item.originalPrice }}</p>
       </li>
    </ul>-->
    <router-link
      tag="div"
      class="g-item"
      v-for="(item,index) in list"
      :key="index"
      :to="'/shanxiang'+item.id"
    >
      <img :src="item.pic" />
      <p v-html="item.name"></p>
      <p>￥ {{item.originalPrice}}</p>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: []
    };
  },
  computed: {},
  created() {
    // console.log(this.$route.query.cateid)
    this.$axios.get("https://api.it120.cc/small4/shop/goods/list").then(mgs => {
      console.log(mgs);
      this.list = mgs.data.filter(item => {
        return item.categoryId == this.$route.query.cateid;
        console.log(item);
      });
    });
  },
  mounted() {},
  methods: {
    fan() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped lang="less">
.goods-item {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  .g-item {
    width: 48%;
    margin: 1%;
    img {
      width: 100%;
      height: 3.2rem;
    }
    p {
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      line-height: 0.6rem;
      font-size: 0.14rem;
    }
    p:nth-of-type(2) {
      color: #ff0000;
      font-size: 0.2rem;
    }
  }
}
span {
  font-size: 0.14rem;
  float: left;
}
</style>
