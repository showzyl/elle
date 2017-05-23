<template>
  <div class="activityComment">
    <div v-if="imgData" class="commentImgBox">
      <p v-for="item in imgData.images">
        <img :src="item.image" alt="" @click="jumpUrl(item.link_type_id, item.media_resource_id, item.link_id)" :id="'img-'+item.media_resource_id">
        <video controls="controls" :src="item.link_id" v-if="item.link_type_id == 4" :id="'video-'+item.media_resource_id" style="display: none;"></video>
      </p>
    </div>

    <div v-if="videoData" class="commentVideo">
      <video :src="videoData.video" controls="controls" autoplay="autoplay"></video>
    </div>

    <div class="comment" v-if="commentData && commentData.length">
      <h3 class="commentTit">
        最新评论
      </h3>
      <ul class="commentList">
        <li class="commentItem" v-for="item in commentData">

          <div class="headerBox">
            <div class="headerImg" :style="{'backgroundImage': 'url('+ item.passport.img_url +')'}"></div>
            <div class="headerMid">
              <h3>{{item.passport.nickname}}</h3>
              <span>{{transTime(item.create_time)}}</span>
            </div>
            <div class="top">
              <i class="topIcon"></i>
              <span class="topTime">{{item.support_count}}</span>
            </div>
          </div>

          <p class="content">
            {{item.content}}
          </p>

        </li>
      </ul>
    </div>

    <div class="comment" v-if="hotData && hotData.length">
      <h3 class="commentTit">
        热门评论
      </h3>
      <ul class="commentList">
        <li class="commentItem" v-for="item in hotData">

          <div class="headerBox">
            <div class="headerImg" :style="{'backgroundImage': 'url('+ item.passport.img_url +')'}"></div>
            <div class="headerMid">
              <h3>{{item.passport.nickname}}</h3>
              <span>{{transTime(item.create_time)}}</span>
            </div>
            <div class="top">
              <i class="topIcon"></i>
              <span class="topTime">{{item.support_count}}</span>
            </div>
          </div>

          <p class="content">
            {{item.content}}
          </p>

        </li>
      </ul>
    </div>

    <p v-else class="noComment">
      暂无精彩评论
    </p>

    <div class="back-to-top" v-show="bScroll" @click="go2Top"></div>

    <downloadFooter />

  </div>
</template>

<style media="screen" lang="scss" scoped>

  .activityComment{
    padding-bottom: 2.1rem;
  }

  video{
    display: block;
    width: 100%;
  }

  .commentVideo{

  }

  .btn{
    position: fixed;
    bottom: 0;
    left: 0;
  }

  .comment{
    margin-bottom: 1.8rem;
  }

  .headerImg{
    float: left;
    width: 1.5rem;
    height: 1.5rem;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-radius: 50%;
  }

  .headerMid{
    float: left;
    margin: .2rem 0 0 .3rem;

  }

  .commentTit{
    /*font-weight: normal;*/
    padding: .2rem 0 .6rem .4rem;
  }

  .commentItem{
    padding: 0 .4rem;
    margin-bottom: .6rem;
  }

  .headerBox{
    overflow: hidden;
  }

  .content{
    padding: .2rem .3rem 0 1.8rem;
  }

  .noComment{
    padding: .2rem 0 0;
    text-align: center;
  }

  .top{
    float: right;
    margin: .2rem .8rem 0 0;
    .topIcon{
      background-image: url(../../assets/img/activity/ding-2x.png);
      background-size: contain;
      background-repeat: no-repeat;
      width: .5rem;
      height: .5rem;
      display: inline-block;
      vertical-align: middle;
    }
    .topTime{
      vertical-align: bottom;
      padding-left: .1rem;
    }
  }
</style>

