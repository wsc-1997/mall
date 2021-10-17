<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <homeswiper :data="banner"></homeswiper>
    <home-recommend-view :recommends="recommends"></home-recommend-view>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import {getHomeMultidata} from "@/network/home";
import homeswiper from "@/views/home/childcomps/homeswiper";
import homeRecommendView from "@/views/home/childcomps/homeRecommendView";

export default {
  name: "home",
  components: {
    NavBar,
    homeswiper,
    homeRecommendView
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
      this.recommends = res.data.recommend.list;
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