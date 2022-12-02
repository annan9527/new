<!--LjCollapse-->
<template>
  <div class="LjCollapse" :style="{ backgroundColor: bgColor }">
    <div
      class="LjCollapseHead"
      :style="{
        color: headColor,
        borderLeftColor: headColor,
      }"
      @click="collapse = !collapse"
    >
      <span>{{ title }}</span>
      <span style="float: right">
        <i v-if="collapse" class="el-icon-arrow-down"></i>
        <i v-else class="el-icon-arrow-right"></i>
      </span>
      <div>
        <span> 外勤人员: </span>
        <span> 106 </span>
        <span> 在线人员: </span>
        <span> 80 </span>
      </div>
    </div>
    <div
      style="margin-top: 10px; height: 118px; overflow: hidden"
      v-if="collapse"
    >
      <div
        v-for="(item, index) in list"
        :key="index"
        style="
          width: 300px;
          height: 30px;
          margin: 6px 0px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        "
      >
        <div
          style="width: 20px; height: 20px; margin-right: 20px"
          :style="{ background: item.color }"
        ></div>
        <div style="width: 400px">{{ item.name }}</div>
        <div style="width: 80px">
          {{ item.timer }}
        </div>
      </div>
    </div>
    <div style="margin-top: 10px; height: 280px" v-else>
      <div
        v-for="(item, index) in list"
        :key="index"
        style="
          width: 300px;
          height: 30px;
          margin: 6px 0px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        "
      >
        <div
          style="width: 20px; height: 20px; margin-right: 20px"
          :style="{ background: item.color }"
        ></div>
        <div style="width: 400px">{{ item.name }}</div>
        <div style="width: 80px">
          {{ item.timer }}
        </div>
      </div>
    </div>
  </div>
</template>
 
<script>
export default {
  name: "LjCollapse",
  components: {},
  props: {
    title: {
      type: String,
      default: "柯城大队智慧勤务",
    },
    headColor: {
      type: String,
      default: "orange",
    },
    bgColor: {
      type: String,
      default: "rgba(41, 41, 41, 0.589)", //浅黑
      // default: "#253266b7",//浅蓝
    },
    width: {
      type: String,
      default: "100%",
    },
    isCollapse: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      collapse: this.isCollapse,

      list: [
        {
          name: "在岗",
          color: "#FF9066",
          timer: 205,
        },
        {
          name: "缺勤",
          color: "#FF769F",
          timer: 5,
        },
        {
          name: "休息",
          color: "#D67AF1",
          timer: 12,
        },
        {
          name: "在线",
          color: "#77DDFF",
          timer: 80,
        },
        {
          name: "越界",
          color: "#33FF33",
          timer: 8,
        },
        {
          name: "非排班在线",
          color: "#0000FF ",
          timer: 0,
        },
        {
          name: "应执勤",
          color: "#FFFF00",
          timer: 0,
        },
        {
          name: "报备",
          color: "#BB5500",
          timer: 0,
        },
      ],
    };
  },
  computed: {},
  created() {},
  mounted() {},
  filters: {},
  methods: {
    format(item) {
      return () => {
        return item.timer;
      };
    },
  },
  watch: {},
};
</script>
 
<style lang="scss" scoped>
.LjCollapse {
  color: white;
  background-color: rgba(41, 41, 41, 0.589);
  padding: 10px;

  .LjCollapseHead {
    width: 300px;
    line-height: 30px;
    border-left: 5px solid;

    padding-left: 10px;
    font-size: 18px;

    caret-color: transparent;
    &:hover {
      cursor: pointer;
    }
  }
}
</style>