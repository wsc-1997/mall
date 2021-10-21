<template>
  <swiper class="detail">
    <swiper-item v-for="item in topimage" >
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
  }
}
</script>

<style scoped>
.detail {
  width: 100%;
  height: 300px;
  overflow: hidden;
}
</style>