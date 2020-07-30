<template>
  <div>
    <div class="wrap">
      <p>
        <input type="text" placeholder="回车搜索商品" />
        <!-- <van-search placeholder="输入搜索的商品名字" /> -->
      </p>
      <!-- 
        <ol></ol>
        <div class="noom">
          <div class="lun">
            <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
              <van-swipe-item><img src="../assets/lun.png" alt=""></van-swipe-item>
              <van-swipe-item><img src="../assets/lun.png" alt=""></van-swipe-item>
              <van-swipe-item><img src="../assets/lun.png" alt=""></van-swipe-item>
              <van-swipe-item><img src="../assets/lun.png" alt=""></van-swipe-item>
            </van-swipe>
          </div>
          <ul></ul>
        
      </div>-->
      <div>
        <van-tree-select
          :items="items"
          :main-active-index.sync="activeIndex"
          @click-nav="changeLeft"
        >
          <template #content>
            <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
              <van-swipe-item>
                <img src="../assets/lun.png" alt />
              </van-swipe-item>
              <van-swipe-item>
                <img src="../assets/lun.png" alt />
              </van-swipe-item>
              <van-swipe-item>
                <img src="../assets/lun.png" alt />
              </van-swipe-item>
              <van-swipe-item>
                <img src="../assets/lun.png" alt />
              </van-swipe-item>
            </van-swipe>
            <!-- :to="'/goods/cate/'+item.id" -->
            <div class="sub_cate">
              <router-link tag="div" class="item" v-for="(item,index) in arr" :key="index">
                <img :src="item.icon" />
                <p>{{item.name}}</p>
              </router-link>
            </div>
          </template>
        </van-tree-select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: 0, //左侧选项切换对应的索引
      items: [{ text: "所有分类" }],
      //   顶级分类id
      cateIds: [0],
      categoryList: [], //所有的分类数据
      arr: []
    };
  },
  computed: {
    // subCate() {
    //   if (this.activeIndex == 0) {
    //     return this.categoryList;
    //   }
    //   return this.categoryList.filter(item => {
    //     return item.pid == this.cateIds[this.activeIndex];
    //   });
    // }
  },
  created() {
    //获取商品分类的数据
        this.$axios
      .get("https://api.it120.cc/small4/shop/goods/category/all")
      .then(mgs => {
         console.log(mgs);
        this.categoryList = mgs.data;
        console.log(this.categoryList)
       
        mgs.data.forEach(item => {
          if (item.pid == 0) {
            this.items.push({ text: item.name });
            this.cateIds.push(item.id);
          }
        });
      });

  },
  mounted() {
    // this.$axios
    //   .get("https://api.it120.cc/small4/shop/goods/category/all")
    //   .then(res => {
    //     console.log(res.data);
    //     this.arr = res.data;
    //   });
    // console.log(this.arr, 111);
    
    console.log(this.categoryList, 111);
  },
  methods: {
    changeLeft(index) {
      console.log(this.cateIds[index]);
    }
  }
};
</script>

<style scoped lang="less">
p {
  width: 5.2rem;
  height: 0.5rem;
  display: flex;

  input {
    width: 3.2rem;
    height: 0.3rem;
    background: #f5f5f5;
    border: none;
    border-radius: 0.2rem;
    margin-left: 0.2rem;
    padding-left: 0.2rem;
    font-size: 0.14rem;
    margin-top: 0.08rem;
  }
}
.list {
  display: flex;
  ol {
    width: 1.27rem;
    height: 100%;
    overflow: auto;
    position: fixed;
    left: 0;
    top: 0.54rem;
    z-index: 1;
  }
  .noom {
    position: fixed;
    left: 1.27rem;
    top: 0.54rem;
    overflow: auto;
    height: 100%;
    .lun {
      width: 3.8rem;
    }
    ul {
      width: 3.7rem;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      text-align: center;
    }
  }
}
.my-swipe {
  width: 3rem;
  margin-left: 0.2rem;
  .van-swipe-item {
    width: 3rem;
    color: #fff;
    font-size: 20px;
    //   line-height: 150px;
    text-align: center;
    img {
      width: 3rem;
      height: 100%;
    }
  }
}
</style>
