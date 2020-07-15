<template>
  <div>
    <!-- <input type="text" /> -->
    <!-- <van-tree-select height="60px" :items="items" :main-active-index.sync="active">
      <template #content></template>
    </van-tree-select> -->
   <Fenlei></Fenlei>
  </div>
</template>

<script>
import Fenlei from "../components/Fenlei";
export default {
  data() {
    return {
    //   active: 0,
    //   items: [
    //     { text: "所有分类" },
    //     { text: "居家" },
    //     { text: "配件装饰" },
    //     { text: "服装" },
    //     { text: "电器" }
    //   ]
    };
  },
  components:{
      Fenlei
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="less">
// input {
// //   width: 4rem;
// //   height: 0.3rem;
// //   float: left;
// }

</style>
