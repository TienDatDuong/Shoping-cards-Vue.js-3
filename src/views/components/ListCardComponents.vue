<template>
  <div class="title-main">
    <el-text class="mx-1 title-main-text" size="large" type="primary">Danh sách sản phẩm</el-text>
    <div>
      <el-row :gutter="20">
        <el-col :span="6"><CardsComponents/></el-col>
        <el-col :span="6"><CardsComponents/></el-col>
        <el-col :span="6"><CardsComponents/></el-col>
        <el-col :span="6"><CardsComponents/></el-col>
        <el-col :span="6"><CardsComponents/></el-col>
        <el-col :span="6"><CardsComponents/></el-col>
        <el-col :span="6"><CardsComponents/></el-col>
        <el-col :span="6"><CardsComponents/></el-col>
        <el-col :span="6"><CardsComponents/></el-col>
        <el-col :span="6"><CardsComponents/></el-col>
        <el-col :span="6"><CardsComponents/></el-col>
        <el-col :span="6"><CardsComponents/></el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import  CardsComponents from './CardsComponents.vue'
export default {
  components: {
    CardsComponents
  }
}
</script>
<style scoped>
.title-main {
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-top: 3%;
  margin: auto;
  width: 80%;
}
.title-main-text{
  font-size: 28px;
  padding-bottom: 1%;
}
</style>