<template>
  <div>
    <h1>当前求和为：{{ sum }}</h1>
    <h2>放大10倍后为：{{ bigSum }}</h2>
    <h3>我在{{ school }}学习{{ object }}</h3>
    <h1 style="color: gold">总人数：{{personList.length}}</h1>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">奇数再加</button>
    <button @click="incrementWait(n)">等等再加</button>
  </div>
</template>

<script>
import {mapState, mapGetters,mapMutations,mapActions} from 'vuex'

export default {
  name: "Count",
  data() {
    return {
      n: 1
    }
  },
  props:["log"],
  computed: {
    // 程序员亲自写计算属性
    /*sum(){
      return this.$store.state.sum
    },
    school(){
      return this.$store.state.school
    },
    object(){
      return this.$store.state.object
    },
    bigSum(){
      return this.$store.getters.bigSum
    }*/

    // 利用mapState映射```state```中的数据为计算属性 对象写法
    // ...mapState({sum:'sum',school:'school',object:'object'})

    // 利用mapState映射```state```中的数据为计算属性 数组写法
    ...mapState('countAbout',['sum', 'school', 'object']),
    ...mapState('personAbout',['personList']),

    // 利用mapGetters映射```getters```中的数据为计算属性 对象写法
    ...mapGetters('countAbout',{bigSum: 'bigSum'}),

    // 利用mapGetters映射```getters```中的数据为计算属性 数组写法
    // ...mapGetters(['bigSum'])


  },

  methods: {
    // 程序员手写方法
    /*increment() {
      this.$store.commit('INCREAMENT', this.n)
    },
    decrement() {
      this.$store.commit('DECREAMENT', this.n)
    },
    incrementOdd() {
      this.$store.dispatch('incrementOdd', this.n)
    },
    incrementWait() {
      this.$store.dispatch('incrementWait', this.n)
    },*/
    ...mapMutations('countAbout',{increment:"INCREAMENT",decrement:'DECREAMENT'}),
    /*increment(value) {
      this.$store.commit('INCREAMENT', value)
    },*/
    // ...mapActions({incrementOdd:'incrementOdd',incrementWait:'incrementWait'})
    ...mapActions('countAbout',['incrementOdd','incrementWait'])
  },
  mounted() {
    console.log("Count",this)
    this.log(this.n)
  }
}
</script>

<style scoped>
button {
  margin-right: 5px;
}
</style>