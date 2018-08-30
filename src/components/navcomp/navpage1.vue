<template>
  <div>
    <el-button type="primary" @click="get">主要按钮</el-button>
    <el-table :data='tabledata' stripe border>
      <el-table-column prop="id" label="ID"></el-table-column>
      <el-table-column prop="name" label="名称"></el-table-column>
      <el-table-column prop="url" label="网址"></el-table-column>
      <el-table-column prop="alexa" label="alexa"></el-table-column>
      <el-table-column prop="country" label="国家"></el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  methods: {
    get() {
      axios
        .get("http://127.0.0.1:3000/user")
        .then(res => (this.tabledata = res.data))
        .catch(err => this.notishow(err));
    },
    notishow(content) {
      this.$notify.error({
        title: "数据库取数据出错了",
        message: content,
        duration: 5000,
        showClose: false
      });
    }
  },
  data() {
    return {
      tabledata: []
    };
  }
};
</script>

<style scoped>
</style>