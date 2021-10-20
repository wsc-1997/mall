<template>
  <div class="backtop" >
    <img src="../../../assets/images/back-top.png" />
  </div>
</template>

<script>
export default {
  name: "backtop"
}
</script>

<style scoped>
.backtop{
  position: fixed;
  right: 10px;
  bottom: 55px;
}
.backtop img{
  width: 43px;
  height: 43px;
  border-radius: 50%;
  background-color: #fff;
}
</style>