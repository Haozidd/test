<template>
  <div id="footer">
<!--    <input type="checkbox" @change="handleAll">-->
    <input type="checkbox" v-model="isAll">
    <span> 已完成 {{doneTotal}} / 全部 {{todos.length}} </span>
<!--    <button @click="triggerEmit">你好大笨蛋11111 </button>-->
  </div>


</template>


<script>
  export default {
    name:'MyFooter',
    props:['todos','checkAll'],
    computed:{
      total(){
        return this.todos.length
      },
      doneTotal(){
        // return this.todos.filter(todo=>todo.done === true).length
        return this.todos.reduce( (pre,todo) => pre+(todo.done?1:0) , 0 )
      },
      isAll:{
        get(){
          return this.total === this.doneTotal && this.total>0
        },
        set(value){
          this.checkAll(value)
        }
      }
    },
    methods:{
      triggerEmit(){
        this.$emit('triggerEmit',this.total,this.doneTotal)
      }
    }
  }
</script>


<style scoped lang="scss">
  #footer{
    width: 90%;
    height: 10%;
    display: flex;
    margin: 5px auto 0;
    align-items: center;
    padding-left: 5%;
  }
  input{
    margin-right: 10px;
  }

</style>
