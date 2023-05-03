<template>
  <el-card class="mb-20">
    <ElImageComponent
        :src="props.item.image"
        class="image"
    />
    <el-row>
      <div style="padding: 14px">
        <div class="info-product">
          <span style="margin-bottom: 5px">{{props.item.name}}</span>
          <span style="margin-bottom: 5px">{{props.item.price}}</span>
        </div>
        <div class="bottom">
          <el-row :gutter="40">
            <el-col :span="6">
              <el-button type="primary" class="button" @click="buyItem(props.item)">Mua</el-button>
            </el-col>
            <el-col :span="6">
              <el-button type="success" class="button">Xem chi tiết</el-button>
            </el-col>
          </el-row>
        </div>
      </div>
    </el-row>
  </el-card>
</template>
<script setup>
import ElImageComponent from '../../component/ElImages/indexImageComponents.vue'
import {defineProps, defineEmits} from 'vue'

const props = defineProps({
  item:{
    type: Object
  }
})
const emit = defineEmits('exportItem')
const buyItem = (item) => {
  emit('exportItem', item)
}
</script>
<style scoped>
.info-product {
  display: flex;
  flex-direction: column;
}

.image {
  width: 100%;
  display: inline-block;
}
</style>