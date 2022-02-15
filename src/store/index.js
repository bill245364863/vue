import Vue from 'vue'
import Vuex from 'vuex'
import school from "@/store/school";
import student from "@/store/student"
Vue.use(Vuex)


const  store = new Vuex.Store({
    modules:{
        school,
        student
    }
})

export default  store

