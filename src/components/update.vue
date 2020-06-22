<template>
  <div>
   <h2>更新员工信息</h2>
   <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">

     <el-form-item label="员工编号" prop="userId" >
       <el-input v-model="ruleForm.userId" readOnly></el-input>
     </el-form-item>

     <el-form-item label="员工姓名" prop="userName">
       <el-input v-model="ruleForm.userName"></el-input>
     </el-form-item>

     <el-form-item label="员工性别" prop="userSex">
       <el-input v-model="ruleForm.userSex"></el-input>
     </el-form-item>

     <el-form-item label="年龄" prop="userAge">
       <el-input v-model="ruleForm.userAge"></el-input>
     </el-form-item>

     <el-form-item label="出生日期" required>
       <el-col :span="11">
         <el-form-item prop="userBirthday">
           <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.userBirthday" style="width: 100%;"></el-date-picker>
         </el-form-item>
       </el-col>
     </el-form-item>

     <el-form-item label="工作部门" prop="userDepartment">
       <el-input v-model="ruleForm.userDepartment"></el-input>
     </el-form-item>

     <el-form-item>
       <el-button type="primary" @click="submitForm('ruleForm')">立即更新</el-button>
       <el-button @click="resetForm('ruleForm')">重置</el-button>
     </el-form-item>
   </el-form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      ruleForm: {
        userId: '',
        userName: '',
        userSex: '',
        userAge: '',
        userBirthday: '',
        userDepartment: ''
      },
      rules: {
        userName: [
          { required: true, message: '请输入用户姓名', trigger: 'blur' }
        ],
        userSex: [
          { required: true, message: '请输入用户性别', trigger: 'change' }
        ],
        userBirthday: [
          { required: true, message: '请选择日期', trigger: 'change' }
        ],
        userAge: [
          { required: true, message: '请输入用户年龄', trigger: 'change' }
        ],
        userDepartment: [
          { required: true, message: '请填写工作部门', trigger: 'blur' }
        ]
      }

    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          axios.post('/update', this.ruleForm).then(response => {
            alert(response.data)
            this.$router.push('/show')
          })
          
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  },
  created () {
    var uid = this.$route.query.id
    axios.get('/getByUid?uid=' + uid + '').then(response => {
      this.ruleForm = response.data
    })
  }
}
</script>
<style>
</style>
