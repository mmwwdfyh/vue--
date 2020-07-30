<template>
  <div>
    <van-nav-bar title="严选专栏" left-arrow @click-left="onClickLeft" />
    <!-- <van-loading type="spinner" size="20px" v-if="loading"></van-loading> -->
    <ul v-for="(item,index) in list" :key="index">
      <li @click="toogle(item.id)">
        <img :src="item.pic" alt />
        <p>{{ item.title }}</p>
        <p>{{ item.descript }}</p>
        <p>查看详情</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      // loading:true
    };
  },
  created() {
    this.$axios.get("https://api.it120.cc/small4/cms/news/list").then(mgs => {
      console.log(mgs);
      this.list = mgs.data;
    });
  },
  mounted() {},
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    toogle(id){
         this.$router.push("/Xiangqing?id="+id)
    }
  }
};
</script>

<style scoped lang="less">
ul {
  width: 5.2rem;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  li {
    width: 5.2rem;
    height: 3rem;
    position: relative;
    img{
        width: 5.2rem;
        height: 3rem;
    }
    p:nth-of-type(1) {
      position: absolute;
      top: 0.6rem;
    }
    p:nth-of-type(2) {
      position: absolute;
      top: 1.2rem;
    }
    p:nth-of-type(3) {
      position: absolute;
      top: 1.6rem;
    }
    p{
        width: 80%;
        font-size: 0.14rem;
        color: #fff;
        text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    }
  }
}
</style>
