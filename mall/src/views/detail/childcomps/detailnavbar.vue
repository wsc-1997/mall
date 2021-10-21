<template>
  <nav-bar>
    <div slot="left" class="left" @click="backclick">
      <img src="src/assets/images/fanhui.png">
    </div>
    <div slot="center" class="title">
      <div v-for="(item, index) in title"
           class="item"
           :class="{active:currentIndex === index }"
           @click="titleclick(index)">
        {{item}}
      </div>
    </div>
    <div slot="right" class="right"></div>
  </nav-bar>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
export default {
  name: "detailnavbar",
  components: {
    NavBar
  },
  data(){
    return{
      title:['商品','参数','评论','推荐'],
      currentIndex: 0
    }
  },
  methods:{
    titleclick(index){
      this.currentIndex = index
      // this.$emit('titleclick',index)
    },
    backclick() {
      this.$router.back()
    }
  }
}
</script>

<style scoped>
.left{
  background-color: red;
}
.title{
  display: flex;
  font-size: 13px;
}
.item{
  flex: 1;
}
.right{
  background-color: red;
}
.active{
  color: var(--color-text);
}
</style>