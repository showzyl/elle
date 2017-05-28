<template>

<div class="imgTxtList"></div>

</template>

<style media="screen" lang="scss" scoped>
  .imgTxtList{
    padding: 15px;
    line-height: 175%;
  }
</style>

<script lang="babel">

  import { Toast, Indicator } from 'mint-ui'
	import util from '../../assets/lib/q.util.js'

  export default {
    data(){
      return {
      }
    },
    created(){
      const me = this;

      Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      });

      me.fetchData({}, res => {
        res.image_text = util.unescapeHTML(res.image_text);
        util.getEl('.imgTxtList').innerHTML = res.image_text;
        //me.image_text = res.image_text;
      });

    },
    components: {

    },
    computed: {

    },
    methods: {
      fetchData(data, cb){
        const me = this;
				let { media_id } = me.$route.query;
        // route=mapi/media&media_id=32
        this.$http.jsonp(
          // window.q.interfaceHost +'index.php?',
          'http://106.75.17.211:6603/index.php?',
          {
            params: {
							route: 'mapi/media',
							format: 'jsonp',
							media_id
            }
          }
        ).then(function(res) {
          let data = res.body;
          if(data.code+'' === '0'){
            cb && cb(data.data);
          }else{
            Toast({
              message: '暂无数据...',
              position: 'bottom',
              duration: 3000
            });
          }
          Indicator.close();
        }, function(err){
          Indicator.close();
          Toast('网络错误...');
        });
      }
    },
    mounted() {

    },
    watch: {

    }
  }
</script>
