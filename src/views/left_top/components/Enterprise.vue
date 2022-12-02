<template>
  <div class="box">
    <div class="heard">
      <div
        class="item"
        @click="change('危化运输车')"
        :class="{ active: num === '危化运输车' }"
      >
        <el-tooltip effect="dark" content="危化运输车" placement="top-start">
          <img src="../../../assets/安全管理/危化.png" alt="" />
        </el-tooltip>
      </div>
      <div
        class="item"
        @click="change('工程运输车')"
        :class="{ active: num === '工程运输车' }"
      >
        <el-tooltip effect="dark" content="工程运输车" placement="top-start">
          <img src="../../../assets/安全管理/工程.png" alt="" />
        </el-tooltip>
      </div>
      <div
        class="item"
        @click="change('两客一危')"
        :class="{ active: num === '两客一危' }"
      >
        <el-tooltip effect="dark" content="两客一危" placement="top-start">
          <img src="../../../assets/安全管理/两客.png" alt="两客一危" />
        </el-tooltip>
      </div>
    </div>
    <div class="body">
      <div class="box1" v-if="num === '危化运输车'">
        <div class="names">
          <div class="i">企业名称</div>
          <div class="i">事故数</div>
          <div class="i">亡人数</div>
        </div>
        <div class="item" v-for="(item, index) in arr1" :key="index">
          <div class="s">{{ item.name }}</div>
          <div class="s">{{ item.death }}</div>
          <div class="s">{{ item.size }}</div>
        </div>
      </div>
      <div class="box1" v-if="num === '工程运输车'">
        <div class="names">
          <div class="i">企业名称</div>
          <div class="i">事故数</div>
          <div class="i">亡人数</div>
        </div>
        <div class="item" v-for="(item, index) in arr2" :key="index">
          <div class="s">{{ item.name }}</div>
          <div class="s">{{ item.death }}</div>
          <div class="s">{{ item.size }}</div>
        </div>
      </div>
      <div class="box1" v-if="num === '两客一危'">
        <div class="names">
          <div class="i">企业名称</div>
          <div class="i">事故数</div>
          <div class="i">亡人数</div>
        </div>
        <div class="item" v-for="(item, index) in arr3" :key="index">
          <div class="s">{{ item.name }}</div>
          <div class="s">{{ item.death }}</div>
          <div class="s">{{ item.size }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: "危化运输车",
      arr1: [
        { name: "明远科技", death: "23", size: "5" },
        { name: "武大光华", death: "23", size: "1" },
        { name: "翔飞科技", death: "23", size: "3" },
      ],
      arr2: [
        { name: "明远", death: "23", size: "3" },
        { name: "武大", death: "23", size: "1" },
        { name: "翔飞", death: "23", size: "5" },
      ],
      arr3: [
        { name: "科技", death: "23", size: "4" },
        { name: "光华", death: "23", size: "6" },
        { name: "翔技", death: "23", size: "9" },
      ],
    };
  },
  methods: {
    change(val) {
      this.num = val;
    },
  },
};
</script>

<style lang="scss" scoped>
.box {
  width: 365px;
  height: 170px;
  .heard {
    width: 365px;
    height: 30px;
    display: flex;
    .item {
      cursor: pointer;
      flex: 1;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .name {
        font-size: 18px;
        font-family: PingFang SC;
        font-weight: 500;
        color: #feffff;
      }
    }
    .active {
      background: #002249;
    }
  }
  .body {
    width: 365px;
    height: 130px;
    .box1 {
      width: 365px;
      height: 130px;
      padding-top: 5px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      // 行1
      .names {
        width: 365px;
        height: 20px;
        font-size: 18px;
        font-family: PingFang SC;
        font-weight: 500;
        color: #ffffff;
        display: flex;
        .i {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
      .item {
        width: 365px;
        height: 20px;
        font-size: 18px;
        font-family: PingFang SC;
        font-weight: 500;
        color: #ffffff;
        display: flex;
        .s {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }
}
</style>