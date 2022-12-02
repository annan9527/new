<template>
  <ScreenAdapter>
    <div class="login">
      <div class="item">
        <div class="box">
          <img src="../../assets/登录/徽章.png" />
          <input type="text" name="" placeholder="请输入账号" />
          <input type="password" name="" placeholder="请输入密码" />
          <input
            type="submit"
            name=""
            value="登录"
            placeholder="Login"
            @click="go"
          />
        </div>
      </div>
      <!-- <dv-loading>Loading...</dv-loading> -->
      <video
        id="video_1"
        muted="muted"
        autoplay="autoplay"
        loop="loop"
        src="../../assets/登录/BG.mp4"
      ></video>
    </div>
  </ScreenAdapter>
</template>

<script>
import { mapActions } from "vuex";
import ScreenAdapter from "../../components/ScreenAdapter.vue";

export default {
  components: { ScreenAdapter },
  data() {
    return {};
  },
  methods: {
    ...mapActions(["user/getInfo"]),
    go() {
      this["user/getInfo"]("adadad"); //调用action 传入参数
      this.$router.push("/menu");
    },
  },
};
</script>

<style lang="scss" scoped>
#video {
  position: fixed;
  clip-path: circle(100% at 50% 50%);
  width: 1920px;
  height: 1080px;
  z-index: -999;
}
.black {
  width: 100%;
  height: 100%;
  background: black;
}
.item {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  width: 1920px;
  height: 1080px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .box {
    width: 394px;
    height: 420px;
    padding: 40px;
    background-image: url(../../assets/登录/表单背景.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
  .box input[type="text"],
  .box input[type="password"] {
    border: 0;
    background: none;
    display: block;
    margin: 20px auto;
    text-align: center;
    border-bottom: 2px solid #153b74;
    padding: 14px 10px;
    width: 280px;
    outline: none;
    color: #02cefe;
    transition: 0.25s;
  }
  .box input[type="text"]:focus,
  .box input[type="password"]:focus {
    border-bottom: 2px solid #02cefe;
  }
  .box input[type="submit"] {
    border: 0;
    background: #3498db;
    display: block;
    margin: 40px auto;
    text-align: center;
    border: 2px solid #3498db;
    padding: 14px 40px;
    width: 280px;
    outline: none;
    color: white;
    border-radius: 3px;
    transition: 0.25s;
    cursor: pointer;
  }
}
</style>