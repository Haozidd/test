<template>

  <div id="todoList">
      <button @click="isShow= !isShow">点击显示/隐藏</button>
    <transition-group appear>
      <Header v-show="isShow" @addTodo="addTodo" key="1"/>
      <List v-show="isShow" key="2" :todos="todos" :checkTodo="checkTodo" @handleEdit="handleEdit" @handleBlur="handleBlur" />
      <Footer v-show="isShow" key="3" :todos="todos" :checkAll="checkAll" @triggerEmit="triggerEmit" />
    </transition-group>
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
  >button{
    width: 90%;
    height: 5%;
    margin: 0 auto;
    flex-shrink: 0;
  }
  >span{
    position: relative;
    width: 100%;
    height: 90%;
  }
}
.v-enter-active{
  animation: testAnimation-in 200ms;
}
.v-leave-active{
  animation: testAnimation-out 200ms;
}
@keyframes testAnimation-in {
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
}
@keyframes testAnimation-out {
  from{
    opacity: 1;
  }
  to{
    opacity: 0;
  }
}










</style>
