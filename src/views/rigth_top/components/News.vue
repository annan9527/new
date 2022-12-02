<template>
  <div class="box">
    <div class="title">数据战队</div>
    <div class="scorll-table">
      <table class="table" @mouseenter="enter" @mouseleave="start">
        <thead class="thead">
          <tr class="thead-tr">
            <td
              v-for="(item, index) in config"
              :key="index"
              class="thead-tr-td"
            >
              {{ item.title }}
            </td>
          </tr>
        </thead>
        <tbody
          class="tbody"
          ref="tbody anim"
          :class="{ anim: animate == true }"
        >
          <tr
            v-for="(item, index) in tableData"
            :key="index"
            class="tbody-tr"
            @click="open"
          >
            <!-- <td v-for="(res,i) in config" :key="i" class="tbody-tr-td">{{item[res.key]}}</td> -->
            <td class="tbody-tr-td">{{ item.item1 }}</td>
            <td class="tbody-tr-td">{{ item.item2 }}</td>
            <td class="tbody-tr-td">{{ item.item3 }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="img" v-if="tableData[0].item4">
      <img :src="tableData[0].item4" alt="" />
    </div>
    <dailog :isshow="dailogshow" :tableData="DailogData" @close="close(val)"></dailog>
  </div>
</template>

<script>
import Dailog from "../../rigth_top/components/Dailog.vue";
export default {
  components: { Dailog },
  props: {
    //   宽
    width: {
      type: String || Number,
    },
    /**
     * 表头信息
     *  举例：[
     *   {key: "module_name",title: "模块名称"},
     *   {key: "name", title: "成果名称"},
     *   {key: "num",title: "数量"},],
     *   title 表头名字   key 循环表格数据时的key 值
     */

    // 表格数据
  },
  data() {
    return {
      config: [
        { key: "module_name", title: "牌照" },
        { key: "name", title: "卡口位置" },
        { key: "num", title: "时间" },
      ],
      dailogshow: false,
      DailogData: {
        chepai: "浙G1uwl",
        kakou: "衢化路145K6",
        time: "2022-10-15",
      },
      tableData: [
        {
          item1: "xxx路口1",
          item2: "浙G1opad",
          item3: "2022-01-5",
          item4:
            "http://5b0988e595225.cdn.sohucs.com/images/20190617/bf942f02ae2741359eb4d44d14a2ae1a.jpeg",
        },
        {
          item1: "xxx路口2",
          item2: "浙G1opad",
          item3: "2022-01-8",
          item4:
            "https://img2.baidu.com/it/u=3481169583,2825186952&fm=253&fmt=auto&app=138&f=JPEG?w=667&h=500",
        },
        {
          item1: "xxx路口3",
          item2: "浙G1opad",
          item3: "2022-01-6",
          item4:
            "http://5b0988e595225.cdn.sohucs.com/images/20190617/bf942f02ae2741359eb4d44d14a2ae1a.jpeg",
        },
        {
          item1: "xxx路口4",
          item2: "浙G1opad",
          item3: "2022-01-6",
          item4:
            "https://img2.baidu.com/it/u=3481169583,2825186952&fm=253&fmt=auto&app=138&f=JPEG?w=667&h=500",
        },
      ],
      animate: false, // 动画
      time: null, // 定时器
    };
  },
  mounted() {
    console.log(this.tableData);
    this.time = setInterval(this.openTheScroll, 2000);
  },
  methods: {
    /**
     * @description 开始滚动
     * @param
     */
    openTheScroll() {
      this.animate = true; // 因为在消息向上滚动的时候需要添加css3过渡动画，所以这里需要设置true
      setTimeout(() => {
        //  这里直接使用了es6的箭头函数，省去了处理this指向偏移问题，代码也比之前简化了很多
        this.tableData.push(this.tableData[0]); // 将数组的第一个元素添加到数组的
        this.tableData.shift(); //删除数组的第一个元素

        this.animate = false; // margin-top 为0 的时候取消过渡动画，实现无缝滚动
      }, 500);
    },
    /**
     * @description 鼠标移入
     */
    enter() {
      clearInterval(this.time);
      //   this.Data =JSON.parse(JSON.stringify(this.tableData));
    },
    /**
     * @description 鼠标移除
     */
    start() {
      this.time = setInterval(this.openTheScroll, 2000);
    },
    /**
     * @description 清除定时器
     * @param
     */
    clearTime() {
      clearInterval(this.time);
    },

    open() {
      console.log('ad')
      this.dailogshow = true;
    },
    close(val) {
       this.dailogshow =val
    }
  },
};
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100%;
  cursor: pointer;
  position: relative;
}

// 标题
.title {
  position: absolute;
  top: 20px;
  left: 80px;
  font-size: 20px;
  font-family: PingFang SC;
  font-weight: 800;
  color: #ecf9ff;
}

.img {
  position: absolute;
  top: 80px;
  right: 40px;
  width: 160px;
  height: 201px;
  img {
    width: 100%;
    height: 100%;
  }
}
.scorll-table {
  position: absolute;
  top: 80px;
  left: 60px;
  width: 440px;
  height: 201px;
  overflow: hidden;
}
.table {
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  position: relative;
}
.thead {
  background-color: rgba($color: #000000, $alpha: 1);
  height: 40px;
  line-height: 40px;
  position: absolute;
  width: 100%;
  z-index: 99;
}
.thead-tr {
  display: flex;

  .thead-tr-td {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.tbody {
  flex: 1;

  position: absolute;
  top: 40px;
  left: 0;
  right: -17px;
  bottom: 0;
  overflow-x: hidden;
  overflow-y: scroll;
}
.tbody-tr {
  display: flex;
  .tbody-tr-td {
    flex: 1;
    height: 40px;
    line-height: 40px;
    text-align: center;
  }
}
.anim {
  transition: all 0.5s;
  margin-top: -40px;
}
</style>
