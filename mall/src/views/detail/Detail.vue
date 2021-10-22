<template>
  <div class="detail">
    <detailnavbar class="top-nav" @titleclick="titleclick" ref="nav"></detailnavbar>
    <Scroll class="contents"
            :pull-up-load="true"
            ref="scroll"
            :probeType="3"
            @scroll="contentscroll">
      <detailswiper :topimage="topimage"></detailswiper>
      <detailbaseinfo :goods="goodsinfo"></detailbaseinfo>
      <detailshopinfo :shop="shop"></detailshopinfo>
      <detailmageinfo :detailinfo="detailinfo" @imgLoad="goodsImgLoad"></detailmageinfo>
      <detailparmsinfo :paraminfo="paraminfo"  ref="param"></detailparmsinfo>
      <datailcommentinfo :commentinfo="commentinfo" ref="comment"></datailcommentinfo>
      <goods :goods="recommends"  ref="recommend"></goods>
    </Scroll>
    <backtop @click.native="backTop" v-show="isShowBackTop" />
  </div>

</template>

<script>
import Detailnavbar from "@/views/detail/childcomps/detailnavbar";
import detailswiper from "@/views/detail/childcomps/detailswiper";
import detailbaseinfo from "@/views/detail/childcomps/detailbaseinfo";
import detailshopinfo from "@/views/detail/childcomps/detailshopinfo";
import detailmageinfo from "@/views/detail/childcomps/detailmageinfo";
import detailparmsinfo from "@/views/detail/childcomps/detailparmsinfo";
import datailcommentinfo from "@/views/detail/childcomps/datailcommentinfo";

import Scroll from "@/components/common/scroll/Scroll";
import goods from "@/components/content/goods/goods";
import backtop from "@/components/content/backtop/backtop";

import {getDetail, getrecommend, goodsinfo, info ,param} from "@/network/detail";

export default {
  name: "Detail",
  components:{
    Detailnavbar,
    detailswiper,
    detailbaseinfo,
    detailshopinfo,
    detailmageinfo,
    detailparmsinfo,
    datailcommentinfo,
    Scroll,
    goods,
    backtop
  },
  data(){
    return{
      iid:null,
      isShowBackTop: false,
      topimage:[],
      goodsinfo: {},
      shop: {},
      detailinfo: {},
      paraminfo: {},
      commentinfo: [],
      recommends: []
    }
  },
  created() {
    this.iid = this.$route.params.iid

    getDetail(this.iid).then( res=>{
      const data = res.result
      this.topimage = data.itemInfo.topImages
      this.goods = new goodsinfo(data.itemInfo,data.columns,data.shopInfo)
      this.shop = new info(data.shopInfo)
      this.detailinfo = data.detailInfo
      this.paraminfo = new param(data.itemParams.info, data.itemParams.rule)
      if(data.rate.cRate !== 0){
        this.commentinfo = data.rate.list
      }
    })

    getrecommend().then( res=>{
      this.recommends = res.data.list
      console.log(this.recommends);
    })
  },
  methods: {
    backTop(){
    	//返回顶部
    	this.$refs.scroll.scroll.scrollTo(0,0);
    },
    goodsImgLoad() {
      this.$refs.scroll.scroll.refresh();
      this.themeTopY = [];
      this.themeTopY.push(0);
      this.themeTopY.push(this.$refs.param.$el.offsetTop);
      this.themeTopY.push(this.$refs.comment.$el.offsetTop);
      this.themeTopY.push(this.$refs.recommend.$el.offsetTop);
      this.themeTopY.push(Number.MAX_VALUE);
    },
    titleclick(index){
      this.$refs.scroll.scroll.scrollTo(0, -this.themeTopY[index], 200)
    },
    contentscroll(position){
      //返回顶部是否显示
      this.isShowBackTop = (-position.y) > 500;
      const positionY = -(position.y);
      let _lenth = this.themeTopY.length;
      for(let i=0; i<_lenth-1; i++){
        if(this.currentIndex !== i && (positionY >= this.themeTopY[i] && positionY < this.themeTopY[i+1])){
          this.currentIndex = i;
          this.$refs.nav.currentIndex = this.currentIndex;
        }
      }
    },
    //加入购物车
    addCart() {
      // 获取购物车需要展示的信息
      const product = {}
      product.image = this.topBnner[0];
      product.title = this.goods.title;
      product.desc = this.goods.discountDesc;
      product.price = this.goods.lowNowPrice;
      product.iid = this.iid;

      //将商品添加到购物车里
      this.$store.commit('addCart', product);
    }
  }
}
</script>

<style scoped>
.detail{
  background-color: #fff;
  position: relative;
  z-index: 10;
}
.contents{
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
.top-nav {
  background-color: #fff;
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  z-index: 11;
}
</style>