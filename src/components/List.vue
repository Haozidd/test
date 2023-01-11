<template>
<!--  <transition>-->
    <ul id="list">
      <li class="item" v-for="todoObj in todos" :key="todoObj.id">
        <input
            type="checkbox"
            :checked="todoObj.done"
            @change="handleCheck(todoObj.id)"
        >
        <span v-show="!todoObj.isEdit">{{todoObj.title}}</span>
        <input v-show="todoObj.isEdit"
               type="text"
               :value="todoObj.title"
               @blur="handleBlur(todoObj.id,$event.target.value)"
               @keydown.enter="$event.target.blur()"
               :ref="todoObj.id"
        >
        <div class="buttonGroup">
          <button
              class="edit"
              @click="handleEdit(todoObj.id)"
          >编辑</button>
          <button class="delete" @click="handleDel(todoObj.id)">删除</button>
        </div>
      </li>

    </ul>
<!--  </transition>-->



</template>

<script>
import pubsub from "pubsub-js";
export default {
  name:'MyList',
  props:['todos','checkTodo'],
  methods:{
    handleCheck(id){
      this.checkTodo(id);
    },
    handleDel(id){
      if(confirm('confirm delete?')){
        this.$bus.$emit('checkDel',id)
        // pubsub.publish('checkDel',id)
      }
    },
    handleEdit(id){
      this.$emit('handleEdit',id)
      this.$nextTick(function(){
        this.$refs[id][0].focus()
      })
    },
    handleBlur(id,value){
      this.$emit('handleBlur',id,value)
    }
  }
}
</script>


<style scoped lang="scss">
#list{
  display: flex;
  flex-direction: column;
  align-content: flex-start;

  overflow: scroll;
  padding: 0;

  width: 90%;
  height: 60%;
  margin: 40px auto 0;
  border: 1px solid gray;
  border-radius: 3px;

}
.item{
  display: flex;
  padding-left: 5%;
  flex-shrink: 0;

  width: 100%;
  height: 12%;
  align-items: center;
  transition: 100ms;

  border-bottom: 1px solid gray;

  input{
    margin-right: 10px;
  }
  .buttonGroup{
    margin-left: auto;
    margin-right: 10px;


    button{
      transition:100ms;
      margin-left: 10px;
      opacity: 0;
      width: 50px;
      height: 30px;
      font-weight: bold;
      font-size: 15px;
      color: white;
      border-radius: 5px;
      border: 1px solid transparent;

    }
    .edit{
      background-color: #9ad643;
    }
    .delete{
      background-color: orangered;
    }
  }
  &:hover{
    background-color: wheat;
    button{
      opacity: 1;
      &:hover{
        opacity: 0.7;
      }
      &:active{
        opacity: 0.3;
      }
    }
  }
}



</style>
