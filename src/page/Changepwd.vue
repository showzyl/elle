<template>
  <div class="changePwd">
    <commonNav title="修改密码" iconRight="" />

    <ul class="changeList">
      <li class="changeItem">
        <input type="text" placeholder="请输入旧密码" class="changeInput">
      </li>
      <li class="changeItem">
        <input type="text" placeholder="请输入新密码 6-16位字符密码" class="changeInput">
      </li>
      <li class="changeItem">
        <input type="text" placeholder="请确认新密码" class="changeInput">
      </li>
    </ul>

    <div class="btn btnChangePwd">
      √
    </div>

  </div>
</template>

<style scoped>
  .changeList{
    margin: 1.5rem .8rem .8rem;
  }

  .changeItem{
    padding: .2rem 0;
    border-bottom: 1px solid;
  }

  .changeInput{
    height: 1rem;
    line-height: 1rem;
    font-size: .45rem;
    width: 100%;
  }

  .btnChangePwd{
    position: fixed;
    bottom: 0;
  }

</style>

<script>

  import commonNav from '../components/commonNav.vue'

  export default {
    name: 'changepwd',
    data () {
      return {

      }
    },
    components: {
      commonNav
    },
    methods: {
      toggleMask(e){
        
      }
    }
  }
</script>

