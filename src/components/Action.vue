<template>
  <div>
    <Breadcrumb-item href="/add">
      <Button type="primary">添加图书</Button>
    </Breadcrumb-item>
    <Breadcrumb-item href="/delete">
      <Button type="primary">删除图书</Button>
    </Breadcrumb-item>
    <br><br>
    <router-view></router-view>

  </div>
</template>

<script>
export default {}
</script>

<style>

</style>
