<template>
  <swiper :interval="interval">
    <swiper-item v-for="item in data" >
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper,SwiperItem} from "@/components/common/swiper"
export default {
  name: "homeswiper",
  components:{
    Swiper,
    SwiperItem
  },
  props:{
    data: {
      type: Array,
      default(){
        return []
      }
    }
  },
  data(){
    return{
      interval:3000,
  }
}
}
</script>

<style scoped>

</style>