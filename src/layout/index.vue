<template>
  <div id="index">
    <!-- 盒子居中 -->
    <div class="boxs" :style="('width:' + w + 'px', 'height:' + h + 'px')">
      <div class="bg">
        <!-- 头部导航 -->
        <ScreenAdapter>
          <div class="heard">
            <!-- 时间 -->
            <div class="time">
              <Timer></Timer>
            </div>
            <!-- 返回按钮 -->
            <div class="back" @click="back()"></div>
            <!-- 主页切换 -->
            <div class="menu">
              <div class="nav">
                <!-- 导航 -->
                <el-dropdown trigger="click" @command="handleCommand">
                  <span class="el-dropdown-link">
                    {{ nav }}<i class="el-icon-caret-bottom el-icon--right"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="">首页</el-dropdown-item>
                    <el-dropdown-item command="alerttrends"
                      >情指勤舆</el-dropdown-item
                    >
                    <el-dropdown-item command="safe">安全态势</el-dropdown-item>
                    <el-dropdown-item command="order"
                      >秩序管理</el-dropdown-item
                    >
                    <el-dropdown-item command="serve"
                      >服务保障</el-dropdown-item
                    >
                  </el-dropdown-menu>
                </el-dropdown>
              </div>
              <div class="logins" v-if="log">未登录</div>
              <div class="logins" v-else>
                <el-avatar :size="30" :src="circleUrl"></el-avatar>
              </div>
            </div>
          </div>
          <!-- 主体内容 -->
          <div class="main">
            <router-view></router-view>
          </div>
        </ScreenAdapter>
      </div>
    </div>
  </div>
</template>
  
  <script>
import Timer from "../components/Timer.vue";
import ScreenAdapter from "../components/ScreenAdapter.vue";

export default {
 
  data() {
    return {
      log: true,
      nav: "应用导航",
      w: "",
      h: "",
      circleUrl:
        "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
    };
  },
  //  监听浏览器窗口变化

  methods: {
    getScale() {
      const w = window.innerWidth;
      const h = window.innerHeight;
      this.w = w;
      this.h = h;
    },
    back() {
      this.$router.go(-1);
    },
    handleCommand(command) {
      this.$router.push(`/${command}`);

      if (command === "") {
        this.nav = "应用导航";
      } else if (command === "alerttrends") {
        this.nav = "情指勤舆";
      } else if (command === "safe") {
        this.nav = "安全态势";
      } else if (command === "order") {
        this.nav = "秩序管理";
      } else if (command === "serve") {
        this.nav = "服务保障";
      }
    },
    // loginss() {
    //   this.$message("等待后续开发");
    //   // alert("待开发");
    //   // this.$router.push("/login");
    // },
  },
  created() {
    let that = this;
    setInterval(() => {
      that.getScale();
    }, 0);
  },
  components: {
    Timer,
    ScreenAdapter,
  },
};
</script >
  
  <style lang="scss" scoped>
@import "../assets/style/index.scss";

.boxs {
  display: flex;
  justify-content: center;
  align-items: center;
}

.bg {
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("../assets/首页变更/BG.png");
}

.heard {
  position: relative;
  width: 1920px;
  height: 90px;
  background-image: url("../assets/image/nav.png");
  padding: 10px;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  .time {
    width: 282px;  
    opacity: 0.8;
  }
  .back {
    position: absolute;
    left: 910px;
    top: 0;
    width: 100px;
    height: 100px;
  }
  .menu {
    top: 20px;
    right: 10px;
    position: absolute;
    width: 200px;
    height: 40px;
    // background-color: #fff;
    display: flex;
    .nav {
      line-height: 30px;
      height: 40px;
      flex: 1;
      font-size: 18px;
    }
    .logins {
      cursor: pointer;
      line-height: 30px;
      color: #fff;
      font-weight: 700;
      height: 40px;
      flex: 1;
      font-size: 12px;
      font-size: 18px;
    }
  }
}
.main {
  width: 100%;
  height: 980px;
}

.el-dropdown-link {
  cursor: pointer;
  color: #fff;
  font-weight: 400;
  font-size: 18px;
}
.el-icon-arrow-down {
  font-size: 18px;
}
.el-dropdown-item {
  font-size: 18px;
}
</style>