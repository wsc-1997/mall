<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <homeswiper :data="banner"></homeswiper>
    <home-recommend-view :recommends="recommends"></home-recommend-view>
    <feature-view></feature-view>
    <tab-control class="tab-control" :title="['流行','新款','精选']"></tab-control>



    <ul v-for="item in 100">
      <li>item</li>
    </ul>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";

import homeswiper from "@/views/home/childcomps/homeswiper";
import homeRecommendView from "@/views/home/childcomps/homeRecommendView";
import FeatureView from "@/views/home/childcomps/FeatureView";
import TabControl from "@/components/content/tabControl/TabControl";

import {getHomeMultidata,getHomeGoods} from "@/network/home";

export default {
  name: "home",
  components: {
    NavBar,
    homeswiper,
    homeRecommendView,
    FeatureView,
    TabControl
  },
  data() {
    return{
      banner:[],
      recommends:[],
      goods:{
        'pop':{page:0,list:[]},
        'news':{page:0,list:[]},
        'sell':{page:0,list:[]},
      }
    }
  },
  created() {
    this.getHomeMultidata()

    getHomeGoods('pop',1).then(res =>{
      console.log(res);
    })
  },
  methods:{
    getHomeMultidata(){
      getHomeMultidata().then(res =>{
        this.banner = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    }
  }
}
</script>

<style scoped>
#home{
  padding-top:44px ;
}

.home-nav{
  background-color: var(--color-text);
  color: #fff;

  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  top: 0;
  z-index: 9;

}
.tab-control{
  position: sticky;
  top: 44px;
}
</style>