<template>
  <div class="box">
    <div class="top">
      <select v-model="goodsId">
        <option
          v-for="(item, index) in kindList"
          v-bind:value="item.id"
          v-text="item.name"
          :key="index"
        ></option>
      </select>
    </div>
    <div class="bottom">
      <div
        class="item"
        style="border: 2px solid #3ed4f6; left: 14px; top: 10px"
      >
        <div class="mi" style="color: #66e3ff">1867</div>
        <div class="km">km</div>
        <div class="name">水亭门</div>
      </div>
      <div
        class="item"
        style="border: 2px solid #3ad0ae; left: 82px; top: 10px"
      >
        <div class="mi" style="color: #3ad0ae">1867</div>
        <div class="km">km</div>
        <div class="name">荷一路</div>
      </div>
      <div
        class="item"
        style="border: 2px solid #ffc94c; left: 150px; top: 10px"
      >
        <div class="mi" style="color: #ffc94c">1867</div>
        <div class="km">km</div>
        <div class="name">九华</div>
      </div>
      <div
        class="item"
        style="border: 2px solid #ffa27f; left: 48px; top: 80px"
      >
        <div class="mi" style="color: #ffa27f">1867</div>
        <div class="km">km</div>
        <div class="name">紫薇</div>
      </div>
      <div
        class="item"
        style="border: 2px solid #999cff; left: 118px; top: 80px"
      >
        <div class="mi" style="color: #999cff">1867</div>
        <div class="km">km</div>
        <div class="name">三江路</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goodsId: "1",
      kindList: [
        { name: "城市隧道", id: 1 },
        { name: "公路隧道", id: 2 },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .top {
    width: 100%;
    height: 100%;
    padding-left: 0px;
    flex: 1;
    display: flex;
    align-items: flex-end;
  }
  .bottom {
    width: 100%;
    height: 100%;
    flex: 6;
    position: relative;
    background: rgba($color: #006effa1, $alpha: .1);
    .item {
      position: absolute;
      margin: 10px;
      width: 50px;
      height: 60px;
      border-radius: 3px;
      -webkit-filter: drop-shadow(0 0 15px #00eeff);
      filter: drop-shadow(0 0 15px #00fbff);
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .mi {
        font-size: 16px;
        font-family: PingFang SC;
        font-weight: 800;
      }
      .km {
        font-size: 12px;
        font-family: PingFang SC;
        font-weight: 800;
        color: #dbdbdb;
      }
      .name {
        font-size: 12px;
        font-family: PingFang SC;
        font-weight: 800;
        color: #ffffff;
      }
    }
  }
}
</style>