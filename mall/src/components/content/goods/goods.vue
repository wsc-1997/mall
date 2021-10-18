<template>
  <div class="goods">
    <goodsitem v-for="item in goods" :goodsitem="item"></goodsitem>
  </div>
</template>

<script>
import goodsitem from "@/components/content/goods/goodsitem";
export default {
  name: "goods",
  components:{
    goodsitem
  },
  props:{
    goods:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
.goods {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 0 6px;
}
</style>