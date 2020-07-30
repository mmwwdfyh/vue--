<template>
  <div>
    <div class="list">
      <p @click="ren">人气推荐></p>
    </div>
    <ul>
      <li v-for="(item,index) in list" @click="toole(item.id)" :key="index">
        <img :src="item.pic" alt />
        <p class="p1">{{ item.name }}</p>
        <p>{{ item.characteristic }}</p>
        <p class="p2">${{ item.originalPrice }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: []
    };
  },
  created() {
    this.$axios.get("https://api.it120.cc/small4/shop/goods/list").then(mgs => {
      let arr = mgs.data.filter(item => {
        return item.name.indexOf("测试") == -1;
      });
      arr.sort(() => {
        return Math.random() - 0.5;
      });
      this.list = arr.splice(-6);
      // console.log(mgs);
    });
  },
  mounted() {},
  methods: {
    toole(id){
      this.$router.push("/shanxiang?id="+id)
    },
    ren() {
      this.$router.push("/renqiquan")
    }
  }
};
</script>

<style scoped lang="less">
.list {
  width: 5.2rem;
  height: 0.46rem;
  line-height: 0.46rem;
  text-align: center;
  border-bottom: 0.01rem solid #ccc;
  border-top: 0.1rem solid #ddd;
  p {
    font-size: 0.18rem;
  }
}
ul {
  width: 5.2rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  li {
    height: 4rem;
    img {
      width: 2.33rem;
      height: 3rem;
      display: block;
    }
    p {
      color: red;
      font-size: 0.14rem;
      width: 2rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .p1 {
      font-size: 0.12rem;
      color: #000000;
      width: 2rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .p2 {
      font-size: 0.14rem;
      color: #b2b2b2;
      width: 2rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-top: 0.1rem;
      color: red;
    }
  }
}
</style>
