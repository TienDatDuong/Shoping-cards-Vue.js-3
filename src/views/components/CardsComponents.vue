<template>
  <el-card :body-style="{ padding: '0px' }">
<!--    <img-->
<!--        src="urlImage"-->
<!--        class="image"-->
<!--    />-->
    <ElImageComponent
        :src="url"
        class="image"
    />
    <div style="padding: 14px">
      <div class="info-product">
        <span style="margin-bottom: 5px">PS 4</span>
        <span style="margin-bottom: 5px">3.6tr</span>
      </div>
      <div class="bottom">
        <el-row :gutter="20">
          <el-col :span="6">
            <el-button type="primary" class="button">Mua</el-button>
          </el-col>
          <el-col :span="6">
            <el-button type="success" class="button">Xem chi tiết</el-button>
          </el-col>
        </el-row>
      </div>
    </div>
  </el-card>
</template>
<script>
import ElImageComponent from './ElImageComponent.vue'

export default {
  components:{
    ElImageComponent
  },
  data(){
    return{
      url : 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png'
    }
  }
}
</script>
<style scoped>
.info-product {
  display: flex;
  flex-direction: column;
}

.image {
  width: 100%;
  display: block;
}
</style>