<script>
  import { Toast, Indicator} from 'mint-ui'
  import wx from 'weixin-js-sdk'
  import util from '../../assets/lib/q.util.js'
  import downloadFooter from '../../components/downloadFooter.vue'
  import core from '../../assets/lib/q.core.js'

  export default {
    data() {
      return {
        loading: false,
        imgData: null,
        videoData: null,
        bScroll: false,
        commentData: null,
        hotData: null,
        wxCfg: {},
        wxShareData: {}
      }
    },
    created(){
      const me = this;

//      document.title = '我是测试页面title...';
//      document.querySelector('#description').setAttribute('content', '我是测试desc');

      window.onscroll = function () {
        util.back2Top.call(me);
      };

      Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      });

      Promise.all([me.fetchData(), me.fetchWxCfg()]).then(function() {
         me.setWxShare();
      }).catch(function(reason){
        console.log(reason);
      });

      me.fetchComment();

    },
    components: {
      downloadFooter
    },
    methods: {
      go2Top(){
        document.body.scrollTop = 0;
      },
      download(){
        util.download();
      },
      fetchComment(){
        const me = this;
        let {
          media_id,
          topic_id,
          topic_url,
          topic_source_id
        } = me.$route.query;
        me.$http.jsonp(
          '//changyan.sohu.com/api/2/topic/load',
          {
            params: {
              client_id: 'cysVYkRBs',
              hot_size: 6,
              media_id,
              topic_id,
              topic_url,
              topic_source_id
            }
          }
        ).then(function (res) {

          if(res.body.comments.length > 6){
            res.body.comments.length = 6;
          }

          res.body.comments.map(function (item) {
            _replaceEmoji(item);
          });

          res.body.hots.map(function (item) {
            _replaceEmoji(item);
          });

          me.commentData = res.body.comments;
          me.hotData = res.body.hots;

        }, function (err) {
          console.log(err);
        });

        function _replaceEmoji(item){
          const reg1 = /(\[emoji\:)(\w+)(\])/ig;
          const reg2 = /\u\w+/ig;
          item.content = item.content.replace(reg2, function (a, b, c) {
            const sRes = '"' + '\\' + a + '"';
            return JSON.parse(sRes);
          });
          item.content = item.content.replace(reg1, function (a, b, c) {
            if(c.length === 8){
              const sPart1 = c.substr(0, 4);
              const sPart2 = c.substr(4, 8);
              const sRes = '"\\u' + sPart1 + '\\u' + sPart2 + '"';
              return JSON.parse(sRes);
            }else if(c.length === 4){
              const sRes = '"\\u' + c + '"';
              return JSON.parse(sRes);
            }
            return a;
          });
        }

      },
      fetchData(){
        const me = this;
        let { media_id, topic_id } = me.$route.query;

        return new Promise(function (resolve, reject) {
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
              return reject('暂无数据...');
            }

            if(res === 'notMatch'){
              Toast('网络错误...');
              return reject('网络错误...');;
            }

            if(res.type_id === '2'){
              me.imgData = res;
            }else if(res.type_id === '3'){
              me.videoData = res;
            }

            me.wxShareData = {
              title: res.name
            };

            resolve(res);

          });
        });

      },
      fetchWxCfg(){
        const me = this;
        return new Promise(function (resolve, reject) {
          me.$http.jsonp(
            '//api2.elleshop.com.cn/index.php?route=mapi/wxmp/getSignPackage',
            {
              params: {
                link: encodeURIComponent(location.protocol + '//' +location.hostname + '/' +location.search),
                format: 'jsonp'
              }
            }
          ).then(function (res) {
            //document.querySelector('.log').innerHTML = location.protocol + '//' +location.hostname + '/' +location.search;
            if(res.body.code == 0){
              me.wxCfg = res.body.data;
              resolve();
            }else{
              reject('no data')
            }
          }, function (err) {
            reject(err)
          });
        });

      },
      setWxShare(){
        const me = this;

        wx.config({
          debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
          appId: me.wxCfg.appId, // 必填，公众号的唯一标识
          timestamp: me.wxCfg.timestamp, // 必填，生成签名的时间戳
          nonceStr: me.wxCfg.nonceStr, // 必填，生成签名的随机串
          signature: me.wxCfg.signature,// 必填，签名，见附录1
          jsApiList: [
            'onMenuShareTimeline',
            'onMenuShareAppMessage'
          ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
        });

        wx.ready(function () {
          alert('ok...');
        });

        wx.error(function(res){
          // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
          alert(res);
        });

        document.title = me.wxShareData.title;

        wx.onMenuShareTimeline({
          title: me.wxShareData.title, // 分享标题
          link: location.href, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          imgUrl: '', // 分享图标
          success: function () {
            // 用户确认分享后执行的回调函数
            console.log('share success');
            alert('share onMenuShareTimeline success...');
          },
          cancel: function () {
            // 用户取消分享后执行的回调函数
            console.log('cancel share');
          }
        });

        wx.onMenuShareAppMessage({
          title: me.wxShareData.title, // 分享标题
          desc: me.wxShareData.title, // 分享描述
          link: location.href, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          imgUrl: '', // 分享图标
          type: '', // 分享类型,music、video或link，不填默认为link
          dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
          success: function () {
            // 用户确认分享后执行的回调函数
            console.log('share success');
            alert('share onMenuShareAppMessage success...');
          },
          cancel: function () {
            // 用户取消分享后执行的回调函数
            console.log('cancel share');
          }
        });
      },
      transTime(ts){
        return core.date.format(ts);
      },
      jumpUrl(id, resource, link_id){
        console.log(id);
        switch (id){
          case '1':
            // 去商品
            location.href = '/#/product/' + link_id;
            break;
          case '2':
            // 品牌
            location.href = '/#/brand/' + link_id;
            break;
          case '3':
            let {
              media_id,
              topic_id,
              topic_url,
              topic_source_id
            } = me.$route.query;
            // 媒体
            location.href = '/#/activity/comment?media_id=' + link_id
              + '&media_id=' + media_id
              + '&topic_id=' + topic_id
              + '&topic_url=' + topic_url
              + '&topic_source_id=' + topic_source_id
            ;
            location.reload();
            break;
          case '4':
            // 视频 直接播放
            this.playVideo(id, resource);
            break;
          case '5':
          case '6':
            // 下载app领取 优惠券
            Toast('请您下载app领取');
            break;
          default:
            Toast('请您下载app');
        }
      },
      playVideo(id, resource){
        const oImg = util.getEl('#img-'+ resource);
        const oVideo = util.getEl('#video-'+ resource);

        oImg.style.display = 'none';
        oVideo.style.display = 'block';
        oVideo.play();

        oVideo.addEventListener('ended', function () {
          oImg.style.display = 'block';
          oVideo.style.display = 'none';
        });

      }

    }
  }
</script>

