<!--LjCollapse-->
<template>
  <div class="LjCollapse">
    <div class="LjCollapseHead">
      <span><h3>{{ title }}</h3></span>
    </div>
    <div style="margin-top: 10px; height: 220px; overflow: hidden">
      <div
        v-for="(item, index) in list"
        :key="index"
        style="
          width: 300px;
          height: 30px;

          margin: 6px 0px;
          display: flex;
          align-items: center;
          justify-content: space-around;
        "
      >
        <div
          style="
            width: 8px;
            height: 8px;
            background: #ca1e20;
            border-radius: 50%;
            margin-right: 10px;
          "
        ></div>
        <div style="width: 100px">{{ item.name }}</div>
        <div style="width: 180px">
          <el-progress
            :text-inside="true"
            :stroke-width="16"
            :percentage="item.timer"
            :color="item.color"
            :format="format(item)"
          ></el-progress>
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
      default: "事故多发路段",
    },
    headColor: {
      type: String,
      default: "orange",
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
        {
          name: "书院西路",
          color: "#e75724",
          timer: 80,
        },
        {
          name: "九华北大道",
          color: "#e75724",
          timer: 80,
        },
        {
          name: "315省道",
          color: "#fccd3e",
          timer: 40,
        },
        {
          name: "衢化路",
          color: "#fccd3e",
          timer: 40,
        },
        {
          name: "府东街",
          color: "#fccd3e",
          timer: 40,
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
  padding: 10px;

  .LjCollapseHead {
    width: 300px;
  
    font-size: 16px;

    caret-color: transparent;
    &:hover {
      cursor: pointer;
    }
  }
}
</style>