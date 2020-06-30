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
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      pass: "",
      hidePwd: true
    };
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
        if (res.code !=0) {
          console.log(res);
          alert("密码错误")
        }else{
            
          this.$toast.success("恭喜你,denglu");

        }
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
