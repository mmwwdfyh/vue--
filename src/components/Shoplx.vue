<template>
  <div>
    首页

  </div>
</template>

<script>
import stroage from "@/bendi/storage";

export default {
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  name: "helloword",
  created() {},
  mounted() {
    let string = "sdfssf";
    let arr = [1, 2, 3, 4];
    // storage.set("test_yx",arr,true);
    //console.log(storage.get("test_yx",true));
    //storage.remove("test_yx");//删除的操作
  },
  methods: {}
};
</script>

<style scoped lang="less">
div{
  font-size: 0.14rem;
}
</style>
