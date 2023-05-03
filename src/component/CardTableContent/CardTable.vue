<script setup>
import {defineProps, computed, defineEmits} from 'vue'
import {
  Delete,
  CaretTop,
  CaretBottom
} from '@element-plus/icons-vue'

const emit = defineEmits('deleteProduct', 'incrementproduct')

const props = defineProps({
  data:{
    type: Array,
  }
})

const onDelete = (row) => {
  emit('deleteProduct', row)
}
const increment = (row) => {
  emit('incrementProduct', row)
}
const decrement = (row) => {
  emit('decrementProduct', row)
}

const getSummaries = (param) => {
  const {columns, data} = param;
  const sums = [];
  columns.forEach((column, index) => {
    if (index === 0) {
      sums[index] = 'Tổng tiền';
      return;
    }
    const values = data.map(item => item[column.property]);
    if (column.property === 'thanhTien') {
        sums[index] = values.reduce((prev, curr) => {
          const value = Number(curr);
          if (!isNaN(value)) {
            return prev + curr;
          } else {
            return prev;
          }
        }, 0) + ' VNĐ' ;
    } else {
      return;
    }
  });
  return sums;
}
const computedValues = computed(() => {
  return props.data.map((item) => {
    return {
      ...item,
      thanhTien: item.count * item.price,
    };
  });
});
</script>

<template>
  <el-table :data="computedValues" style="width: 100%" show-summary :summary-method="getSummaries">
    <el-table-column type="index" label="STT" width="100"/>
    <el-table-column prop="name" label="Tên" width="120"/>
    <el-table-column prop="price" label="Giá" width="120"/>
    <el-table-column prop="quantityInStock" label="Số lượng trong kho" width="180"/>
    <el-table-column prop="count" label="Số lượng" width="160">
      <template #default="{row}">
        <div style="display: flex; align-items: center;">
          <el-button @click="decrement(row)" :icon="CaretBottom"/>
          <div style="margin: 0 10px;">{{ row.count }}</div>
          <el-button @click="increment(row)" :icon="CaretTop"/>
        </div>
      </template>
    </el-table-column>
    <el-table-column prop="thanhTien" label="Thành tiền" width="120">
      <template #default="{row}">
        <div style="margin: 0 10px;">{{ row.thanhTien }}</div>
      </template>
    </el-table-column>
    <el-table-column fixed="right" label="Operations" width="120">
      <template #default="{row}">
        <el-button type="primary" @click="onDelete(row)" :icon="Delete"/>
      </template>
    </el-table-column>
  </el-table>
</template>