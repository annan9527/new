<template>
  <div id="map">
    <amap
      cache-key="marker-cluster-map"
      :zoom="13"
      async
      map-style="amap://styles/darkblue"
      :center="center"
    >
      <template v-if="onwork">
        <!-- 定位 -->
        <amap-marker
          v-for="(item, index) in p"
          :position="item"
          :key="index"
          :offset="[-25, -50]"
          @click="onMarkerClick(item)"
        >
          <div class="active-icon">
            <img
              src="../../../../static/icon/事故.png"
              style="width: 50px; height: 50px"
            />
          </div>
        </amap-marker>
      </template>

      <!-- 点聚合 -->
      <amap-marker-cluster
        v-if="carbad"
        :data="data"
        key="custom-cluster"
        :grid-size="options.gridSize"
        :average-center="options.averageCenter"
      >
        <!-- :marker-options="getMarkerOptions"
        :cluster-options="getClusterOptions" -->
        <template v-slot:cluster="context">
          <div :style="getClusterStyle(context)">
            {{ context.count }}
          </div>
        </template>
        <template v-slot:marker>
          <div class="active-icon">
            <img
              src="../../../../static/icon/-s-道路交通事故.png"
              style="width: 50px; height: 50px"
            />
          </div>
        </template>
      </amap-marker-cluster>

      <!-- 信息窗 -->
      <!-- <amap-info-window
        :closeWhenClickMap="true"
        :position.sync="markerposition"
        :vislble.sync="visible"
        is-custom
      >
        <div style="width: 200px; height: 100px; background-color: red">
          content of this info window
        </div>
      </amap-info-window> -->

      <!-- 施工路段 -->
      <!-- <amap-polyline
        :path.sync="path"
        :stroke-color="styles.fill"
        :stroke-weight="20"
      /> -->
      <!-- 禁限行区域 -->
      <amap-polygon
        v-if="noenter"
        :path="[
          [118.848976, 28.982676],
          [118.849792, 28.975763],
          [118.853114, 28.975085],
          [118.863969, 28.970958],
          [118.865181, 28.985693],
          [118.858417, 28.985938],
          [118.848976, 28.982676],
        ]"
        :center.sync="center"
        :fill-color="styles.fill"
        :fill-opacity="0.35"
        :stroke-color="styles.stroke"
        cursor="pointer"
        clickable
        @mouseover="go()"
        :z-index="10"
      />
    </amap>
    <div class="mapselect">
      <div class="form" v-if="carbad">
        <!-- 时间段 -->
        <div class="timer">
          <div class="title">
            <span class="t"></span><span class="i">时间段:</span>
          </div>
          <div class="pick">
            <input
              type="date"
              class="data"
              v-model="data1"
              style="margin-right: 10px"
            />
            <input type="date" class="data" v-model="data2" />
          </div>
        </div>
        <!-- 车辆类型 -->
        <div class="size">
          <div class="title">
            <span class="t"></span><span class="i">车辆类型:</span>
          </div>
          <div class="cheack">
            <label for="check1">
              <input
                type="checkbox"
                value="危化品运输车"
                id="check1"
                v-model="cheackbox"
              /><span><span></span></span>危化品运输车
            </label>
            <label for="check2">
              <input
                type="checkbox"
                value="城市工程车"
                id="check2"
                v-model="cheackbox"
              /><span><span></span></span>城市工程车
            </label>
            <label for="check3">
              <input
                type="checkbox"
                value="货车"
                id="check3"
                v-model="cheackbox"
              /><span><span></span></span>货车
            </label>

            <label for="check4">
              <input
                type="checkbox"
                value="电动三轮车"
                id="check4"
                v-model="cheackbox"
              /><span><span></span></span>电动三轮车
            </label>
            <label for="check5">
              <input
                type="checkbox"
                value="正三轮车"
                id="check5"
                v-model="cheackbox"
              /><span><span></span></span>正三轮车
            </label>
            <label for="check6">
              <input
                type="checkbox"
                value="隧道"
                id="check6"
                v-model="cheackbox"
              /><span><span></span></span>隧道
            </label>
            <button>查询</button>
          </div>
        </div>
      </div>
      <!-- table列表 -->
      <div class="table">
        <div class="table_item" @click="band()">
          <div class="img">
            <img src="../../../assets/路切图/禁止.png" alt="" />
          </div>
          <div class="text">禁限行区域</div>
        </div>

        <div class="table_item" @click="onmarker()">
          <div class="img">
            <img src="../../../assets/路切图/事故.png" alt="" />
          </div>
          <div class="text">事故分布</div>
        </div>

        <div class="table_item" @click="work()">
          <div class="img">
            <img src="../../../assets/路切图/施工.png" alt="" />
          </div>
          <div class="text">施工路段</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
