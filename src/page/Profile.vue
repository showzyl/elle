<template>

    <div class="profile">
      <!--<commonNav title="梨子" />-->
      <!--<recommend title="为您优选商品" />-->
      <div class="header">
        
      </div>
      <div class="profileTop">
        <div class="headImg">
          <img alt="">
        </div>
        <h3 class="userName">梨子o</h3>
      </div>

    </div>
</template>

<style media="screen" scoped>
  .profile{
    
  }
  .header{

  }
  .profileTop{
    background-image: url('../assets/img/profileBg1.jpg');
    height: 5.5rem;
    background-size: cover;
    overflow: hidden;
  }
  .headImg{
    width: 2.6rem;
    height: 2.6rem;
    border-radius: 50%;
    background-color: #fff;
    float: left;
    margin: 1.3rem .5rem;
  }
  .userName{
    float: left;
    margin-top: 2.3rem;
    font-size: .5rem;
  }
</style>

<script>
  import { mapState } from 'vuex'
  import commonNav from '../components/commonNav.vue'
  import recommend from '../components/recommend.vue'


  import { Toast, Indicator } from 'mint-ui'

  export default {
    props: {

    },
    created(){
      
    },
    components: {
      commonNav,
      recommend
    },
    data () {
      return {
        msg: 'profile',
        myform: {},
        model: {}
      }
    },
    methods: {
      onSubmit: function() {
        console.log(this.myform.$valid);
        if(this.myform.$valid==true)
            alert("提交成功");
      }
    }
  }
</script>


