<template>
    <div>
        <el-button type="primary" @click="get">主要按钮</el-button>
        <el-table :data='userData' stripe border>
            <el-table-column prop="id" label="ID"></el-table-column>
            <el-table-column prop="name" label="名称"></el-table-column>
        </el-table>
    </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      userData: []
    };
  },
  methods: {
    get() {
      axios
        .get("http://127.0.0.1:3000/userget")
        .then(res => (this.userData = res.data))
        .catch(err => console.log(err));
    }
  }
};
</script>

<style scoped>
</style>