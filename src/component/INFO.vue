<template>
  <div class="infoBox">
    <el-page-header @back="goBack" content="详情页面"></el-page-header>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>{{info.name}}的详情页面</span>
        <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
      </div>
      <div class="text item">姓名：{{info.name}}</div>
      <div class="text item">加入时间：{{info.addtime}}</div>
      <div class="text item">联系方式：{{info.phone}}</div>
      <div class="text item">邮箱：{{info.email}}</div>
      <div class="text item">年龄：{{info.age}}</div>
      <div class="text item">学历：{{info.education}}</div>
      <div class="text item">学位：{{info.bachelor}}</div>
      <div class="text item">毕业学校：{{info.graduationschool}}</div>
      <div class="text item">个人简介：{{info.description}}</div>
    </el-card>
  </div>
</template>

<script>
export default {
    data () {
        return {
           id:this.$route.params.id ,
           info:[]
        }
    },
    created(){
        this.$http.get("http://localhost:3000/user/"+this.id).then(res => {
      console.log(res);
      console.log(this.id);
        this.info=res.body;
    });
    },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>
<style scoped>
.infoBox{
    margin-top: 60px;
}
.box-card {
  position: absolute;
  left: 50%;
  top: 20%;
  transform: translateX(-50%);
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 480px;
}
</style>