<template>
  <ul id="list">
    <li class="item">
      <input type="checkbox" ><span>打代码</span>
      <div class="buttonGroup">
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
  padding-left: 5%;
  flex-shrink: 0;

  width: 100%;
  height: 12%;
  align-items: center;
  transition: 200ms;

  border-bottom: 1px solid gray;

  input{
    margin-right: 10px;
  }
  .buttonGroup{
    margin-left: auto;
    margin-right: 10px;

    button{
      margin-left: 10px;
      opacity: 1;
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
