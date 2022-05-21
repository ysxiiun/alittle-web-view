<template>
  <div class="xhx" style="position: relative;">
    <div id="content" class="content_size flex_bt">
      <!--    图标-->
      <div style="margin-left: 10px">
        <p style="font-size: medium">ALittleShare</p>
      </div>

      <!--    菜单-->
      <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          active-text-color="#000000"
          text-color="#000000"
          :ellipsis="false"
          style="width: auto;border: None; justify-content: flex-end; align-items: center"
      >
        <el-menu-item index="1">主页</el-menu-item>
        <el-sub-menu index="2">
          <template #title>效率工具</template>
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
        <el-menu-item index="3">关于</el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  name: "TitleMenu",
  data() {
    return {
      activeIndex: '1',
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    }
  },
}
</script>

<style scoped>

</style>