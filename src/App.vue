<template>
  <div id="todoList">
    <Header :addTodo="addTodo" />
    <List :todos="todos" :checkTodo="checkTodo" :checkDel="checkDel"/>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'


export default {
  name: 'App',
  components: {
    Header,
    List,
    Footer
  },
  data(){
    return{
      todos:[
        {id:'001',title:'抽烟',done:true},
        {id:'002',title:'喝酒',done:false},
        {id:'003',title:'开车',done:true}
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
    }
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
  flex-flow: row wrap;


  position: relative;
  margin: auto;
  height: 80% ;
  width: 50%;
  //height: 700px;
  //width: 700px;
  border: 1px solid gray;
  border-radius: 10px;
  background-color: white;
}
#test{
  //align-self: flex-end;
}





</style>
