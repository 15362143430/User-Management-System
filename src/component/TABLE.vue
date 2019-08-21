<template>
  <div class="tableBox">
    <el-button class="moren" type="primary" @click="add">添加成员</el-button>
    <el-table :data="tableData" height="600" border style="width: 100%">
      <el-table-column prop="addtime" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="phone" label="联系方式" width="250"></el-table-column>
      <el-table-column prop="email" label="邮箱" width="250"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" @click="xiangqing(scope.row.id)">详情</el-button>
          <el-button size="mini" @click="bianji(scope.row.id)">编辑</el-button>
          <el-button size="mini" type="danger" @click="del(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: []
    };
  },
  created() {
    this.$http.get("http://localhost:3000/user").then(res => {
      console.log(res);
      this.tableData = res.body;
    });
  },
  methods: {
    add() {
      this.$router.push({ path: "/add" });
    },
    xiangqing(id) {
      console.log(id);
      this.$router.push({ path: "/info/" + id, params: { id: id } });
    },
    bianji(id) {
      this.$router.push({ path: "/edit/" + id, params: { id: id } });
    },
    del(id) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$http.delete("http://localhost:3000/user/" + id).then(res => {
        this.$http.get("http://localhost:3000/user").then(res => {
          console.log(res);
          this.tableData = res.body;
        });
      });
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    del2(id){
       this.$http.delete("http://localhost:3000/user/" + id).then(res => {
        this.$http.get("http://localhost:3000/user").then(res => {
          console.log(res);
          this.tableData = res.body;
        });
      });
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

.tableBox {
  margin-top: 60px;
  width: 100%;
}
.moren {
  margin-right: 85%;
}
</style>