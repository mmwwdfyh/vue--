<template>
  <div>
    <van-nav-bar title="详情" left-arrow @click-left="onClickLeft" />
    <ul>
      <li>
        <p>{{ list.title }}</p>
        <img :src="list.pic" alt />
        <div v-html="list.content"></div>
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
    var id = this.$route.query.id;
    this.$axios
      .get("https://api.it120.cc/small4/cms/news/detail?id=" + id)
      .then(mgs => {
        this.list = mgs.data;
      });
  },
  mounted() {},
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped lang="less">
li {
  font-size: 0.14rem;
}
</style>
