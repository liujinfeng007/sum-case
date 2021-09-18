import axios from "axios";
import {nanoid} from "nanoid";

export default {
    namespaced: true,
    state: {
        personList: [
            {id: '001', name: 'zhangsan'}
        ]
    },
    actions: {
        AddWang(context, value) {
            if (value.name.indexOf('王') === 0) {
                context.commit('Add_Person', value)
            } else {
                alert('添加一个姓王的人！')
            }
        },
        addPersonServer(context){
            axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(res=>{
                context.commit('Add_Person',{id:nanoid(),name:res.data})
            }).catch(
                err=>{
                    console.log(err.message)
                }
            )

        }
    },
    mutations: {
        Add_Person(state, value) {
            state.personList.push(value)
        },
    },
    getters: {
        firstPersonName(state) {
            return state.personList[0].name
        }

    }
}