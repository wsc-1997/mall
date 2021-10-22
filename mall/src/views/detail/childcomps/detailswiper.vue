<template>
  <swiper class="detail" :interval="interval">
    <swiper-item v-for="(item,index) in topimage" :key="index" >
      <img :src="item" alt="">
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper, SwiperItem} from "@/components/common/swiper"

export default {
  name: "detailswiper",
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    topimage: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data(){
    return{
      interval:3000,
      isload:false
    }
  },
}
</script>

<style scoped>
.detail {
  height: 300px;
  overflow: hidden;
}
</style>