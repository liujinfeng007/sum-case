<template>
  <div id="app">
    <Count :log="logXXX"></Count>
    <hr/>
    <Person></Person>
  </div>
</template>

<script>
import Count from "@/components/Count";
import Person from "@/components/Person";
export default {
  name: 'App',
  data(){
    return{
      xxx:1
    }
  },
  components: {
    Count,
    Person
  },
  methods:{
    logXXX(value){
      console.log(this)
      console.log("xxx###",this.xxx)
      console.log("value@@@",value)
    }
  }
}
</script>

<style>

</style>
