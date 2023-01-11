<template>

  <div id="todoList">
      <button @click="isShow= !isShow">点击显示/隐藏</button>
      <Header v-show="isShow" @addTodo="addTodo"/>
      <List v-show="isShow" :todos="todos" :checkTodo="checkTodo" @handleEdit="handleEdit" @handleBlur="handleBlur" />
      <Footer v-show="isShow" :todos="todos" :checkAll="checkAll" @triggerEmit="triggerEmit" />
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import {nanoid} from "nanoid";


export default {
  name: 'App',
  components: {
    Header,
    List,
    Footer
  },
  data(){
    return{
      isShow:true,
      todos:[
        {id:nanoid(),title:'1',done:false},
        {id:nanoid(),title:'2',done:false},
        {id:nanoid(),title:'3',done:false},
        {id:nanoid(),title:'4',done:false},
      ]
    }
  },
  methods:{
    addTodo(todoObj){
      this.todos.unshift(todoObj)
    },
    checkTodo(id){
      this.todos.forEach((todo)=>{
          if (todo.id === id) todo.done =!todo.done
      })
    },
    checkDel(id){
      this.todos = this.todos.filter(todo => todo.id !== id)
    },
    checkAll(checked){
      if (checked ===true){
        this.todos.forEach(todo=>todo.done=true)
      }else {
        this.todos.forEach(todo=>todo.done=false)
      }
    },
    triggerEmit(total,total2) {
      console.log('trigger',total,total2)
    },
    handleEdit(id){
      this.todos.forEach(todo=>{
        if (todo.id===id){
          if (todo.hasOwnProperty('isEdit')){
            todo.isEdit=true;
          }else {
            this.$set(todo,'isEdit',true)
          }

        }
      })
    },
    handleBlur(id,value){
        this.todos.forEach(todo=>{
          if (todo.id===id){
          todo.isEdit = false
          todo.title=value
          }
        })
    }
  },
  mounted() {
    this.$bus.$on('checkDel',this.checkDel)
    // this.pid=pubsub.subscribe('checkDel',this.checkDel)
  },
  beforeDestroy() {
    this.$bus.$off('checkDel')
    // pubsub.unsubscribe(this.pid)

  }
}
</script >

<style lang="scss">
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html{
  width: 100%;
  height: 100%;
}
body{
  position: relative;
  width: 90%;
  height: 100%;
  margin: auto;
  background-color: #73e58b ;
  display: flex;
  align-items: center;
}
#todoList{
  display: flex;
  flex-flow: column wrap;



  position: relative;
  margin: auto;
  height: 80% ;
  width: 50%;
  //height: 700px;
  //width: 700px;
  border: 1px solid gray;
  border-radius: 10px;
  background-color: white;
  button{
    width: 100%;
    height: 5%;
    flex-shrink: 0;
  }

}










</style>
