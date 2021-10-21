<template>
  <div>
    <detailnavbar></detailnavbar>
    <detailswiper :topimage="topimage"></detailswiper>
    <detailbaseinfo :goods="goods"></detailbaseinfo>
  </div>

</template>

<script>
import Detailnavbar from "@/views/detail/childcomps/detailnavbar";
import detailswiper from "@/views/detail/childcomps/detailswiper";
import detailbaseinfo from "@/views/detail/childcomps/detailbaseinfo";
import {getDetail,goods} from "@/network/detail";

export default {
  name: "Detail",
  components:{
    Detailnavbar,
    detailswiper,
    detailbaseinfo
  },
  data(){
    return{
      iid:null,
      topimage:[],
      goods:null
    }
  },
  created() {
    this.iid = this.$route.params.iid

    getDetail(this.iid).then( res=>{
      const data = res.result
      this.topimage = data.itemInfo.topImages

      console.log(data);

      this.goods = new goods(data.itemInfo,data.columns,data.shopInfo)
    })
  }
}
</script>

<style scoped>

</style>