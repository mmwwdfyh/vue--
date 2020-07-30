<template>
  <div class="box">
    <div class="list">
      <van-nav-bar title="全民砍价" left-arrow @click-left="onClickLeft" />
    </div>
    <!--v-if="!loading" <van-loading size="24px" v-show="loading">加载中....</van-loading> -->
    <div>
      <div class="coom" v-for="(item,index) in kjlist" :key="index" @click="tiao">
        <img :src="item.pic" alt />
        <div class="right">
          <div class="shang">
            <p class="p1">{{item.name}}</p>
            <p class="p2">{{item.characteristic}}</p>
          </div>
          <ul class="xia">
            <li>
              <p class="pian">￥{{ item.minPrice }}</p>
              <p class="di">底价</p>
            </li>
            <li>
              <p>{{ item.originalPrice }}</p>
              <p>原价</p>
            </li>
            <li>
              <p>{{ item.stores }}</p>
              <p>限量</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      kjlist: []
    };
  },
  created() {
    this.$axios
      .get("https://api.it120.cc/small4/shop/goods/kanjia/list")
      .then(mgs => {
        this.kjlist = mgs.data.goodsMap;
      });
  },
  mounted() {},
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    tiao(){
      this.$router.push("/shanxiang")
    }
  }
};
</script>

<style scoped lang="less">
.box {
  width: 5.2rem;
  .list {
    width: 5.2rem;
    height: 0.46rem;
    line-height: 0.46rem;
    text-align: center;
    border-bottom: 0.01rem solid #ccc;
    p {
      font-size: 0.18rem;
    }
  }
}
.coom {
  width: 5.2rem;
  height: 1.83rem;
  display: flex;
  margin-top: 0.02rem solid #ccc;
  margin-bottom: 0.1rem;
  > img {
    width: 1.55rem;
    height: 1.55rem;
    margin-right: 0.1rem;
    margin-left: 0.04rem;
  }
  .right {
    width: 3.2rem;
    height: 1.55rem;
    .shang {
      .p1 {
        font-size: 0.16rem;
      }
      .p2 {
        font-size: 0.12rem;
        color: #ccc;
      }
    }
    .xia {
      width: 2.6rem;
      margin-top: 0.64rem;
      display: flex;
      justify-content: space-between;
      font-size: 0.14rem;
      color: #ccc;
      li {
        .pian {
          color: red;
        }
        .di {
          color: #000;
        }
      }
    }
  }
}
</style>
