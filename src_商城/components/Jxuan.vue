<template>
  <div class="box">
    <div class="list">
      <p @click="jing">精选专题></p>
    </div>
    <div class="noom">
      <ul>
        <li v-for="(item,index) in poom" :key="index" @click="toogle(item.id)">
          <img :src="item.pic" alt="">
          <p class="p1">
              {{ item.title }}
          </p> 
          <p class="p2">
              {{ item.descript }}
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        poom:[]
    };
  },
  created() {
      this.$axios.post("https://api.it120.cc/small4/cms/news/list").then((mgs)=>{
          this.poom = mgs.data
        // console.log(mgs)
      })
  },
  mounted() {},
  methods: {
    toogle(id){
      this.$router.push("/xiangqing?id="+id)
    },
    jing(){
      this.$router.push("/zhuan")
    }
  }
};
</script>

<style scoped lang="less">
.box {
  width: 100%;
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
  .noom {
    width: 100%;
    height: 3.8rem;
    overflow: auto;
    ul {
      width: 22.2rem;
      height: 2.88rem;
      display: flex;
      li {
        width: 4.4rem;
        height: 2.88rem;
        img {
          width: 4.4rem;
          height: 2.88rem;
        }
        p {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .p1{
            width: 3rem;
            font-size: 0.18rem;
            color: #2c2c2c;
        }
        .p2{
            width: 3.4rem;
            font-size: 0.14rem;
            color: #A8A8A8;
            margin-top: 0.2rem;
        }
      }
    }
  }
}
</style>
