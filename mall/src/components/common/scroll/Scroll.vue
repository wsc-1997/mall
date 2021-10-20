<template>
  <div class="wrapper" ref="wrappers">
    <div class="content"><slot></slot></div>
  </div>
</template>

<script>
import BScroll from "better-scroll"
export default {
  name: "Scroll",
  data(){
    return {
      scroll:null
    }
  },
  props:{
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrappers,{
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      observeImage:true
    })
    this.scroll.on('scroll',(position)=>{
      this.$emit('scroll',position)
    })
    this.scroll.on('pullingUp',()=>{
      this.$emit('pullingUp')
    })

    this.scroll.scrollTo(0,0);
  },
  methods:{
    finishPullup(){
      this.scroll.finishPullUp()
    }
  }
}
</script>

<style scoped>

</style>