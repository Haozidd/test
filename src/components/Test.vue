<template>
  <div id="test">
    <button @click="getInfo1">获取学生信息</button>
    <button @click="getInfo2">获取学生信息</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "test",
  methods:{
    getInfo1(){
      axios.get('http://localhost:8080/proxy-1/students').then(
          response=>{
            console.log('请求成功',response)
          },
          error=>{
            console.log('请求失败1',error)
          }
      )
    },
    getInfo2(){
      axios.get('http://localhost:8080/proxy-2/cars').then(
          response=>{
            console.log('请求成功',response)
          },
          error=>{
            console.log('请求失败1',error)
          }
      )
    }
  }
}
</script>

<style scoped lang="scss">
#test{
  margin: auto;
  width: 100%;
  height: 5%;
  button{
    width: 100%;
    height: 100%;
  }
}
</style>