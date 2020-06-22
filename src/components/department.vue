<template>
  <div>
    <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column
            prop="id"
            label="部门编号"
            width="400">
          </el-table-column>
          <el-table-column
            prop="name"
            label="部门名称"
            width="400">
          </el-table-column>
        </el-table>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'App',
  data () {
    return {
      tableData: [{
        id: '2016-05-02',
        name: '王小虎'
      }, {
        id: '2016-05-04',
        name: '王小虎'
      }, {
        id: '2016-05-01',
        name: '王小虎'
      }, {
        id: '2016-05-03',
        name: '王小虎'
      }]
    }
  },
  created () {
    axios.get('/departments').then(response => {
      this.tableData = response.data
    })
  }
}
</script>

<style>
</style>
