<template>
  <div class="goodsitem" @click="itemclick">
    <img class="img" :src="showimage" alt="">
    <div>
      <p>{{ goodsitem.title }}</p>
      <span class="price">{{ goodsitem.price }}</span>
      <div><span class="cfav"></span>{{ goodsitem.cfav }}</div>
    </div>
  </div>

</template>

<script>
export default {
  name: "goodsitem",
  props: {
    goodsitem: {
      type: Object,
      default() {
        return []
      }
    }
  },
  methods:{
    itemclick() {
      this.$router.push('/Detail/' + this.id)
    }
  },
  computed:{
    showimage(){
      return this.goodsitem.image || this.goodsitem.show.img
    },
    id(){
      return this.goodsitem.iid || this.goodsitem.item_id
    }
  }
}
</script>

<style scoped>
.goodsitem {
  width: 49%;
  height: auto;
  padding-top: 6px;
  font-size: 14px;
}
.img {
  width: 100%;
  height: auto;
  border-radius: 4px;
}

.price {
  display: flex;
  justify-content: space-between;
  color: var(--color-text);
  margin: 6px 0;
}

.cfav {
  display: inline-block;
  width: 20px;
  height: 20px;
  background: url(~assets/images/home/collect_icon.png) no-repeat;
  background-size: cover;
  vertical-align: bottom;
}



</style>