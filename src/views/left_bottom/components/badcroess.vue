<template>
  <div class="boxs">
    <div class="title">
      <h3>通行路线申领排名</h3>
    </div>
    <div class="main">
      <div class="item" v-for="(item, index) in list" :key="index">
        <div
          style="
            width: 8px;
            height: 8px;
            background: #00ddff;
            border-radius: 50%;
            margin-right: 10px;
          "
        ></div>
        <div
          style="
            height: 100%;
            width: 100px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            display: flex;

            align-items: center;
          "
        >
          {{ item.name }}
        </div>
        <div
          style="
            width: 199px;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          "
        >
          <span
            >申请数量:
            <span>1223</span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          name: "320国道",
          color: "#ca1e20",
          timer: 90,
        },
        {
          name: "205国道",
          color: "#e75724",
          timer: 80,
        },
        {
          name: "朱富线",
          color: "#e75724",
          timer: 80,
        },
        {
          name: "浙西大道",
          color: "#e75724",
          timer: 80,
        },
        {
          name: "衢州东互通",
          color: "#e75724",
          timer: 80,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.boxs {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .title {
    flex: 1;
    width: 100%;
    height: 100%;

    padding-left: 20px;
    display: flex;
    align-items: center;
  }
  .main {
    flex: 5;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    .item {
      margin: 4px;
      flex: 1;
      width: 100%;
      height: 100%;

      display: flex;
      align-items: center;
    }
  }
}
</style>