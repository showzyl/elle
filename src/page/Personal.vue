<template>
  <div class="personal">
    <commonNav title="个人资料" iconRight="" />
    
    <div class="personalHead">
      <div class="headImg">
        <img src="../assets/img/profile/touxiang.png" alt="" class="iconImg">
        <i class="iconRedPen"></i>
      </div>
    </div>

    <ul class="personalList">
      <li class="personItem">
        <a href="">
          <i class="iconUserName"></i>
          <span class="name">梨子o</span>
        </a>
      </li>
      <li class="personItem">
        <a href="">
          <i class="iconTel"></i>
          <span class="name">18511368463</span>
        </a>
      </li>
      <li class="personItem">
        <a href="">
          <i class="iconMail"></i>
          <span class="name">添加邮箱</span>
        </a>
      </li>
    </ul>


  

  </div>
</template>

<style scoped>
  .personal{
    /*margin: .8rem;*/

  }
  

  .personalHead{
    position: relative;
  }

  .personal .personalHead{
    /*padding: .2rem 0;
    border-bottom: 1px solid;*/
    height: 4rem;
    border-top: 1px solid;
  }

  .personalHead .headImg{
    width: 2.6rem;
    height: 2.6rem;
    border-radius: 50%;
    background-color: #fff;
    position: absolute;
    left: 50%;
    margin: .4rem 0 .4rem -1.3rem;
  }

  .personalHead .iconImg{
    border-radius: 50%;
  }

  .iconRedPen{
    position: absolute;
    bottom: 0;
    right: 0;
    display: inline-block;
    width: .8rem;
    height: .8rem;
    background-image: url(../assets/img/profile/headpen@3x.png);
    background-size: cover;
    width: .3rem;
    height: .3rem;
  }

  .personalList{
    border-bottom: 1px solid #d7d7d5;
  }

  .personItem{
    padding: .3rem .8rem;
    font-size: .4rem;
  }

  .iconUserName, .iconTel, .iconMail{
    display: inline-block;
    width: .6rem;
    height: .6rem;
    background-size: cover;
    vertical-align: middle;
  }

  .iconUserName{
    background-image: url(../assets/img/profile/name@3x.png);
  }

  .iconTel{
    background-image: url(../assets/img/profile/phone@3x.png);
  }

  .iconMail{
    background-image: url(../assets/img/profile/email@3x.png);
  }

  .personItem .name{
    margin-left: .8rem;
  }

</style>

<script>

  import commonNav from '../components/commonNav.vue'

  export default {
    name: 'personal',
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

