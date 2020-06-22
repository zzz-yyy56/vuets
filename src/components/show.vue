<template>
  <div>
    <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column
            prop="userId"
            label="编号"
            width="130">
          </el-table-column>
          <el-table-column
            prop="userName"
            label="姓名"
            width="130">
          </el-table-column>
          <el-table-column
            prop="userSex"
            label="性别"
            width="130">
          </el-table-column>
          <el-table-column
            prop="userAge"
            label="年龄"
            width="130">
          </el-table-column>
          <el-table-column
            prop="userBirthday"
            label="生日"
            width="130">
          </el-table-column>
          <el-table-column
            prop="userDepartment"
            label="工作部门"
            width="130">
          </el-table-column>
           <el-table-column
                fixed="right"
                label="操作"
                width="100">
                <template slot-scope="scope">
                  <el-button @click="handleClick(scope.row)" type="text" size="small">修改</el-button>
                  <el-button @click="handleClick2(scope.row)" type="text" size="small">删除</el-button>
                </template>
              </el-table-column>
        </el-table>
        <el-pagination

              @current-change="handleCurrentChange"
              :current-page.sync="currentPage1"

              layout="total, prev, pager, next"
              :total="totals">
            </el-pagination>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      totals: '',
      currentPage1: 1,
      tableData: ''
    }
  },

  methods: {
    handleClick (row) {
      this.$router.push({
        path: '/update',
        query: {
          id: row.userId
        }
      })
    },
    handleClick2 (row) {
      if (confirm('确定要删除吗?')) {
        axios.get('/del?id=' + row.userId + '').then(response => {
          alert(response.data)
          window.location.reload()
        })
      }
    },
    handleCurrentChange (val) {
      axios.get('/users?page=' + `${val}` + '').then(response => {
        this.tableData = response.data
      })
    }
  },
  created () {
    axios.get('/userCount').then(response => {
      this.totals = response.data
    })
    axios.get('/users?page=0').then(response => {
      this.tableData = response.data
    })
  }
}
</script>

<style>
</style>
