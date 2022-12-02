<template>
  <div class="box">
    <div class="title">[施工项目]</div>
    <div class="text">{{ msg }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "九华北大道 施工时段将于今日到期，请工作人员予以警戒...",
      setIntervalId: null,
    };
  },
  methods: {
    start() {
      this.setIntervalId = setInterval(() => {
        var start = this.msg.substring(0, 1);
        var end = this.msg.substring(1);
        this.msg = end + start;
      }, 500);
    },
  },
  created() {
    this.start();
  },
};
</script>

<style scoped>
.box {
  width: 460px;
  height: 36px;
  /* border: 1px solid #00264d; */
  display: flex;
  /* justify-content: center; */
  align-items: center;
  /* background: ; */
  white-space: nowrap;
  overflow: hidden;
}
.title {
  color: yellow;
  margin-right: 10px;
}
.text {
  /* width: 600px; */
  /* background: red; */
  margin: auto;
}
</style>
