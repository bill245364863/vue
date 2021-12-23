<template>
  <div>
    <el-table
        :data="tableData"
        border
        height="350"
        style="width: 100%"
        ref="mytask">
      <el-table-column
          type="selection"
          width="55">
      </el-table-column>
      <el-table-column
          fixed
          prop="id"
          label="id"
          width="150">
      </el-table-column>
      <el-table-column
          fixed
          prop="title"
          label="标题"
          width="150">
      </el-table-column>
      <el-table-column
          fixed="right"
          label="操作"
          width="130">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row.id)" type="text" size="small"><span class="el-icon-delete" style="color: #67C23A"></span>删除</el-button>
          <el-button @click="handleClick(scope.row.id)" type="text" size="small"><span class="el-icon-check" style="color: #F56C6C"></span>完成</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "MyList",
  data(){
    return{
      tableData: [{
        id: 'hdjaksdhajk',
        title: '学代码',
        done: true
      },{
        id: 'hdjaksfgfdshajk',
        title: '学代码',
        done: false
      },{
        id: 'hdjaksdgfgfdhajk',
        title: '学代码',
        done: true
      },{
        id: 'hdjaksdfdfgfdhajk',
        title: '学代码',
        done: true
      },{
        id: 'hdjaksdfgfgdhajk',
        title: '学代码',
        done: true
      }]
    }
  },
  created() {
    this.$nextTick(() => {
      for (let i = 0; i < this.tableData.length; i++) {
        this.$refs.mytask.toggleRowSelection(this.tableData[i],this.tableData[i].done)
      }
    })
  },
  methods:{
    handleClick(a){
      console.log("@@@2222")
      console.log("@@@2222",a)
    }

  }
}
</script>

<style scoped>

</style>