<template>
  <div class="log_Box">
    <div class="form">
      <h2>Please login</h2>
      <input ref="account" type="text" placeholder="请输入账号" required />
      <input ref="password" type="password" placeholder="请输入密码" required  class="pass"/>
      <button @click="login()">登陆</button>
    </div>
  </div>
</template>

<script>
const config = {
  binjiang: {
    password: '123',
    title: '上海滨江花园公园数据大屏'
  },
    pujiang: {
    password: '123',
    title: '上海浦江郊野公园数据大屏'
  },
};
export default {
  name: "Login",
  data() {
    return {
      accountTitle: [
        {
          'binjiang':'上海滨江花园公园数据大屏'
        },
        {
          'pujiang':'上海浦江郊野公园数据大屏'
        }
      ]
    };
  },
  methods:{
    login(){
      let account = this.$refs.account.value
      let password = this.$refs.password.value
      const info = config[account];
      if (!info) return  alert('用户名或密码错误...');
      if (password !== info.password) return  alert('用户名或密码错误...');
      localStorage.setItem("userData",JSON.stringify(info));
      this.$router.push({
        name: 'Board',
        params: {
          title: info.title
        }
      });
    }
  }
};
</script>
<style scoped>
body{
  background-color: #2d6d3f;
}
.log_Box {
  margin-top: 210px;
  margin-bottom: 80px;
  background-color: #2d6d3f;
}
.form{
  max-width: 380px;
  margin: 0 auto;
  padding: 15px 35px 45px;
  background-color: #eeeeee;
  box-shadow: 12px 12px 7px rgba(0, 0, 0, 0.7);
  border-radius: 10px;
}
.form h2{
  line-height: 50px;
  color: aqua;
}
.log_Box input {
  display: block;
  margin-left: 30px;
  border: 1px solid #cccccc;
  border-radius: 8px;
  /* outline: none; */
  vertical-align: middle;
  width: 308px;
  padding: 10px;
}
.pass{
  margin-top: 10px;
}
button{
  margin-top: 20px;
  display: block;
  width: 100%;
  height: 45px;
  background-color: #428bca;
  border-color:#357ebd;
  color: #ffffff;
  border-radius: 6px;
  outline: none;
}
</style>