function interpolate(u, begin, end) {
  if (u < 0) u = 0;
  if (u > 1) u = 1;
  u = Math.pow(u, 1 / 10);
  return u * (end - begin) + begin;
}
export default {
  name: "App",
  data() {
    return {
      center: [118.848765, 28.979693],
      styles: {
        fill: "#FFFF00",
        stroke: "#FFFF00",
      },
      markerposition: [118.849633, 28.980025],
      p: [
        [118.882471, 28.993414],
        [118.878994, 28.974085],
        [118.851825, 28.955453],
      ],
      visible: true,
      path: [
        [118.854509, 28.984716],
        [118.854864, 28.983923],
      ],
      data: [
        { lnglat: [118.855291, 28.968687], weight: 40, obj: { ok: "dadad" } },
        { lnglat: [118.849403, 28.966571], weight: 40 },
        { lnglat: [118.871908, 28.963937], weight: 40 },
        { lnglat: [118.872013, 28.967893], weight: 40 },
        { lnglat: [118.87678, 28.970008], weight: 40 },
        { lnglat: [118.850768, 28.981658], weight: 40 },
        { lnglat: [118.870611, 28.971511], weight: 40 },
        { lnglat: [118.855715, 28.964949], weight: 40 },
        { lnglat: [118.864793, 28.978257], weight: 40 },
        { lnglat: [118.860867, 28.978625], weight: 40 },
        { lnglat: [118.857047, 28.979299], weight: 40 },
      ],
      options: {
        gridSize: 100,
        averageCenter: true,
        zoomOnClick: true,
      },

      data1: "",
      data2: "",
      cheackbox: ["危化品运输车"],
      noenter: false, //限行
      carbad: false,
      onwork: false,
    };
  },
  methods: {
    ok(e) {
      console.log("点击", e);
    },
    go() {
      console.log("进入");
    },
    band() {
      this.carbad=false
       this.noenter =true
       this.onwork=false
     
    },
    onmarker() {
       this.carbad=true
       this.noenter =false
       this.onwork=false
    },
    work() {
      this.onwork=true
      this.carbad=false
       this.noenter =false
       
    },
    onMarkerClick(val) {
      this.markerposition = val;
    },
    getClusterStyle(context) {
      const u = context.count / this.data.length;
      const hue = ~~interpolate(u, 90, 0);
      const size = ~~interpolate(u, 30, 50);
      return {
        backgroundColor: `hsla(${hue}, 100%, 50%, 0.7)`,
        width: `${size}px`,
        height: `${size}px`,
        lineHeight: `${size}px`,
        borderRadius: `${size / 2}px`,
        border: `1px solid hsla(${hue}, 100%, 40%, 1)`,
        boxShadow: `0 0 1px hsla(${hue}, 100%, 50%, 1)`,
        color: `hsla(${hue}, 100%, 20%, 1)`,
        fontSize: "14px",
        textAlign: "center",
      };
    },
    getNowDate() {
      const timeOne = new Date();
      const year = timeOne.getFullYear();
      let month = timeOne.getMonth() + 1;
      let day = timeOne.getDate();
      month = month < 10 ? "0" + month : month;
      day = day < 10 ? "0" + day : day;
      const NOW_MONTHS_AGO = `${year}-${month}-${day}`;
      const NOW_MONTHS_Last = `${year}-${month - 1}-${day}`;
      this.data2 = NOW_MONTHS_AGO;
      this.data1 = NOW_MONTHS_Last;
    },
  },
  created() {
    this.getNowDate();
  },
};
</script>

<style>
</style>

