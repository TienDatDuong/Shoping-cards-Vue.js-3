<template>
  <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      @select="handleSelect"
  >
    <el-menu-item index="1">Candel shop</el-menu-item>
    <el-sub-menu index="2">
      <template #title>Workspace</template>
      <el-menu-item index="2-1">item one</el-menu-item>
      <el-menu-item index="2-2">item two</el-menu-item>
      <el-menu-item index="2-3">item three</el-menu-item>
      <el-sub-menu index="2-4">
        <template #title>item four</template>
        <el-menu-item index="2-4-1">item one</el-menu-item>
        <el-menu-item index="2-4-2">item two</el-menu-item>
        <el-menu-item index="2-4-3">item three</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="3" disabled>Info</el-menu-item>
    <el-menu-item class="a" index="4">Orders</el-menu-item>
    <div class="del-autocomplete">
      <el-autocomplete
          v-model="state"
          :fetch-suggestions="querySearchAsync"
          placeholder="Please input"
          @select="handleSelect"
      />
      <el-badge :value="0" class="item">
        <el-button type="primary" class="buy">
          <el-icon><ShoppingCart /></el-icon>
        </el-button>
      </el-badge>
    </div>
  </el-menu>
</template>
<script setup>
import {ref, onMounted} from 'vue'
import { ShoppingCart } from '@element-plus/icons-vue'

const loadAll = () => {
  return [
    {value: 'vue', link: 'https://github.com/vuejs/vue'},
    {value: 'element', link: 'https://github.com/ElemeFE/element'},
    {value: 'cooking', link: 'https://github.com/ElemeFE/cooking'},
    {value: 'mint-ui', link: 'https://github.com/ElemeFE/mint-ui'},
    {value: 'vuex', link: 'https://github.com/vuejs/vuex'},
    {value: 'vue-router', link: 'https://github.com/vuejs/vue-router'},
    {value: 'babel', link: 'https://github.com/babel/babel'},
  ]
}
let timeout
const querySearchAsync = (queryString, cb) => {
  const results = queryString
      ? links.value.filter(createFilter(queryString))
      : links.value

  clearTimeout(timeout)
  timeout = setTimeout(() => {
    cb(results)
  }, 3000 * Math.random())
}
const createFilter = (queryString) => {
  return (restaurant) => {
    return (
        restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
    )
  }
}

const handleSelect = (item) => {
  console.log(item)
}

onMounted(() => {
  links.value = loadAll()
})
const links = ref([])

const state = ref('')

const activeIndex2 = ref('1')
</script>
<style scoped>
::v-deep .del-autocomplete {
  position: absolute;
  display: inline-block;
  right: 10px;
  top: 10px;
}
.buy{
  margin-left: 10px;
}
</style>