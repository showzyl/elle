<template>
  <div class="activityCommentVideo">
    <video autoplay="autoplay" controls="controls" :src="video" id="video" :width="width" :height="height" class="video"></video>
  </div>
</template>

<style media="screen" lang="scss" scoped>
  .activityCommentVideo{
    width: 100%;
    height: 100%;
    /*background-color: #000000;*/
  }

  .video{
    /*transform:rotate(90deg);*/
    /*-moz-transform:rotate(90deg);*/
    /*-webkit-transform:rotate(90deg);*/
    display: block;
  }


</style>

<script>
  import footBar from '../../components/footBar.vue'
  import { Indicator } from 'mint-ui'
  import util from '../../assets/lib/q.util.js'
  import download from '../../components/download.vue'
  import store from '../../assets/lib/q.store.js'

  export default {
    data() {
      return {
        loading: false,
        video: null,
        width: '100%',
        height: '100%'
      }
    },
    created(){
      const me = this;
      const { media_id } = me.$route.query;

//      me.height = util.getWindowHeight();
//      me.width = util.getWindowWidth();
//      me.height = util.getWindowWidth();
//      me.width = util.getWindowHeight();

      console.log(me.height, me.width);

      Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      });

      util.fetchInterface(me, 0, {
        route: 'mapi/media',
        media_id: media_id // 11 是图片, 12是视频
      }, function (res) {

        Indicator.close();

        if(res === 'notMatch'){
          Toast({
            message: '暂无数据...',
            duration: 3000
          });
          return;
        }

        if(res === 'notMatch'){
          Toast('网络错误...');
          return;
        }

        //res.video = 'http://hybird.rayjump.com/dsp/img/video/1280-720-15s.mp4';
        me.video = res.video;

      });

    },
    components: {
      download
    },
    methods: {


    }
  }
</script>

