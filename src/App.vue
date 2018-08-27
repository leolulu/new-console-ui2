<template>
  <div id="app">
    <div class="header">
      <el-button icon="el-icon-menu" type='info' plain class="headermunuicon" @click='minutogglehandlle'></el-button>
      <div class="logo"></div>
    </div>
    <div class="mainbody">
      <el-menu router :class="{asideShowFromHide:!munutoggle}" class="aside">
        <el-menu-item :index='index.toString()' v-for='(item,index) in navlist' :key='index' :route='item.path'>{{item.name}}</el-menu-item>
      </el-menu>
      <div class="main">
        <router-view></router-view>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      navlist: [
        { name: "导航组件1", path: "/page1" },
        { name: "导航组件2", path: "/page2" },
        { name: "导航组件3", path: "/page3" },
        { name: "导航组件4", path: "/page4" },
        { name: "导航组件5", path: "/page5" }
      ],
      munutoggle: true
    };
  },
  methods: {
    minutogglehandlle() {
      this.munutoggle ? (this.munutoggle = false) : (this.munutoggle = true);
      console.log(this.munutoggle);
    }
  }
};
</script>

<style lang='scss' scoped>
#app {
  .header {
    width: 100%;
    height: 59px;
    background-color: #fbfbfa;
    border-bottom: 1px solid #eee;
    display: flex;
    align-items: center;
    .logo {
      margin-left: 100px;
      width: 60px;
      height: 60px;
      background-image: url("./assets/images/ef3f353856a7ccac5121419309a896fa.png");
      background-size: 50px;
      background-repeat: no-repeat;
      animation: logoSpin 60s infinite linear alternate;
      background-position-y: center;
      display: inline-block;
    }
    .headermunuicon {
      margin-left: 10px;
      display: none;
    }
  }
  .mainbody {
    position: absolute;
    top: 60px;
    bottom: 0;
    width: 100%;
    display: flex;
    align-items: stretch;
    .aside {
      width: 200px;
      background-color: #fcfcfc;
      transition: transform 200ms ease-in-out;
    }
    .main {
      flex: 1;
      padding: 5px;
    }
  }
  @keyframes logoSpin {
    0% {
      margin-left: 100px;
      transform: rotateZ(0deg);
    }
    100% {
      margin-left: 400px;
      transform: rotateZ(360deg);
    }
  }
  @media (max-width: 900px) {
    .headermunuicon {
      display: inline-block !important;
    }
    .aside {
      width: 200px;
      background-color: #fcfcfc;
      transform: translateX(-100%);
      position: absolute;
      transition: transform 200ms ease-in-out;
    }
    .asideShowFromHide {
      transform: translateX(0);
      border-bottom: solid 1px #e6e6e6
    }
  }
}
</style>
