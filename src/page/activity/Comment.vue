<template>
  <div class="activityComment">
    <div v-if="imgData" class="commentImgBox">
      <!--<a :href="item.linkUrl" v-for="item in imgData.images">-->
        <img :src="item.image" alt="" v-for="item in imgData.images" @click="jumpUrl(item.link_type_id)">
      <!--</a>-->
    </div>

    <div v-if="videoData" class="commentVideo">
      <video :src="videoData.video" controls="controls" autoplay="autoplay"></video>
    </div>

    <div class="comment" v-if="commentData.length">
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

    <div class="comment" v-if="hotData.length">
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
  import { Toast, Indicator, MessageBox } from 'mint-ui'
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
        hotData: null
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
            me.imgData = res;
          }else if(res.type_id === '3'){
            me.videoData = res;
          }

        });
      },
      transTime(ts){
        return core.date.format(ts);
      },
      jumpUrl(id){
        console.log(id);
        switch (id){
          case '1':
            // 去商品
            location.href = '/#/product/' + item.link_id;
            break;
          case '2':
            // 品牌
            location.href = '/#/brand/' + item.link_id;
            break;
          case '3':
            // 媒体
            location.href = '/#/activity/comment?media_id=' + item.link_id;
            break;
          case '4':
            // 视频
            location.href = '/#/activity/video?media_id=' + item.link_id;
            break;
          case '5':
          case '6':
            // 下载app领取
            
            break;
          default:
            item.linkUrl = 'javascript:;';
        }
      }

    }
  }
</script>

