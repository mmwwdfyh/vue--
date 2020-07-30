<template>
  <div class="box">
    <van-nav-bar title="确认订单" left-arrow @click-left="goBack" />
    <!-- 地址信息 -->
    <div class="address">
      <div>
        <van-icon name="location-0"></van-icon>
      </div>
      <div>
        <p>{{ addressInfo.linkMan }} - {{ addressInfo.mobile }}</p>
        <p>{{ addressInfo.address }}</p>
      </div>
      <div>
        <van-icon name="arrow"></van-icon>
      </div>
    </div>
    <div class="goods">
      <p class="goods-head">商品列表</p>
      <van-card
        v-for="(item,index) in this.$store.state.orderList"
        :key="index"
        :title="item.name"
        :price="item.price"
      ></van-card>
      <!-- :thumb="item.nums" -->
    </div>
    <div class="remark">
      <van-field placeholder="如需备注请输入" label="备注"></van-field>
    </div>
    <van-submit-bar
      :price="this.$store.getters.totalAmounts*100"
      button-text="确认订单"
      @submit="createOrder"
    />
  </div>
</template>

<script>
import storage from "@/bendi/storage";
import qs from "qs";
export default {
  data() {
    return {
      addressInfo: []
    };
  },
  created() {},
  mounted() {
    this.getAddress();
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    //获取默认的收货地址
    getAddress() {
      //获取用户的基本信息
      let data = storage.get("shuj", true);
      if (data == null) {
        this.$toast.fail("请先登录");
        this.$router.push("/denglu");
        return false;
      }
      this.$axios({
        url: "https://api.it120.cc/small4/user/shipping-address/default",
        params: {
          token: data.token
        }
      }).then(res => {
        if (res.code != 0) {
          this.$toast.fail("请先登录");
          this.$router.push("/denglu");
          return false;
        }
        this.addressInfo = res.data;
      });
    },
    //创建订单的信息
    createOrder() {
      //获取用户的登录信息
      let user = storage.get("shuj", true);
      //组装一下商品的数据
      let arr = [];
      this.$store.state.orderList.forEach(item => {
        let object = new Object();
        object.goodsId = item.goods_id;
        object.number = item.nums;
        object.propertyChildIds = item.properties;
        object.logisticsType = 0;
        arr.push(object);
        console.log(item.properties)
      });
      console.log(this.$store.state.orderList);
      console.log(arr);
      //创建订单的接口数据
      //创建formDate的数据

      let formdata = new FormData();
      formdata.append("token", user.token);
      formdata.append("goodsJsonStr", JSON.stringify(arr));

      this.$axios
        .post("https://api.it120.cc/small4/order/create", formdata)
        .then(res => {
          console.log(res);
          this.$toast.loading({
            message: "订单正在努力生成中",
            overlay: true
          });
          this.$store.commit("setOrder", res.data);

          setTimeout(() => {
            this.$router.push("/kuan");
          }, 2000);
        });
    }
  }
};
</script>

<style scoped lang="less">
.box {
  font-size: 0.14rem;
  width: 100%;
  background-color: #f0f0f0;
  .address {
    width: 100%;
    padding: 0.2rem;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    border-bottom: #dddddd 2px solid;
    div:nth-of-type(2) {
      width: 80%;
    }
    p {
      line-height: 0.6rem;
    }
  }
  .goods {
    margin-top: 0.3rem;
    width: 100%;
    box-sizing: border-box;
    background: #fff;
    .goods-head {
      line-height: 0.7rem;
      border-bottom: #dddddd 1px solid;
      text-indent: 0.2rem;
    }
  }
}
</style>
