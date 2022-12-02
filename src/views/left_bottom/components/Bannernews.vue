<template>
  <dv-scroll-board :config="config" style="width: 90%; height: 100%" />
</template>
      
      <script>
export default {
  data() {
    return {
      config: {
        headerBGC: "transparent",
        header: ["任务", "类型", "报警", "状态", "时间"],
        data: [
          ["渣土车预警", "违法", "已报警", "采集中", "07/21"],
          ["渣土车预警", "违法", "已报警", "采集中", "07/21"],
          ["渣土车预警", "违法", "已报警", "采集中", "07/21"],
          ["渣土车预警", "违法", "已报警", "采集中", "07/21"],
          ["渣土车预警", "违法", "已报警", "采集中", "07/21"],
          ["渣土车预警", "违法", "已报警", "采集中", "07/21"],
          ["渣土车预警", "违法", "已报警", "采集中", "07/21"],
          ["渣土车预警", "违法", "已报警", "采集中", "07/21"],
          ["渣土车预警", "违法", "已报警", "采集中", "07/21"],
          ["渣土车预警", "违法", "已报警", "采集中", "07/21"],
        ],

        columnWidth: [120],
        align: ["center"],
        waitTime: "3000",
        carousel: "page",
        // oddRowBGC: "rgba(0, 67, 197,.5)",
        // evenRowBGC: "rgba(81, 166, 255,.5)",
        // headerBGC: "#00264D",
        oddRowBGC: "transparent",
        evenRowBGC: " transparent",
        headerBGC: " transparent",
      },
    };
  },
};
</script>
      <style lang="scss" scoped>
.roll-table-header {
  color: #000;
  font-weight: 800;
  font-size: 16px;
}
.roll-table-item {
  color: #000;
  font-size: 15px;
}
</style>
      
      <style scoped>
/deep/.dv-scroll-board .rows .ceil {
  /* border-bottom: 1px solid #ebeef4 !important; */
}

/deep/.dv-scroll-board .rows .row-item {
  font-size: 12px !important;
  /* height: 49px !important;
  line-height: 45px !important; */
}
</style>