<template>
	<!--<div>用户管理页</div>-->
  <div class="mainWrap">
    <div class="mainTop">
      <button>新增</button>
      <button>删除</button>
      <button>启用</button>
      <button>停用</button>
      <button>配置接入参数</button>
    </div>
    
    <div class="mainBotton">
      <div>
        <span>用户名：</span>
        <input>
      </div>
      <div>
        <span>用户全称：</span>
        <input>
      </div>
      <div>
        <span>扩展号</span>
        <input>
      </div>
      <div>
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="用户名" name="first">用户管理</el-tab-pane>
          <el-tab-pane label="用户类型" name="second">配置管理</el-tab-pane>
          <el-tab-pane label="业务类型" name="third">角色管理</el-tab-pane>
          <el-tab-pane label="接口类型" name="fourth">定时任务补偿</el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeName: 'second'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>

<style scoped>

</style>
