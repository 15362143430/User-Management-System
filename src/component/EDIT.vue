<template>
  <div class="editBox">
    <el-page-header @back="goBack" content="编辑页面"></el-page-header>
    <el-form ref="form" :model="Message" label-width="80px">
      <el-form-item label="姓名">
        <el-input v-model="Message.name"></el-input>
      </el-form-item>
      <el-form-item label="联系方式">
        <el-input type="number" v-model="Message.phone"></el-input>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input v-model="Message.email"></el-input>
      </el-form-item>
      <el-form-item label="年龄">
        <el-input v-model="Message.age"></el-input>
      </el-form-item>
      <el-form-item label="学历">
        <el-select v-model="Message.education" placeholder="请选择您的学历">
          <el-option label="本科" value="本科"></el-option>
          <el-option label="专科" value="专科"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="毕业学校">
        <el-input v-model="Message.graduationschool"></el-input>
      </el-form-item>
      <el-form-item label="学位">
        <el-select v-model="Message.bachelor" placeholder="请选择您的学位">
          <el-option label="学士" value="学士"></el-option>
          <el-option label="硕士" value="硕士"></el-option>
          <el-option label="博士" value="博士"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="自我介绍">
        <el-input type="textarea" v-model="Message.description"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">编辑完成</el-button>
      </el-form-item>
      <el-dialog
        class="tishi"
        title="提示"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose"
      >
        <span>确定要修改信息吗？</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="toHome">确 定</el-button>
        </span>
      </el-dialog>
    </el-form>
  </div>
</template>


<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      Message: [],
      dialogVisible: false
    };
  },
  created() {
    this.$http.get("http://localhost:3000/user/" + this.id).then(res => {
      console.log(res);
      console.log(this.id);
      this.Message = res.body;
    });
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    open() {
      this.$message("请输入必要的信息：姓名，联系方式，邮箱");
    },
     close() {
      this.$message("已修改成功!!!!!!!!!");
    },
    onSubmit() {
      if (!this.Message.name || !this.Message.phone || !this.Message.email) {
        this.open();
      } else {
        this.dialogVisible = true;
      }
    },
    toHome() {
      this.$http
        .put("http://localhost:3000/user/" + this.id, this.Message)
        .then(res => {
          this.Message = res.body;
          this.dialogVisible = false;
          this.close();
        });
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    }
  }
};
</script>

<style scoped>
.editBox {
  margin-top: 60px;
}
</style>