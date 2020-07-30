<template>
  <div>
    <van-nav-bar title="标题" left-text="返回" />
    <!-- <van-cell-group> -->
    <van-form>
      <van-field v-model="mobile" type="tel" label="手机号" right-icon="graphic" />
      <van-field
        v-model="pwd"
        :type="hidePwd?'password':'text'"
        :right-icon="hidePwd?'closed-eye':'eye-o'"
        @click-right-icon="hidePwd = !hidePwd"
        label="密码"
      />
      <van-field
        v-model="pwd1"
        :type="hidePwd1?'password':'text'"
        :right-icon="hidePwd1?'closed-eye':'eye-o'"
        @click-right-icon="hidePwd1 = !hidePwd1"
        label="确认密码"
      />
      <van-field placeholder="用户名" class="inp" v-model="nick" right-icon="user-o" />
      <van-field v-model="picCode" label="图形验证">
        <template #right-icon>
          <van-image :src="imgUrl" @click="createImgCode" />
        </template>
      </van-field>
      <!-- 城市信息 -->
      <van-field placeholder="城市" v-model="area" right-icon="location-o" @click="areaShow=true" />
      <!-- 城市列表，底部弹出层 -->
      <van-popup v-model="areaShow" position="bottom">
        <van-area
          title="选择城市"
          :area-list="aresList"
          @cancel="areaShow=false"
          @confirm="selectedArea"
        />
        <!-- 关闭弹框和完成 -->
      </van-popup>

      <van-field placeholder="手机验证码" v-model="code">
        <template #button>
          <van-button
            type="danger"
            plain
            size="small"
            :disabled="btnIsDisabled"
            @click="sendCode"
          >{{msg}}</van-button>
        </template>
      </van-field>
      <van-button type="info" block @click="checkForm">立即注册</van-button>
      <!-- </van-cell-group> -->
    </van-form>
    <p class="link-login">
      <router-link to="/denglu">已有账号立即登录</router-link>
    </p>
  </div>
</template>

<script>
import AreaList from "@/assets/area";
export default {
  name: "",
  mounted() {
    this.createImgCode();
  },
  data() {
    return {
      mobile: "",
      pwd: "",
      nick: "",
      pwd1: "",
      picCode: "",
      code: "",
      hidePwd: true,
      hidePwd1: true,
      imgUrl: "",
      picKey: "",
      //选择城市信息
      areaShow: false,
      aresList: AreaList, //城市列表数据
      area: "",
      province: "",
      city: "",
      //倒计时的功能
      msg: "发送验证码",
      btnIsDisabled: false
    };
  },
  created() {},
  mounted() {},
  methods: {
    //基本的表单校验
    checkForm() {
      if (this.mobile == "") {
        this.$toast.fail("手机号不能为空"); // vant样式
        return false;
      }
      //校验手机号的格式是否合法
      var reg = /^1[345678]\d{9}$/;
      if (!reg.test(this.mobile)) {
        this.$toast.fail("请输入正确的手机号");
        return false;
      }
      //确认密码和密码是否一致
      if (this.pwd1 != this.pwd) {
        this.$toast.fail("密码不一致，请重新输入");
        return false;
      }
      this.zhuce();
    },
    //生成图形验证码
    createImgCode() {
      this.picKey = new Date().getTime();
      let apiUrl = "https://api.it120.cc/small4/verification/pic/get";
      this.imgUrl = `${apiUrl}?key=${this.picKey}`;
    },
    //选择城市函数
    selectedArea(arr) {
      this.areaShow = false;
      //去除数组中的name值
      let tmp = arr.map(item => {
        return item.name;
      });
      //处理省份和市
      this.province = tmp[0];
      this.city = tmp[1];
      //数组转换程字符串
      this.area = tmp.join(" ");
    },
    //倒计时的功能
    countSeconds() {
      this.btnIsDisabled = true;
      //倒计时的时间
      let timeout = 60;
      //倒计时间歇
      let timer = setInterval(() => {
        //读秒结束
        if (timeout < 1) {
          this.btnIsDisabled = false;
          //清除定时器
          clearInterval(timer);
          this.msg = `重新发送`;
          return false;
        }
        //正在倒计时的时候
        this.msg = `${timeout}s后再试`;
        timeout--;
      }, 1000);
    },
    //发送验证码接口
    sendCode() {
      this.$axios({
        url: "https://api.it120.cc/small4/verification/sms/get",
        method: "post",
        params: {
          mobile: this.mobile,
          key: this.picKey,
          picCode: this.picCode
        }
      }).then(res => {
        if (res.code != 0) {
          this.$toast.fail(res.msg);
          return false;
        }
        this.countSeconds();
        //  console.log(res)
      });
    },
    zhuce() {
      this.$axios({
        url: "https://api.it120.cc/small4/user/m/register",
        method: "post",
        params: {
          mobile: this.mobile,
          pwd: this.pwd,
          code: this.code
        }
      }).then(res => {
        console.log(res);
        // this.$toast.success("恭喜你,注册成功");
        this.$router.push("/denglu");
      });
    }
  }
};
</script>

<style scoped lang="less">
.content {
  padding: 16px 16px 160px;
}
</style>
