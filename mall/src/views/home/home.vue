<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <p>我是首页</p>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import {getHomeMultidata} from "@/network/home";

export default {
  name: "home",
  components: {
    NavBar
  },
  data() {
    return{
      banner:[],
      recommends:[],
    }
  },
  created() {
    getHomeMultidata().then(res =>{
      this.banner = res.data.banner.list;
      this.recommends = res.data.recommends.list;
    })
  }

}
</script>

<style scoped>
.home-nav{
  background-color: var(--color-text);
  color: #fff;
}
</style>