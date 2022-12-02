<template>
  <dv-scroll-board
    :config="config"
    style="width: 100%; height: 100%"
    class="news"
  />
</template>
      
      <script>
export default {
  data() {
    return {
      config: {
        data: [
          ["询问车辆年检后状态未及时更新问题..."],
          ["询问车辆年检后状态未及时更新问题..."],
          ["询问车辆年检后状态未及时更新问题..."],
          ["询问车辆年检后状态未及时更新问题..."],
          ["询问车辆年检后状态未及时更新问题..."],
          ["询问车辆年检后状态未及时更新问题..."],
        ],
        rowNum: "1",
        waitTime: "5000",
        oddRowBGC: "rgba(0, 0, 0,0)",
        evenRowBGC: "rgba(0, 10, 0,0)",
        waitTime: "4000",
      },
    };
  },
};
</script>
      <style lang="scss" scoped>
</style>