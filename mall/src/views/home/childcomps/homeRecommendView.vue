<template>
  <div class="recommend">
    <div class="item" v-for="item in recommends">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "homeRecommendView",
  props:{
    recommends:{
      type:Array,
      default() {
        return [];
      }
    }
  }
}
</script>

<style scoped>
.recommend{
  display: flex;
  width: 100%;
  text-align: center;
  font-size: 12px;

  padding: 10px 0 20px;
  border-bottom: 8px solid #eee;
}
.item{
  flex: 1;
}
.item img{
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin-bottom: 10px;
}
</style>