import {nanoid} from "nanoid";

export default {
    namespaced:true,
    actions:{
        addFilterStudent(context,value){
            let result = context.state.persons.reduce((pre,current)=>{
              return pre + (current.name === value?1:0)
            },0)
            if (result) {
                alert("学生已经存在")
            }else{
                context.commit('ADD_STUDENT', {id:nanoid(),name:value})
            }
        },
        addHuangStudent(context,value){

            if (value.name.indexOf("黄") === 0) {
                context.commit('ADD_HUANG_STUDENT',value)
            }else{
                alert("Add student surnamed Huang")
            }
        }
    },
    mutations:{
        //添加学生
        ADD_STUDENT(state,value){
            state.persons.unshift(value)
        },
        //添加黄姓学生
        ADD_HUANG_STUDENT(state,value){
            state.persons.unshift(value)
        }
    },
    state:{
        persons:[
            {
                id:'001',
                name:'张起灵'
            }
        ]
    },
    getters:{

    }
}