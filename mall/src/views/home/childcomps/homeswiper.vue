<template>
  <swiper :interval="interval">
    <swiper-item v-for="(item, index) in data" :key="index" >
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imageload" >
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
      isload:false
    }
  },
  methods:{
    imageload(){
      if(!this.isload){
        this.$emit('load')
        this.isload = !this.isload
      }
    }
  }
}
</script>

<style scoped>

</style>