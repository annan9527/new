<template>
  <div class="box">
    <EventCenter></EventCenter>
    <div class="event_top">
      <Event_Top></Event_Top>
    </div>

    <!-- 警情高发 -->
    <div class="left">
      <div class="policelinehigth">
        <PoliceLineHigth></PoliceLineHigth>
      </div>

      <div class="hotline_eigth">
        <TableList></TableList>
      </div>
    </div>

    <div class="rigth">
      <!-- 咨询高频事件 -->
      <div class="consult">
        <HigthConsult></HigthConsult>
      </div>
      <!-- 举报高频事件 -->
      <div class="report">
        <Report></Report>
      </div>
    </div>
  </div>
</template>
  
  <script>
import Police_line from "../rigth_top/components/Police_line.vue";
import EventCenter from "./compontents/EventCenter.vue";
import Event_Top from "./compontents/Event_Top.vue";
import HigthConsult from "./compontents/HigthConsult.vue";
import PoliceLineHigth from "./compontents/PoliceLineHigth.vue";
import Report from "./compontents/Report.vue";
import TableList from "./compontents/TableList.vue";
export default {
  components: {
    Event_Top,
    EventCenter,
    TableList,
    Report,
    HigthConsult,
    Police_line,
    PoliceLineHigth,
  },
};
</script>
  
  <style lang="scss" scoped>
@keyframes identifier {
  0% {
    transform: translateX(550px);
  }
  100% {
    transform: translateX(0px);
  }
}
@keyframes identifier_t {
  0% {
    transform: translateY(-60px);
  }
  100% {
    transform: translateY(0px);
  }
}

@keyframes identifier_r {
  0% {
    transform: translateX(-550px);
  }
  100% {
    transform: translateX(0px);
  }
}
.box {
  width: 100%;
  height: 100%;
  position: relative;

  // 左边 车辆类型
  .left {
    animation: identifier_r 2s;
    position: absolute;
    width: 550px;
    height: 761px;
    left: 20px;
    bottom: 48px;
    background-image: url(../../assets/事/事左.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    .policelinehigth {
      position: absolute;
      top: 80px;
      left: 28px;
      width: 450px;
      height: 280px;
    }
    .hotline_eigth {
      position: absolute;
      bottom: 30px;
      left: 28px;
      width: 470px;
      height: 280px;
    }
  }

  // 顶部label
  .event_top {
    position: absolute;
    top: 20px;
    left: 160px;
  }

  // 重量违法
  .rigth {
    animation: identifier 2s;
    position: absolute;
    width: 550px;
    height: 761px;
    right: 20px;
    bottom: 48px;
    background-image: url(../../assets/事/事右.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    //  咨询
    .consult {
      position: absolute;
      bottom: 20px;
      right: 20px;
      width: 450px;
      height: 270px;
      // background-image: url(../../assets/事/气泡.png);
      // background-size: 100% 100%;
      // background-repeat: no-repeat;
    }
    // 举报
    .report {
      position: absolute;
      top: 80px;
      right: 28px;
      width: 450px;
      height: 320px;
    }
  }
}
</style>