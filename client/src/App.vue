<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <h1>{{ message }}</h1>
  <router-view />
</template>
<script lang="ts">
import http from "@/api/http";
import { Vue } from "vue-class-component";
export default class App extends Vue {
  message = "Hello from Client";
  async mounted(): Promise<void> {
    const { data } = await http.get("/");
    this.message = data;
  }
}
</script>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
