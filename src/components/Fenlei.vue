<template>
  <div class="box">
    <input type="text" placeholder="回车搜索商品" @focus="an"/>
    <div class="left">
      <ul>
        <li class="lii" :class="{'active':n==0}" @click="toogle(0)">所有分类</li>
        <li
          v-for="(item,index) in list1"
          :class="{'active':n==index+1}"
          @click="toogle(index+1,item.id)"
          :key="index"
        >{{ item.name }}</li>
      </ul>
    </div>
    <div class="right">
      <div>
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
      </div>
      <ul>
        <li v-for="(item,index) in list2" @click="golist(item.id)" :key="index">
          <img :src="item.icon" alt />
          <p>{{ item.name }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      list: [],
      list2: [],
      n: 0
    };
  },
  components:{
    
  },
  computed: {
    list1() {
      return this.list.filter(item => {
        return item.level == 1;
      });
    }
  },

  watch: {},

  mounted() {},
  methods: {
    toogle(index, id) {
      this.n = index;
      if (index == 0) {
        this.list2 = this.list;
      } else {
        var list2 = this.list.filter(item => {
          return item.pid == id;
        });
        this.list2 = list2;
      }
    },
    golist(id) {
      this.$router.push("/list?cateid=" + id);
    },
    an(){
      this.$router.push("/sou")
    }
  },
  created() {
    this.$axios
      .get("https://api.it120.cc/small4/shop/goods/category/all")
      .then(mgs => {
        console.log(mgs);
        this.list = mgs.data;
        this.list2 = mgs.data;
      });
  }
};
</script>

<style scoped lang="less">
input {
  width: 3.66rem;
  height: 0.38rem;
  float: left;
  border-radius: 0.3rem 0.3rem 0.3rem 0.3rem;
  background-color: #f4f4f4;
  text-indent: 0.2rem;
  font-size: 0.16rem;
  border: none;
  margin: 0.06rem 0 0 0.3rem;
}
.left {
  width: 1.3rem;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0.6rem;
  overflow: auto;
  border: 1px solid #f4f4f4;
  ul {
    li {
      width: 1.3rem;
      line-height: 0.5rem;
      font-size: 0.24rem;
      text-align: center;
      margin-top: 0.1rem;
    }
    li.active {
      border-left: red 1px solid;
      color: red;
    }
  }
}
.right {
  width: 3.88rem;
  height: 100%;
  position: fixed;
  top: 0.6rem;
  right: 0;
  overflow: auto;
  border: 1px solid #f4f4f4;
  margin-bottom: 0.2rem;
  .my-swipe {
    width: 3.14rem;
    height: 1.8rem;
    margin: 0.24rem 0 0 0.38rem;
    van-swipe-item {
      width: 3.14rem;
      height: 1.8rem;
      img {
        width: 3.14rem;
        height: 1.8rem;
      }
    }
  }
  ul {
    width: 3.78rem;
    height: 100%;
    display: flex;
    justify-content: space-between;
      // justify-content: space-around;
    flex-wrap: wrap;
    margin: 0.24rem 0 0 0.1rem;
    
    li {
      width: 1.14rem;
      height: 1.36rem;
      display: flex;
      flex-wrap: wrap;
      // margin-bottom: 0.1rem;
      img {
        width: 1.14rem;
        height: 1.12rem;
      }
      p {
        font-size: 0.16rem;
        margin-left: 0.3rem;
      }
    }
  }
}
</style>
