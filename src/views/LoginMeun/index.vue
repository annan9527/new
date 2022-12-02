<template>
  <ScreenAdapter>
    <div class="black">
      <dv-loading v-if="show" class="loading"></dv-loading>
      <div class="item" v-else>
        <div class="label1" :class="{ active: !shows }" @click="go('/smart')"></div>
        <div class="label2" :class="{ active: !shows }" @click="go('/')"></div>
        <div class="label3" :class="{ active: !shows }" @click="go('/marking')"></div>
      </div>
      <div class="heard"></div>
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
import ScreenAdapter from "../../components/ScreenAdapter.vue";
export default {
  components: { ScreenAdapter },
  data() {
    return {
      show: true,
      shows: true,
    };
  },
  methods: {
    init() {
      setTimeout(() => {
        this.show = false;
      }, 1000);
    },
    inits() {
      setTimeout(() => {
        this.shows = false;
      }, 1500);
    },
    go(val) {
      console.log('去首页')
      this.$router.push(val);
    },
  },
  created() {
    this.init();
    this.inits();
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
.loading {
  position: absolute;
}

.heard {
  z-index: 999;
  position: absolute;
  top: 10px;
  left: 0;
  width: 1920px;
  height: 60px;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-image: url(../../assets/登录/登录头部.png);
}
.item {
  position: absolute;
  top: 0px;
  left: 0;
  z-index: 999;
  width: 1920px;
  height: 1080px;
  display: flex;
  justify-content: center;
  align-items: center;
  .label1 {
    width: 350px;
    height: 446px;
    background-image: url(../../assets/登录/A.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    transition: all 0.5s;

    &:hover {
      scale: (1.1);
      box-shadow: inset 2px 2px 20px 20px rgba(0, 86, 251, 0.2);
      border-radius: 5px;
    }
  }
  .label2 {
    width: 350px;
    height: 446px;
    background-image: url(../../assets/登录/B.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    transition: all 0.5s;
    &:hover {
      scale: (1.1);
      box-shadow: inset 2px 2px 20px 20px rgba(0, 86, 251, 0.2);
      border-radius: 5px;
    }
  }
  .label3 {
    width: 350px;
    height: 446px;
    background-image: url(../../assets/登录/C.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    transition: all 0.5s;
    &:hover {
      scale: (1.1);
      box-shadow: inset 2px 2px 20px 20px rgba(0, 86, 251, 0.2);
      border-radius: 5px;
    }
  }
  .active {
    margin: 70px;
  }
}
</style>