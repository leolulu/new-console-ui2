<template>
    <div>
        <el-form :model="form" label-width="80px" label-position='right' class="theform">
            <el-form-item label="ID">
                <el-input v-model="form.id"></el-input>
            </el-form-item>
            <el-form-item label="NAME">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="post">立即创建</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      form: {
        id: "",
        name: ""
      }
    };
  },
  methods: {
    post() {
      axios
        .post("http://127.0.0.1:3000/userpost", this.form)
        .then(res => {
          this.notishow(res.data)
          console.log(res)
          })
        .catch(err => console.log(err));
    },
    notishow(content) {
      this.$notify.info({
        title: "提示",
        message: content,
        duration: 5000,
        showClose: false
      });
    }
  }
};
</script>

<style scoped lang='scss'>
.theform {
  width: 50%;
  min-width: 500px;
}
</style>