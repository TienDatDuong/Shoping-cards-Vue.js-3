<template>
  <el-drawer v-model="visible" :show-close="false" size="50%">
    <template #header="{ close, titleId, titleClass }">
      <h4 :id="titleId" :class="titleClass"> Danh sách sản phẩm</h4>
      <el-button type="text" @click="close">
        <el-icon class="el-icon--left">
          <CircleCloseFilled/>
        </el-icon>
      </el-button>
    </template>
    <slot></slot>
  </el-drawer>
</template>
<script setup>
import {ref, defineExpose} from 'vue'
import {ElButton, ElDrawer} from 'element-plus'
import {CircleCloseFilled} from '@element-plus/icons-vue'

const visible = ref(false)

const openDrawer = () => {
  visible.value = true
}

defineExpose({
  openDrawer
})
</script>