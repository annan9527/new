<template>
  <div class="box">
    <div class="text">{{ msg }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "今日勤务排班：(荷花街道荷二路口) 沈安、李雪、(荷花街道荷三路口)",
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
  width: 500px;
  height: 36px;
  /* border: 1px solid #00264d; */
  border-radius: 5px;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  background-image: url(../../../assets/情指情舆/月警情数背景.png);
  /* background: ; */
  white-space: nowrap;
  overflow: hidden;
}
.text {
  /* width: 600px; */
  /* background: red; */
  margin: auto;
   
}
</style>
