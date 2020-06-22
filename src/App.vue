<template>
  <div id="app">
    <div id="top">
      <p>牛逼的小章鱼真的牛逼</p>
    </div>
    <div id="left">
      <el-row class="tac">
        <el-col :span="16">
          <h5>牛逼的小张宇</h5>
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose">

            <el-menu-item index="1">
              <i class="el-icon-location"></i>
              <router-link to="/department" tag="span">部门管理</router-link>
            </el-menu-item>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>

              <router-link to="/show" tag="span">人员信息管理</router-link>
            </el-menu-item>
            <el-menu-item index="3" >
              <i class="el-icon-document"></i>
               <router-link to="/add" tag="span">添加人员信息</router-link>
            </el-menu-item>

          </el-menu>
        </el-col>
       </el-row>
    </div>
    <div id="body">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style>
  #top{
    margin-top: -15px;
    margin-left: -6px;
    width: 126%;
    height: 30px;
    background: url(assets/timg.jpg) no-repeat ;
    background-size: 20px;
    background-position: 20px 6px;
    background-color:black ;
  }
  #top>p{
    font-size: 14px;
    color: aliceblue;
    margin-left: 50px;
    padding-top: 5px;

  }
  #app{
    width: 1200px;
  }
  #left{
    float: left;
    width: 300px;
  }
  #body{
    float: left;
    width: 900px;
    margin-top: 50px;
  }

</style>
