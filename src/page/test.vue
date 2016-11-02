<template>
  <div>
    我是test
    <p>
      {{title}}
    </p>
    <!-- <router-link to="/foo">Go to Foo</router-link>
    <a href="//www.baidu.com">跳转百度</a>
    <mt-button @click.native="test1">点击toast</mt-button> -->
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { Toast, Indicator } from 'mint-ui'
import test from '../assets/lib/util.js'

//console.log(mapState);

$.ajax({
  url: 'https://sug.so.360.cn/suggest',
  dataType: 'jsonp',
  data: {
    word: 123
  }
}).done(function(res){
  console.log('res', res);
})

const Counter = {
  template: `<div>{{ count }}</div>`,
  computed: {
    count () {
      return store.state.count
    }
  }
}

export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  components: {
    Counter
  },
  data () {
    return {
      msg: '123'
    }
  },
  methods: {
    test1(){
      // alert(1);
      //Toast('点击了我');
      Indicator.open('加载中...');

      setTimeout(function(){
        Indicator.close();
      }, 2000)

    }
  }
}
</script>

<style>

</style>
