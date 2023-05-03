<template>
  <div>
    <header>
      <TheHeader @openDrawer='openDrawer' :countListProduct="countListProduct"/>
    </header>
    <main>
      <ListCardComponents @exportItem="listProduct"/>
    </main>
  </div>
  <div>
    <ElDrawerComponent ref="refDrawer">
      <section>
        <CardTable :data="data" @deleteProduct="deleteProduct" @decrementProduct="decrementProduct"
                   @incrementProduct="incrementProduct"/>
      </section>

    </ElDrawerComponent>
  </div>
</template>

<script setup>
import {TheHeader, ListCardComponents} from './views'
import CardTable from './component/CardTableContent/CardTable.vue'
import ElDrawerComponent from '@/component/ElDrawer/ElDrawerComponent.vue'
import {ElMessage, ElMessageBox} from 'element-plus'
import {ref} from "vue";

const data = ref([])
const refDrawer = ref([])
const countListProduct = ref(0)

const openDrawer = () => {
  refDrawer.value.openDrawer()
}

const incrementProduct = (row) => {
  const result = data.value.filter(item => item.id === row.id)
  if (row.quantityInStock > 0) {
    result[0].count++
    result[0].quantityInStock--
    const index = data.value.findIndex(item => item.id === row.id)
    data.value.splice(index, 1, result[0])
  }else {
    alert('Số lượng sản phẩm trong kho đã hết')
    return
  }
}

  const decrementProduct = (row) => {
    const result = data.value.filter(item => item.id === row.id)
    if (result[0].count > 1) {
      result[0].count--
      result[0].quantityInStock++
      const index = data.value.findIndex(item => item.id === row.id)
      data.value.splice(index, 1, result[0])
    } else {
      ElMessageBox.confirm(
          'Bạn có chắc chắn muốn xoá?',
          'Thông báo',
          {
            confirmButtonText: 'Đồng ý',
            cancelButtonText: 'Không',
            type: 'warning',
          }
      )
          .then(() => {
            deleteProduct(row)
            row.quantityInStock++
            ElMessage({
              type: 'success',
              message: 'Xoá thành Công',
            })
          })
          .catch(() => {
            ElMessage({
              type: 'info',
              message: 'Đã huỷ',
            })
          })
    }
  }

  const deleteProduct = (row) => {
    const index = data.value.findIndex(item => item.id === row.id)
    data.value.splice(index, 1)
  }

  const countProduct = (product) => {
    if (product.quantityInStock > 0) {
      product.count++
      product.quantityInStock--
      data.value = [...data.value, product]
      countListProduct.value = data.value.length
    } else {
      alert('san phẩm hiện tại đã hết vui lòng chọn sản phẩm khác')
      return
    }
  }

  const listProduct = (product) => {
    if (data.value.length) {
      if (data.value.includes(product)) {
        if (product.quantityInStock > 0) {
          product.count++
          product.quantityInStock--
        } else {
          alert('san phẩm hiện tại đã hết vui lòng chọn sản phẩm khác')
          return
        }
      } else {
        countProduct(product)
      }
    } else {
      countProduct(product)
    }
  }


</script>

<style>
* {
  padding: 0;
  margin: 0;
}
</style>
