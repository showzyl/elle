<template>
  <div class="activityComment">
    <download />
    <div v-if="imgData" class="commentImgBox">
      <a :href="item.linkUrl" v-for="item in imgData.images">
        <img :src="item.image" alt="">
      </a>
    </div>

    <div v-if="videoData" class="commentVideo">
      <video :src="videoData.video" controls="controls"></video>
    </div>

    <div class="commentBox">
      <div id="SOHUCS" ></div>
      <div id="cyReping" role="cylabs" data-use="reping"></div>
    </div>

  </div>
</template>

<style media="screen" lang="scss" scoped>

  video{
    display: block;
    width: 100%;
  }

  .commentVideo{

  }


</style>

<script>
  import footBar from '../../components/footBar.vue'
  import recommend from '../../components/recommend.vue'
  import { Toast, Indicator, MessageBox } from 'mint-ui'
  import util from '../../assets/lib/q.util.js'
  import download from '../../components/download.vue'
  import store from '../../assets/lib/q.store.js'

  const mobile_token = store.get('mobile_token');
  const customer_id = store.get('customer_id');

  export default {
    data() {
      return {
        loading: false,
        imgData: null,
        videoData: null,

      }
    },
    created(){
      const me = this;
      let { media_id } = me.$route.query;

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

        if(res.type_id === '2'){
          res.images.map(function (item) {
            console.log(item);
            switch (item.link_type_id){
              case '1':
                // 去商品
                item.linkUrl = '/#/product/' + item.link_id;
                break;
              case '2':
                // 品牌
                item.linkUrl = '/#/brand/' + item.link_id;
                break;
              case '3':
                // 媒体
                item.linkUrl = '/#/activity/comment?media_id=' + item.link_id;
                break;
              case '4':
                // 灵感
                item.linkUrl = '/#/inspire/' + item.link_id;
                break;
              case '5':
                // 视频资料
                item.linkUrl = 'javascript:;';
                break;
              default:
                item.linkUrl = 'javascript:;';
            }
          });

          me.imgData = res;
        }else if(res.type_id === '3'){
          console.log(2);
          res.video = 'http://hybird.rayjump.com/dsp/img/video/1280-720-15s.mp4';
          me.videoData = res;
        }

        console.log(res);



      });

    },
    components: {
      download
    },
    methods: {


    }
  }
</script>