<style lang="scss" scoped>
#map {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
  position: relative;
  
}

.mapselect {
  position: absolute;
  cursor: pointer;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  width: 400px;
  height: 260px;
  z-index: 2;
  .form {
    position: absolute;
    top: 0;
    left: 0;
    background-image: url(../../../assets/路切图/时间Bg.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    width: 400px;
    height: 200px;
    padding: 10px;
    .timer {
      margin-top: 20px;
      margin-left: 10px;
      margin-bottom: 22px;
      .title {
        font-family: PingFang SC;
        font-weight: 500;
        color: #dbdbdb;
        margin-right: 10px;
        margin-bottom: 15px;
        height: 14px;
        font-size: 12px;

        .t {
          margin-right: 5px;
          display: inline-block;
          width: 4px;
          height: 10px;
          background: #0e80ff;
          opacity: 0.75;
          border-radius: 2px;
        }
        .i {
          height: 20px;
          display: inline-block;
          text-align: center;
        }
      }
      .pick {
        margin-left: 0px;
      }
    }
    .size {
      margin-left: 10px;
      .title {
        font-family: PingFang SC;
        font-weight: 500;
        color: #dbdbdb;
        margin-right: 10px;
        margin-bottom: 15px;
        height: 14px;
        font-size: 12px;

        .t {
          margin-right: 5px;
          display: inline-block;
          width: 4px;
          height: 10px;
          background: #ff0000;
          opacity: 0.75;
          border-radius: 2px;
        }
        .i {
          height: 20px;

          display: inline-block;

          text-align: center;
        }
      }
      .cheack {
        height: 50px;
        label {
          margin-right: 30px;
          display: inline-block;
          font-size: 8px;
          text-align: left;
          line-height: 26px;
          cursor: pointer;
        }
        label input[type="checkbox"] {
          display: none;
        }
        label input[type="checkbox"] + span {
          box-sizing: border-box;
          display: inline-block;
          width: 12px;
          height: 12px;
          padding: 1px;
          border-radius: 50%;
          border: 2px solid rgb(253, 253, 253);
          vertical-align: sub;
          margin-right: 5px;
        }
        label input[type="checkbox"] + span > span {
          display: inline-block;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          margin-top: 1px;
          margin-left: 1px;
          float: left;
          background: #00fff9;
          opacity: 0;
        }
        label input[type="checkbox"]:checked + span {
          border-color: #00fff9;
        }

        label input[type="checkbox"]:checked + span > span {
          opacity: 1;
        }
      }
    }
    input[type="date"]::-webkit-inner-spin-button {
      visibility: hidden;
    }
    input[type="date"]::-webkit-calendar-picker-indicator {
      display: inline-block;

      width: 10px;
      height: 10px;
      background: url("../../../assets/路切图/下箭头.png");
      background-repeat: no-repeat;
      background-size: 100% 100%;
      color: #fff;
    }

    .data {
      width: 98px;
      height: 24px;
      background-color: rgba($color: #2663d3, $alpha: 0.6);
      border: 1px solid #2663d3;
      border-radius: 5px;
      color: #fff;
    }
  }
  .table {
    position: absolute;
    bottom: 0;
    left: 0;
    margin-top: 10px;
    width: 400px;
    height: 50px;
    background-image: url(../../../assets/路切图/TableBg.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    .table_item {
      cursor: pointer;
      flex: 1;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 10px;
      .img {
        height: 100%;
        width: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 70%;
          height: 70%;
        }
      }
      .text {
        flex: 1;
        font-size: 14px;
        font-family: PingFang SC;
        font-weight: 500;
        color: #ffffff;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
}

.info-window-content {
  position: relative;
  width: 220px;

  h3 {
    margin-top: 0;
  }

  .button-close {
    position: absolute;
    right: 0.5em;
    top: 0.5em;

    cursor: pointer;
  }
}
.custom-marker {
  background-color: hsla(180, 100%, 50%, 0.7);
  height: 24px;
  width: 24px;
  border: 1px solid hsl(180, 100%, 40%);
  border-radius: 12px;
  box-shadow: hsl(180, 100%, 50%) 0px 0px 1px;
  text-align: center;
}
</style>