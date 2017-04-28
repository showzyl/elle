<template>
  <div class="activityComment">
    <div v-if="imgData" class="commentImgBox">
      <a :href="item.linkUrl" v-for="item in imgData.images">
        <img :src="item.image" alt="">
      </a>
    </div>

    <div v-if="videoData" class="commentVideo">
      <video :src="videoData.video" controls="controls" autoplay="autoplay"></video>
    </div>

    <!--<div class="commentBox">-->
      <!--<div id="SOHUCS" ></div>-->
      <!--<div id="cyReping" role="cylabs" data-use="reping"></div>-->
    <!--</div>-->

    <div class="comment">
      <h3 class="commentTit">
        热门评论
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

    <div class="btn" @click="download">下载`Elleshop`查看更多独家内幕</div>

    <div class="back-to-top" v-show="bScroll" @click="go2Top"></div>

  </div>
</template>

<style media="screen" lang="scss" scoped>

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
  import { Toast, Indicator, MessageBox } from 'mint-ui'
  import util from '../../assets/lib/q.util.js'
  import core from '../../assets/lib/q.core.js'

  export default {
    data() {
      return {
        loading: false,
        imgData: null,
        videoData: null,
        bScroll: false,
        commentData: null
      }
    },
    created(){
      const me = this;

      window.onscroll = function () {
        util.back2Top.call(me);
      };

      Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      });

      me.fetchData();
      me.fetchComment();

    },
    components: {

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
        let { media_id, topic_id } = me.$route.query;

        me.$http.jsonp(
          'http://changyan.sohu.com/api/2/topic/comments',
          {
            params: {
              client_id: 'cysVYkRBs',
              media_id: media_id,
              topic_id: topic_id,
              format: 'jsonp'
            }
          }
        ).then(function (res) {

          if(res.body.comments.length > 6){
            res.body.comments.length = 6;
          }

          var reg1 = /(\[emoji\:)(\w+)(\])/ig;
          var reg2 = /\u\w+/ig;

          res.body.comments.map(function (item) {
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
          });

          me.commentData = res.body.comments;

        }, function (err) {
          console.log(err);
        });


      },
      fetchData(){
        const me = this;
        let { media_id, topic_id } = me.$route.query;

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
              // console.log(item);
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
                  item.linkUrl = '/#/activity/video?media_id=' + item.link_id;
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
            me.videoData = res;
          }

//          let timer1 = setInterval(function () {
//            console.log('1');
//            if(util.getEl('.module-mobile-cmt-float-bar')){
//              clearInterval(timer1);
//              util.rmEl(util.getEl('.module-mobile-cmt-float-bar'));
//              util.rmEl(util.getEl('.module-mobile-cmt-header'));
//              util.rmEl(util.getEl('.list-footer-wrapper-wap'));
//            }
//          }, 200);


        });
      },
      transTime(ts){
        return core.date.format(ts);
      }

    }
  }
</script>

