<template>
  <div>
    <table width="100%" cellspacing="1" cellpadding="4" bgcolor="#cccccc"  border="1">
      <tr >
<!--        <th><input type="checkbox" :checked ="allFinish" @change="checkAll"/></th>-->
<!--    一个输入类型的初始值要展示,以后还会修改,则可以直接使用v-model    -->
        <th><input type="checkbox" v-model="allFinish"/></th>
        <th>任务</th>
        <th>操作</th>
      </tr>
      <tr v-for="item in tableData" :key="item.id">
        <td width="10px">
          <input  type="checkbox" :checked="item.done" @click="handleCheck(item.id)"/>
        </td>
        <td>
          <input type="text" :ref="item.id"  v-model="item.title" v-show="item.isEdit"  @blur="handleBlur(item)"/>
         <span v-show="!item.isEdit"> {{item.title}}</span>
        </td>
        <td width="100px">
          <button v-show="!item.isEdit" @click="editTask(item,$event)">编辑</button>
          <button @click="handleDelete(item.id)">删除</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
let key = "TASK_LIST";
export default {
  name: "MyList",
  data(){
    return{
      tableData: []
    }
  },
  methods:{
    //失去焦点
    handleBlur(task){
      task.isEdit = false;
      //存储到缓存中
      localStorage.setItem(key,JSON.stringify(this.tableData))
    },
    //编辑任务
    editTask(task){
      //使用$set加入属性可以使得vue重新解析模板
      //判断是否在某个属性
      // eslint-disable-next-line no-prototype-builtins
      if (task.hasOwnProperty('isEdit')){
        task.isEdit = true;
      }else{
        this.$set(task,"isEdit",true)
      }
      this.$nextTick(function (){
        //通过 :ref =某变量 添加ref（即加了:号） ,如果想获取该ref时需要加 [0]，如this.$refs[refsArrayItem] [0]；
        // 如果不是:ref =某变量的方式而是 ref =某字符串时则不需要加，如this.$refs[refsArrayItem]。
        this.$refs[task.id][0].focus()
        // this.$refs[task.id].focus()
        // e.target.parentElement.parentElement.children[1].children[0].focus()
      })
      //直接在对象上加入属性不会造成vue解析模板
      // task.isEdit = true
    },
    //删除已经完成的任务
    deleteFinishTask(){
      this.tableData =  this.tableData.filter((task)=>{
        return !task.done
      })
      //再次把数据传输给footer
      //因为数组数据使用filter的时候不会使得vue重新解析模板
      this.$bus.$emit('taskToFooter',this.tableData)
    },
   /* checkAll(e){
      this.tableData.forEach((task)=> task.done = e.target.checked)
    },*/
    checkAll(done){
      this.tableData.forEach((task)=> task.done = done)
    },
    //新增任务
    addTask(task){
      this.tableData.unshift(task)
      //存储到缓存中
      localStorage.setItem(key,JSON.stringify(this.tableData))
    },
    //处理勾选
    handleCheck(id){
      //修改对应的done 取反
      this.tableData.forEach((task)=>{
        if (task.id === id) {
          task.done = !task.done
        }
      })
      //缓存
      localStorage.setItem(key,JSON.stringify(this.tableData))
    },
    //删除元素
    handleDelete(id){
      if(confirm('确定删除吗？')){
        this.tableData = this.tableData.filter((task)=>{
          return task.id !== id
        })
      }
      //缓存
      localStorage.setItem(key,JSON.stringify(this.tableData))
      //把数据传递给footer
      this.$bus.$emit('taskToFooter',this.tableData)
    }
  },
  mounted() {
    this.$bus.$on("addTask",this.addTask)
    //获取本地缓存  存在值才进行赋值
    if(localStorage.getItem(key)){
      this.tableData = JSON.parse(localStorage.getItem(key))
    }

    //把数据传递给footer
    this.$bus.$emit('taskToFooter',this.tableData)
  // 删除已完成的任务
    this.$bus.$on('deleteFinishTask',this.deleteFinishTask)
  },
  computed:{
    //判断是否全选 长度与选中一致的时候
   /* allFinish(){
      return this.tableData.length === this.tableData.reduce((pre,current)=> pre + (current.done ? 1:0),0) && this.tableData.length > 0
    }*/
    allFinish:{
      get(){
        return this.tableData.length === this.tableData.reduce((pre,current)=> pre + (current.done ? 1:0),0) && this.tableData.length > 0
      },
      set(value){
        //修改值 全选or反选
        this.checkAll(value)
        //缓存
        localStorage.setItem(key,JSON.stringify(this.tableData))
      }
    }
  },
  destroyed() {
    this.$bus.$off('addTask')
  }
}
</script>

<style scoped>

</style>