<template>
  <div>
    <h2 @click="test">学生姓名：{{name}}</h2>
    <h1 ref="hello"></h1>

  </div>
</template>


<script>

export default {
  data(){
    return {
      name:'ls',
    }
  },
  methods:{
    test(){
      this.hello()
    }
  },
}

</script>


<style>

</style>
