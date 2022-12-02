<template>
  <div class="box">
    <div class="item1">
      <div>
        按期换证率:<span
          style="font-family: PingFang SC; font-weight: 800; color: #ffd200"
          >100%</span
        >
      </div>
      <div>
        满分学习率:<span
          style="font-family: PingFang SC; font-weight: 800; color: #ffd200"
          >100%</span
        >
      </div>
    </div>
    <div class="item2">
      <div>
        按期换证率:<span
          style="font-family: PingFang SC; font-weight: 800; color: #ffd200"
          >100%</span
        >
      </div>
      <div>
        满分学习率:<span
          style="font-family: PingFang SC; font-weight: 800; color: #ffd200"
          >100%</span
        >
      </div>
    </div>
    <div class="item3">
      <div>
        按期换证率:<span
          style="font-family: PingFang SC; font-weight: 800; color: #ffd200"
          >100%</span
        >
      </div>
      <div>
        满分学习率:<span
          style="font-family: PingFang SC; font-weight: 800; color: #ffd200"
          >100%</span
        >
      </div>
    </div>
    <div class="item4">
      <div>
        按期换证率:<span
          style="font-family: PingFang SC; font-weight: 800; color: #ffd200"
          >100%</span
        >
      </div>
      <div>
        满分学习率:<span
          style="font-family: PingFang SC; font-weight: 800; color: #ffd200"
          >100%</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-image: url(../../../assets/服务保障/A1.png);
  position: relative;
  cursor: pointer;
  .item1 {
    position: absolute;
    top: 70px;
    left: 50px;
    width: 130px;
    height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .item2 {
    position: absolute;
    top: 70px;
    left: 275px;
    width: 130px;
    height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .item3 {
    position: absolute;
    top: 70px;
    left: 500px;
    width: 130px;
    height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .item4 {
    position: absolute;
    top: 70px;
    left: 720px;
    width: 130px;
    height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>