<template>
  <el-image
      v-bind="$attrs"
      :fit="fit"
      :preview-src-list="previewList"
  >
    <template #error>
      <div class="error-style fill-height fill-width d-flex justify-center align-center fs-36">
        <i class="el-icon-picture-outline"/>
      </div>
    </template>
    <template #placeholder>
      <el-skeleton style="width: 240px" loading animated>
        <template #template>
          <el-skeleton-item variant="image" style="width: 240px; height: 240px;"/>
          <div style="padding: 14px;">
            <el-skeleton-item variant="p" style="width: 50%"/>
          </div>
        </template>
      </el-skeleton>
    </template>
  </el-image>
</template>
<script>
export default {
  props: {
    previewSrcList: {
      type: Array,
      default: () => []
    },
    fit: {
      type: String,
      default: 'fill'
    }
  },
  computed: {
    previewList() {
      if (this.previewSrcList?.length) return this.previewSrcList
      return [this.$attrs.src]
    }
  }
}
</script>
<style lang="scss" scoped>
::v-deep .error-style {
  aspect-ratio: 1/1;
  background: #f5f7fa;
  color: #909399;
}
</style>
