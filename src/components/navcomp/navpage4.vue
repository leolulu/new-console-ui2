<template>
  <div>
    <el-table :data='tabledata' stripe border>
      <el-table-column prop="id" label="ID"></el-table-column>
      <el-table-column prop="op_time" label="操作时间"></el-table-column>
      <el-table-column prop="common_category" label="大类"></el-table-column>
      <el-table-column prop="detail_category" label="小类"></el-table-column>
      <el-table-column prop="pay_money" label="金额"></el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      tabledata: []
    };
  },
  methods: {
    get() {
      axios
        .get("http://127.0.0.1:3000/get-account")
        .then(res => {
          console.log(res.data);
          this.tabledata = res.data;
        })
        .catch(err => console.log(err));
    }
  },
  mounted() {
    this.get();
  }
};
</script>

<style scoped>
</style>