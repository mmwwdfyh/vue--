<template>
  <div>
    <p @click="fan">fan</p>
    <van-search placeholder="输入搜索的商品名字" v-model="keywords" @keydown.enter="sou" />
    <div class="histroy" v-show="hFlag">
      <div class="h-head">
        历史记录
        <van-icon name="delete" @click="removeHistory" />
      </div>
      <div class="items">
        <div class="h-item" v-for="(item,index) in historyList" :key="index">{{ item }}</div>
      </div>
    </div>
    <List :goodsList="getGoods" v-show="!hFlag"></List>
  </div>
</template>

<script>
import List from "@/components/List";
//导入本地存储
import storage from "@/bendi/storage";
export default {
  name: "",
  data() {
    return {
      keywords: "",
      searchGoods: [],
      hFlag: true, //判断历史记录的效果
      historyList: []
    };
  },
  components: {
    List
  },
  created() {},
  computed: {
    getGoods() {
      if (this.keywords == "") {
        this.hFlag = true;
        return [];
      }
      this.hFlag = false;
      return this.searchGoods.filter(item => {
        return item.name.indexOf(this.keywords) > -1;
      });
    }
  },
  mounted() {
    this.getHistory(), this.getGoodList();
  },
  methods: {
    getGoodList() {
      this.$axios
        .get("https://api.it120.cc/small4/shop/goods/list")
        .then(res => {
          this.searchGoods = res.data;
        });
    },
    fan() {
      this.$router.go(-1);
    },
    //获取历史记录
    getHistory() {
      let data = storage.get("shan", true);
      this.historyList = data == null ? [] : data;
    },
    sou() {
      //判断keywords不能为空
      if (this.keywords == "") {
        return false;
      }
      this.historyList.unshift(this.keywords); //往历史记录中追加内容

      if (this.historyList.length > 8) {
        this.historyList.pop();
      }
      storage.set("shan", this.historyList, true); //添加到本地存储
      this.keywords = "";
    },
    removeHistory() {
      storage.remove("shan");
      this.getHistory();
    }
  }
};
</script>

<style scoped lang="less">
p {
  font-size: 0.14rem;
}
.histroy {
  width: 100%;
  padding: 0.2rem;
  box-sizing: border-box;
  .h-head {
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-size: 0.35rem;
    font-weight: bold;
    line-height: 0.8rem;
  }
  .items {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    .h-item {
      width: 23%;
      margin: 1%;
      background-color: #f0f0f0;
      border-radius: 0.1rem;
      padding: 0.15rem;
      box-sizing: border-box;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 0.14rem;
    }
  }
}
</style>
