<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <homeswiper :data="banner"></homeswiper>
    <home-recommend-view :recommends="recommends"></home-recommend-view>
    <feature-view></feature-view>
    <tab-control class="tab-control" :title="['流行','新款','精选']" @tabClick="tabclick"></tab-control>
    <goods :goods="showgoods"></goods>
  </div>
</template>

<script>
import homeswiper from "@/views/home/childcomps/homeswiper";
import homeRecommendView from "@/views/home/childcomps/homeRecommendView";
import FeatureView from "@/views/home/childcomps/FeatureView";

import NavBar from "@/components/common/navbar/NavBar";
import TabControl from "@/components/content/tabControl/TabControl";
import goods from "@/components/content/goods/goods";

import {getHomeMultidata,getHomeGoods} from "@/network/home";
import Goods from "@/components/content/goods/goods";

export default {
  name: "home",
  components: {
    Goods,
    NavBar,
    homeswiper,
    homeRecommendView,
    FeatureView,
    TabControl,
    goods
  },
  data() {
    return{
      banner:[],
      recommends:[],
      goods: {
        'pop':{page: 0,list:[]},
        'new':{page: 0,list:[]},
        'sell':{page: 0,list:[]},
      },
      currentType:'pop'
    }
  },
  computed: {
    showgoods(){
      return this.goods[this.currentType].list
    }
  },
  created() {
    this.getHomeMultidata()

    this.getHomegoods('pop')
    this.getHomegoods('new')
    this.getHomegoods('sell')
  },
  methods:{
    tabclick(index){
      switch (index){
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
    },



    /*数据请求*/
    getHomeMultidata(){
      getHomeMultidata().then(res =>{
        this.banner = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    },
    getHomegoods(type){
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res =>{
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
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
  bottom: 0;
  z-index: 9;

}
.tab-control{
  position: sticky;
  top: 44px;
  z-index: 9;
}
</style>