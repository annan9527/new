<template>
  <div class="box" style="width: 100%; height: 100%">
    <div class="title">驾校科二科三通过率排名</div>
    <dv-scroll-board :config="config" style="width: 100%; height: 95%" />
  </div>
</template>
        
        <script>
export default {
  data() {
    return {
      config: {
        header: ["驾校名称", "总量", "科三通过率", "科二通过率"],
        data: [
          ["江山江信", "1310", "31.98", "31.98"],
          ["安顺驾校", "3100", "40.64", "31.98"],
          ["长城驾校", "6985", "40.64", "31.98"],
          ["达能驾校", "4562", "36.28", "25.98"],
          ["高新驾校", "2268", "36.28", "51.98"],
          ["官庄驾校", "1310", "31.98", "31.98"],
          ["鸿泰公交", "3100", "40.64", "31.98"],
          ["华顺驾校", "6985", "40.64", "53.98"],
          ["交通驾校", "4562", "36.28", "56.98"],
          ["联谊驾校", "2268", "36.28", "25.98"],
          ["明安驾校", "1310", "31.98", "29.98"],
          ["星光驾校", "3100", "36.64", "56.98"],
          ["浙西驾校", "6985", "45.64", "52.98"],
          ["双港驾校", "4562", "36.28", "46.98"],
          ["高新驾校", "2268", "36.28", "71.98"],
          ["东航驾校", "1310", "31.98", "18.98"],
        ],
        rowNum: "8",
        columnWidth: [100],
        align: ["left"],
        waitTime: "3000",
        // carousel: "page",
        oddRowBGC: "transparent",
        evenRowBGC: "transparent",
        headerBGC: "transparent",
      },
    };
  },
};
</script>
<style lang="scss" scoped>
.title {
  color: #ffdb4c;
}
</style>
        
  
