<template>
  <div class="map-header">
    <div class="left">
      <span><img src="../assets/date.png" alt="" /></span>
      <span class="p20">主页</span>
      <!-- <span class="p20">共享交易</span> -->
      <span><img src="../assets/date.png" alt="" /></span>
      <span class="p20">操作台</span>
    </div>
    <div class="cenrter">{{ title }}</div>
    <div class="right">
      <div class="date">
        <span><img src="../assets/date.png" alt="" /></span>
        <span>{{ currentData }}</span>
        <span>{{ currentWeek }}</span>
      </div>
    </div>
    <div class="return" @click="handleReturn()">退出</div>
    <div class="fullScreen"><img src="../assets/全屏.png" alt="" /></div>
  </div>
</template>
<script>
import { formatDate, getWeekDate } from "../venders/formatDate";
export default {
  data() {
    return {
      title: "交通基建管控平台",
      currentData: "",
      currentWeek: getWeekDate(),
    };
  },
  created() {
    this.currentData = formatDate(new Date());
    this.nowTimes();
  },
  methods: {
    nowTimes() {
      setInterval(() => {
        this.currentData = formatDate(new Date());
      }, 1000);
    },
    // 退出
    handleReturn() {
      this.$router.push("/hellow");
    },
  },
  mounted() {},
};
</script>
<style scoped lang="scss">
.map-header {
  height: 72px;
  width: 100%;
  background: url("../assets/map-header.png");
  background-size: 100% 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  font-weight: 400;
  color: #ffffff;
  opacity: 0.9;
  .cenrter {
    font-size: 22px;
    flex: 7;
    font-weight: bold;
    color: #d3fdf6;
    text-align: center;
    letter-spacing: 6px;
    padding-left: 35px;
  }
  .left {
    flex: 3;
    padding-left: 90px;
    display: flex;
    position: relative;
    .logo {
      width: 42px;
      margin-right: 40px;
      padding: 4px;
    }
    span {
      font-size: 14px;
      line-height: 50px;
      cursor: pointer;
      img {
        padding-right: 6px;
      }
    }
    span.p20 {
      padding-right: 40px;
    }
  }
  .right {
    flex: 3;
    padding-right: 20px;
    & > div {
      display: flex;
      align-items: center;
      align-content: flex-start;
      justify-content: flex-start;
    }
    span {
      margin-left: 20px;
    }
    .date {
      span {
        font-size: 14px;
      }
    }
    .date span + span {
      margin-left: 10px;
      font-size: 14px;
    }
  }
  .return {
    flex: 1;
    font-size: 14px;
    cursor: pointer;
  }
  .fullScreen {
    position: fixed;
    right: 0;
    top: 0;
  }
}
</style>
