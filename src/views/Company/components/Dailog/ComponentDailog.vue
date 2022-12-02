<template>
  <!-- 蒙版 -->
  <div class="mask" v-show="isshow">
    <div class="layer">
      <div class="table">
        <div class="table-head">
          <table>
            <!-- 表头 -->
            <thead>
              <tr>
                <th>巡检部门</th>
                <th>巡检日期</th>
                <th>隐患整改通知书</th>
              </tr>
            </thead>
            <tbody>
              <tr
                :class="{ active: index % 2 === 0 }"
                v-for="(item, index) in arr"
                :key="index"
              >
                <td :title="item.name">{{ item.name }}</td>
                <td :title="item.num2">{{ item.num2 }}</td>
                <td :title="item.num3">
                  <img
                    src="../../../../assets/改/view.jpg"
                    alt=""
                    style="width: 50px; height: 30px"
                    preview
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <button class="button1" @click="close"></button>
    </div>
  </div>
</template>
    
    <script>
export default {
  props: {
    isshow: {
      default: false,
      type: Boolean,
    },
    tableData: {
      default: {},
    },
  },
  data() {
    return {
      arr: [
        {
          name: "立达物流",
          num2: "2022.9.15",
          num3: "柯城大队",
        },
        {
          name: "立达物流",
          num2: "2022.9.15",
          num3: "柯城大队",
        },
        {
          name: "立达物流",
          num2: "2022.9.15",
          num3: "柯城大队",
        },
        {
          name: "立达物流",
          num2: "2022.9.15",
          num3: "柯城大队",
        },
        {
          name: "立达物流",
          num2: "2022.9.15",
          num3: "柯城大队",
        },
        {
          name: "立达物流",
          num2: "2022.9.15",
          num3: "柯城大队",
        },
        {
          name: "立达物流",
          num2: "2022.9.15",
          num3: "柯城大队",
        },
        {
          name: "立达物流",
          num2: "2022.9.15",
          num3: "柯城大队",
        },
        {
          name: "立达物流",
          num2: "2022.9.15",
          num3: "柯城大队",
        },
      ],
      activitylogVisible: false,
      activeDetail: {},
      html: undefined, //内容
    };
  },
  methods: {
    close() {
      this.$emit("close", false);
    },
  },
};
</script>
    
    <style lang="scss" scoped>
.mask {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1110;
  // text-align: center;
  opacity: 1;
  transform: scale(1);
  background: rgba(0, 0, 0, 0.6);
  transition: all 0.3s ease-in-out 0s;
  .layer {
    padding-right: 10%;
    position: relative;
    padding: 85px 20px 20px 20px;
    background-repeat: no-repeat;
    width: 40%;
    height: 50%;
    // background: #fff;
    background-image: url(../../../../assets/情指情舆/数据战队弹窗.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;

    .table {
      width: 100%;
      height: 90%;
      table tbody {
        display: block;
        height: 340px;
        overflow-y: scroll;
      }
      // .active {
      //   background-color: rgba(0, 36, 61, 0.7);
      // }
      // .active1 {
      //   color: #00fff9;
      //   background-color: rgba($color: #00218f, $alpha: 0.5);
      // }
      table thead,
      table tbody tr {
        display: table;
        padding: 12px 12px 12px 12px;
        width: 100%;
        table-layout: fixed; /**表格列的宽度由表格宽度决定，不由内容决定*/
        text-align: center;
      }

      thead th,
      tbody td {
        font-size: 12px;
        /*设置表格文字在一行显示*/

        word-break: keep-all;
        white-space: nowrap;
        overflow: hidden; /* 内容超出宽度时隐藏超出部分的内容 */
        text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用*/
        width: 50px;
      }

      table thead {
        width: calc(100% - 1em); /*表头与表格垂直对齐*/
      }

      //  滚动条优化
      ::-webkit-scrollbar {
        width: 6px;
        height: 6px;
        background-color: rgba(21, 85, 131, 0.7);
        border-radius: 6px;
        display: none;
      }

      ::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        border-radius: 6px;
        background-color: rgba(28, 39, 47, 0.7);
      }

      ::-webkit-scrollbar-thumb {
        border-radius: 6px;
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        background-color: #717293;
      }
    }

    .button1 {
      opacity: 0;
      top: 0%;
      right: -0.5%;
      position: absolute;
      width: 15%;
      height: 8%;
      border: 0px solid #43a7de;
      background: linear-gradient(0deg, #265c91 0%, #2e70b3 100%);
      border-radius: 0.13rem;
      background-image: url(../../../../assets/情指情舆/关闭.png);
      background-repeat: no-repeat;
      background-size: 100% 100%;
    }
  }
}
</style>