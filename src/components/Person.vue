<template>
<div>
  <h1 style="color: gold">{{sum}}</h1>
  <h1>列表中第一个人的名字是：{{firstPersonName}}</h1>
  <input placeholder="请输入姓名" v-model="name"/>
  <button @click="add">添加</button>
  <button @click="addWang">添加一个姓王的人</button>
  <button @click="addPersonServer">添加一个人,名字随机</button>
  <ul>
    <li v-for="p in personList" :key="p.id">{{p.name}}</li>
  </ul>
</div>
</template>

<script>
import {nanoid} from 'nanoid'
import {mapState} from 'vuex'
export default {
  name: "Person",
  data(){
    return{
      name:''
    }
  },
  computed:{
    ...mapState('countAbout',['sum']),
    ...mapState('personAbout',['personList']),
    firstPersonName(){
      return this.$store.getters['personAbout/firstPersonName']
    }
  },
  methods:{
    add(){
      const x = {id:nanoid(),name:this.name}
      this.$store.commit('personAbout/Add_Person',x)
      this.name=''
    },
    addWang(){
      const x = {id:nanoid(),name:this.name}
      this.$store.dispatch('personAbout/AddWang',x)
      this.name=''
    },
    addPersonServer(){
      this.$store.dispatch('personAbout/addPersonServer')
    }
  }

}
</script>

<style scoped>

</style>