<template>
  <div class="title-main">
    <el-text class="mx-1 title-main-text" size="large" type="primary">Danh sách sản phẩm</el-text>
    <div>
      <el-row :gutter="20">
        <el-col :span="6" v-for="(item,idx) in listData" :key="idx">
          <CardsComponents :listData="listData" :item="item" @exportItem="exportItem"/>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script setup>
import  CardsComponents from './CardsComponents.vue'
import {productList} from './DataProducts'
import {ref, defineEmits} from "vue";

const emit = defineEmits(['exportItem'])

const listData = ref([])
listData.value = [...productList]

const exportItem = (product) => {
  emit('exportItem', product)
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