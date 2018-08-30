<template>
    <div>
        <el-form :model="form" label-width='50px'>
            <el-form-item label="日期">
                <el-date-picker value-format="yyyy-MM-dd" format="yyyy年M月d日" type="date" placeholder="选择日期" v-model="form.date"></el-date-picker>
            </el-form-item>
            <el-form-item label="大类">
                <el-input v-model="form.bigc"></el-input>
            </el-form-item>
            <el-form-item label="小类">
                <el-input v-model="form.smallc"></el-input>
            </el-form-item>
            <el-form-item label="金额">
                <el-input v-model="form.money"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="post">立即创建</el-button>
            </el-form-item>
        </el-form>
        <el-tag type="warning">{{form}}</el-tag>
    </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      form: {
        date: "",
        bigc: "",
        smallc: "",
        money: ""
      }
    };
  },
  methods: {
    post() {
      axios
        .post("http://127.0.0.1:3000/insert-account", this.form)
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }
  }
};
</script>

<style scoped>
</style>