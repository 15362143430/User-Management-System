<template>
  <div class="appBox">
   <el-container>
     <el-header>用户管理系统</el-header>
     
      <router-view></router-view>
    
     
   </el-container>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      
    };
  },
  methods: {
    
  },
  watch:{
    
  }
};
</script>

<style scoped>
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
    width: 100%;
    position: fixed;
    z-index: 1000;
  }
  .el-footer{
    left: 0;
    bottom: 0;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>

