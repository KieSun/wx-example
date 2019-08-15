<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
// import { getAuthRedirectURI } from "./utils";
import axios from "axios";

export default {
  name: "app",
  components: {
    HelloWorld
  },
  mounted() {
    // window.location.href = getAuthRedirectURI({
    //   appid: "wx74950e3d3ca6433a",
    //   redirect_uri: "http://local.yuchengkai.org:8080",
    //   scope: "snsapi_userinfo"
    // });
    axios.get("/api/");
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
