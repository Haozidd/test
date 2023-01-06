<template>
    <input type="text" placeholder="input your mission" autofocus>
</template>


<script>

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
  border:1px solid gray{
  radius: 20px;
  };

  transition: 300ms;
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
