<template>
  <ul id="list">
    <li class="item">
      <input type="checkbox" ><span>打代码</span>
      <div id="buttonGroup">
        <button class="edit">编辑</button>
        <button class="delete">删除</button>
      </div>
    </li>


  </ul>

</template>

<script>
</script>


<style scoped lang="scss">
#list{
  display: flex;
  flex-direction: column;
  align-content: flex-start;

  overflow: scroll;
  padding: 0;

  width: 90%;
  height: 70%;
  margin: auto;
  border: 1px solid gray;
  border-radius: 3px;

}
.item{
  display: flex;

  width: 100%;
  height: 12%;
  align-items: center;
  transition: 200ms;


  border-bottom: 1px solid gray;
}
.item:hover{
  background-color: wheat;
}
.item input{
  margin-right: 10px;
}
li #buttonGroup{
  margin-left: auto;
  margin-right: 10px;
}
li button{
  margin-left: 6px;
  opacity: 0;
}
li:hover button:hover{
  opacity: 0.7;
}
li:hover button:active{
  opacity: 0.3;
}
li .edit{
  color: white;
  font-weight: bold;
  font-size: 10px;
  background-color: #9ad643;
  border: 1px solid transparent;
  border-radius: 2px;
}
li .delete{
  color: white;
  font-weight: bold;
  font-size: 10px;
  background-color: orangered;
  border: 1px solid transparent;
  border-radius: 2px;
}
li:hover button{
  opacity: 1;
}
</style>
