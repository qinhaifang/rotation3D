<template>
  <div class="mapBackground">
    <Header></Header>
    <div class="rotation3D-baseMap"></div>
    <div class="rotation3D-baseMaps"></div>

    <div id="rotation3D" class="rotation3D">
      <div class="itemList">
        <div
          :class="'rotation3D__item ' + item.type"
          v-for="(item, index) in itemList"
          :key="'item_' + index"
        >
          <div class="scale">
            <div class="baseImg"></div>
            <div class="cont">
              <i :class="'iconfont ' + item.icon"></i>
              <p>{{ item.name }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="lineList">
        <div
          :class="'rotation3D__line ' + item.type"
          v-for="(item, index) in itemList"
          :key="'item_' + index"
        >
          <div class="pos">
            <svg width="10">
              <path id="path1" stroke-dasharray="5,10"></path>
            </svg>
            <div class="dot dot1 el-icon-caret-right"></div>
          </div>
        </div>
      </div>
    </div>

    <div
      id="rotation3DInner"
      class="rotation3D"
      style="height: 400px; top: -650px"
    >
      <div class="itemList">
        <div
          :class="'rotation3D__item ' + item.type"
          v-for="(item, index) in innerList"
          :key="'item_' + index"
        >
          <div class="scale">
            <div class="baseImg"></div>
            <div class="cont">
              <i :class="'iconfont ' + item.icon"></i>
              <p>{{ item.name }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="lineList">
        <div
          :class="'rotation3D__line ' + item.type"
          v-for="(item, index) in innerList"
          :key="'item_' + index"
        >
          <div class="pos">
            <svg width="10">
              <path id="path1" stroke-dasharray="5,10"></path>
            </svg>
            <div class="dot dot1 el-icon-caret-right"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Rotation3D from "@/plugins/rotation3D/rotation3D.js";
import Header from "./components/header.vue";
export default {
  components: { Header },
  mounted() {
    new Rotation3D({
      id: "#rotation3D",
      farScale: 0.6,
      // farScale: 1,
      xRadius: -200, //x半径压缩
      yRadius: 100, //y半径压缩
      offset: 0.5,
      // yRadius: 0,  //y半径压缩
      //autoPlay:true,
      // autoPlayDelay:3000,
    });
    new Rotation3D({
      id: "#rotation3DInner",
      farScale: 0.6,
      xRadius: 20, //x半径压缩
      yRadius: 50, //y半径压缩
      offset: 1.5,
    });
  },
  data() {
    return {
      itemList: [
        { name: "人员管理", type: "blue", icon: "icon-renyuanguanli" },
        { name: "GPS服务", type: "green", icon: "icon-GPS" },
        { name: "路基施工", type: "yellow", icon: "icon-a-lujishigong2x" },
        { name: "数据服务中心", type: "blue", icon: "icon-shujufuwuzhongxin" },
        { name: "智慧梁场", type: "blue", icon: "icon-liangchang" },
        { name: "摊铺压实服务", type: "blue", icon: "icon-tanpuyashifuwu" },
        { name: "路面施工", type: "blue", icon: "icon-lumianshigong" },
        { name: "试验检测", type: "blue", icon: "icon-shiyanjiance" },
      ],
      innerList: [
        { name: "人员管理", type: "blue", icon: "icon-renyuanguanli" },
        { name: "GPS服务", type: "green", icon: "icon-GPS" },
        { name: "路基施工", type: "yellow", icon: "icon-a-lujishigong2x" },
        { name: "数据服务中心", type: "blue", icon: "icon-shujufuwuzhongxin" },
        { name: "智慧梁场", type: "blue", icon: "icon-liangchang" },
      ],
    };
  },
};
</script>

<style>
@import "@/plugins/rotation3D/font_3045003.css";
@import "@/plugins/rotation3D/rotation3D.css";

body {
  margin: 0;
  padding: 0;
  /* background-color: #292a38; */
}
.mapBackground {
  height: 100vh;
  width: 100%;
  overflow: hidden;
  background: url("./assets/mapBackground.png");
  background-repeat: repeat;
}
.rotation3D-baseMap {
  position: absolute;
  left: 10px;
  right: 0;
  top: 225px;
  margin: auto;
  width: 1312px;
  height: 516px;
  background: url("./assets/baseMap.png");
}
.rotation3D-baseMaps {
  position: absolute;
  left: 10%;
  right: 0;
  top: 200px;
  height: 600px;
  margin: auto;
  background: url("./assets/dizuo1.png") no-repeat;
  background-size: contain;
}
.rotation3D-baseMap::before {
  position: absolute;
  left: -12px;
  right: 0;
  top: 0;
  margin: auto;
  z-index: 99;
  width: 342px;
  height: 318px;
  display: block;
  content: "";
  background: url("./assets/baseLogo.png");
  animation: 10s bounceUpDown infinite;
}

/* Copyright 2014-present Evernote Corporation. All rights reserved. */
@keyframes caretBlink {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

@keyframes rotateSpinner {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

#text-tool-caret {
  animation-name: caretBlink;
  animation-iteration-count: infinite;
  animation-timing-function: cubic-bezier(1, 0, 0, 1);
  animation-duration: 1s;
}

#en-markup-loading-spinner {
  position: absolute;
  top: calc(50% - 16px);
  left: calc(50% - 16px);
  width: 32px;
  height: 32px;
}

#en-markup-loading-spinner img {
  position: relative;
  top: 0px;
  left: 0px;
  animation-name: rotateSpinner;
  animation-duration: 0.6s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
</style>
