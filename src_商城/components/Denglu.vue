<template>
  <div>
    <p>登录账号</p>
    <p>虾米-严选商城欢迎你</p>
    <van-form>
      <van-field
        v-model="username"
        name="手机号码"
        label="手机号码"
        right-icon="graphic"
        placeholder="手机号码"
        :rules="[{ required: true, message: '请填写手机号码' }]"
      />
      <van-field
        v-model="pass"
        :type="hidePwd?'password':'text'"
        :right-icon="hidePwd?'closed-eye':'eye-o'"
        @click-right-icon="hidePwd = !hidePwd"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" @click="button" native-type="submit">提交</van-button>
      </div>
    </van-form>
    <p class="link-login">
      <router-link to="/zhuce">还没有注册? 立即注册</router-link>
    </p>
  </div>
</template>

<script>
//引入本地存储的的方法
import storage from "@/bendi/storage";

export default {
  data() {
    return {
      username: "",
      pass: "",
      hidePwd: true
    };
  },
  //组件内路由守卫，判断用户是否登陆
  beforeRouteEnter(to, from, next) {
    //获取用户本地存储的token值，判断是否为空
    let data = storage.get("shuj", true);
    ///已经登陆过，直接跳转到首页
    if (data != null) {
      next("/");
    } else {
      //没有登陆，继续在当前页面停留
      next();
    }
    console.log(next);
  },
  created() {},
  mounted() {},
  methods: {
    button() {
      this.$axios({
        url:
          "https://api.it120.cc/small4/user/m/login?deviceId=007&deviceName=monkey",
        method: "post",
        params: {
          mobile: this.username,
          pwd: this.pass
        }
      }).then(res => {
        if (res.code != 0) {
          console.log(res);
          this.$toast.fail(res.msg);
          return false;
        }
        //把用户登陆成功的信息给他存储到本地
        let user = new Object();
        user.uid = res.data.uid;
        user.token = res.data.token;
        user.account = this.mobile;
        storage.set("shuj", user, true);

        this.$toast.success("恭喜你,denglu");
      });
    }
  }
};
</script>

<style scoped lang="less">
.content {
  padding: 16px 16px 160px;
}
p {
  font-size: 0.14rem;
}
</style>
