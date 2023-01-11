<template>
    <input type="text" placeholder="input your mission" autofocus @keyup.enter="add" v-model="title">
</template>


<script>
import {nanoid} from 'nanoid'
export default {
  name:'MyHeader',
  // props:['addTodo'],
  data(){
    return{
      title:''
    }
  },
  methods:{
    add(e){
      if (!this.title.trim()) return alert('content not allow NULL');
      const todoObj = {
        id:nanoid(),
        title:this.title,
        done:false
      }
      // this.addTodo(todoObj)
      this.$emit('addTodo',todoObj)
      this.title=''
    }

  }
}

</script>


<style scoped lang="scss">
input{
  padding: 0 5%;
  position: relative;
  top:3%;
  display: block;
  width: 90%;
  height: 10%;
  margin: 10px auto 20px;
  outline: none;
  border:{
    width: 1px;
    style:solid;
    color: gray;
    radius: 20px;
  };

  font-size: 100%;
  &:focus{
    box-shadow: 4px 4px 20px 2px skyblue;
    &::placeholder{
      opacity: 0.4;
    }
  }
  &::placeholder{
    text-align: center;
    transition: 300ms;
    font-size: 20px;
    opacity: 0.8;
  }
}

</style>
