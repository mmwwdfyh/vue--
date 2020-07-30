<template>
  <div class="box">
    <div class="item" v-for="(item,index) in goodsList" :key="index">
      <img :src="item.pic" />
    </div>
    <div class="item">
      <img src="../assets/1566394443829.jpg" alt />
    </div>
    <div class="item">
      <img src="../assets/5d352da712469.jpg" alt />
    </div>
    <div class="item">
      <img src="../assets/7a1e18dc911206fa2b423f027ff9bba8.jpg" alt />
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  mounted() {
    this.getGoods();
  },
  data() {
    return {
      goodsList: []
    };
  },
  computed: {},
  methods: {
    getGoods() {
      this.$axios
        .get("https://api.it120.cc/small4/shop/goods/list")
        .then(res => {
          console.log(res);
          this.goodsList = res.data;
          this.$nextTick(() => {
            this.waterfall();
          });
        });
    },

    waterfall() {
      /**
       * 1. 获取所有的元素，计算每一行的列数
       * 2. 循环元素，先拍出来第一行
       */
      let items = document.querySelectorAll(".item");
      //屏幕的宽度
      let bodyWidth = document.documentElement.clientWidth;
      // 每个元素的宽度
      let itemWidth = items[0].clientWidth;
      //每一行要显示的列数
      let columns = parseInt(bodyWidth / itemWidth);

      let columnArr = []; //存储每一列的高度值
      let space = 10;

      for (let i = 0; i < items.length; i++) {
        //第一行图片的操作
        if (i < columns) {
          //第一行图片的位置
          items[i].style.top = "0px";
          items[i].style.left = (itemWidth + space) * i + "px";
          //保存第一行每一列的高度
          columnArr.push(items[i].clientHeight);
          console.log(columnArr);
        } else {
          let minIndex = 0; //找出每一列最小值的下标
          let minHeight = columnArr[0]; //找出来最小高度值

          for (var m = 0; m < columnArr.length; m++) {
            if (columnArr[m] < minHeight) {
              minHeight = columnArr[m];
              minIndex = m;
            }
          }

          items[i].style.left = items[minIndex].offsetLeft + "px";
          items[i].style.top = minHeight + space + "px";
          columnArr[minIndex] = minHeight + items[i].clientHeight + space;
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  position: relative;
  .item {
    width: 30%;
    position: absolute;
    img {
      width: 100%;
      box-shadow: 1px 5px 7px rgba($color: #000000, $alpha: 0.6);
    }
  }
}
</style>