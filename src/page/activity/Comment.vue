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

    <div class="imgTxtList"></div>

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
      <ul class="commentList hotComment">
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
      <div class="shade" v-show=" hotData.length >= 2 "></div>
      <p class="commentGuide" @click="download" v-show=" hotData.length >= 2 ">打开ELLESHOP客户端，查看({{ downloadTimes }})条评论精彩评论</p>
    </div>

    <p v-else class="noComment">
      暂无精彩评论
    </p>

    <ul class="mediaList" @click="download('mediaList')">
      <li class="item" v-for="item in mediaListData">
        <!--:style="'background-image: url('+item.cover_image+')'"-->
        <div class="imgBox" >
          <img src="http://attach1.92wy.com/attachments/day_110412/11041213044998741ba276248f.jpg" alt="">
        </div>
        <div class="txtBox">
          <h3 class="tit1">{{item.name}}</h3>
          <h4 class="tit2">{{item.description_detail}}</h4>
          <p class="iconBox">
            <span>
              <i class="icon-eye"></i>
              {{item.visit_count}}
            </span>
            <span>
              <i class="icon-msg"></i>
              {{item.discuss_count}}
            </span>
          </p>
        </div>
      </li>
    </ul>

    <!--<div class="back-to-top" v-show="bScroll" @click="go2Top"></div>-->

    <downloadFooter />

  </div>
</template>

<style media="screen" lang="scss" scoped>

  .mediaList{
    margin-top: .8rem;
    .item{
      overflow: hidden;
      padding: 0 .2rem .4rem;
      .imgBox{
        padding-top: .2rem;
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
        width: 38.57%;
        float: left;
      }
      .txtBox{
        width: 55%;
        margin-left: .3rem;
        float: left;
      }
      .tit1,.tit2{
        /*margin-top: .2rem;*/
        font-weight: normal;
      }
      .tit1{
        overflow: hidden;
        height: .8rem;
        font-size: .5rem;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .iconBox{
        margin-top: .1rem;
      }
      .tit2{
        /*height: 1.1rem;*/
        display: -webkit-box; /* 必须结合的属性 ，将对象作为弹性伸缩盒子模型显示 。*/
        text-overflow: ellipsis; /*可以用来多行文本的情况下，用省略号“…”隐藏超出范围的文本。*/
        overflow : hidden;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .icon-eye, .icon-msg{
        display: inline-block;
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        vertical-align: bottom;
        width: 20px;
        height: 20px;
      }
      .icon-eye{
        background-image: url(../../assets/img/activity/icon-eye.png);
      }
      .icon-msg{
        margin-left: .4rem;
        width: 17px;
        background-image: url(../../assets/img/activity/icon-msg.png);
      }
    }
  }


  .commentGuide{
    width: 100%;
    position: absolute;
    left: 0;
    bottom: -1rem;
    font-size: .35rem;
    text-align: center;
  }

  .shade{
    position: absolute;
    bottom: 0;
    height: 5rem;
    width: 100%;
    background: -webkit-linear-gradient(to top,#ffffff 0,rgba(243, 243, 243, 0) 100%);
    background: linear-gradient(to top,#ffffff 0,rgba(243, 243, 243, 0) 100%);
    pointer-events: none;
    -webkit-transition: .25s;
    transition: .25s;
  }

  .activityComment{
    padding-bottom: 2.1rem;
  }

  .imgTxtList{
    padding: 15px;
    line-height: 175%;
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
    position: relative;
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
    padding: .2rem 0;
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
  import util from '../../assets/lib/q.util.js'
  import downloadFooter from '../../components/downloadFooter.vue'
  import core from '../../assets/lib/q.core.js'

  export default {
    data() {
      return {
      	downloadTimes: '2236',
        loading: false,
        imgData: null,
        videoData: null,
        bScroll: false,
        commentData: null,
        hotData: null,
        wxCfg: {},
        wxShareData: {},
				mediaListData: null
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

      Promise.all([me.fetchData(), me.fetchWxCfg()]).then(function() {
        // me.setWxShare();
      }).catch(function(reason){
        console.log(reason);
      });

      me.fetchComment();

      me.fetchMediaList();

    },
    components: {
      downloadFooter
    },
    methods: {
      go2Top(){
        document.body.scrollTop = 0;
      },
      download(k){
				const me = this;
//				util.statPage(me, {
//					k: 'comment_download',
//					route_url: 'http://baidu.com'
//				}, function (res) {
//					console.log(res)
//				})
        util.download(me, k);
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

					res.body.comments && res.body.comments.map(function (item) {
            _replaceEmoji(item);
          });

					res.body.hots && res.body.hots.map(function (item) {
            _replaceEmoji(item);
          });

					// todo rm
//					 res.body.hots[1] = res.body.hots[0];

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
              return reject('网络错误...');
            }

//            if(res.type_id === '2'){
//              me.imgData = res;
//            }else if(res.type_id === '3'){
//              me.videoData = res;
//            }

//            item 单品
//						brand 品牌
//						news 媒体
//						video 视频

            switch (res.type_id){
              case '1':
              	const regItem = /app:\/\/item/ig;
								const regBrand = /app:\/\/brand/ig;
              	const regMidea = /app:\/\/(video|news)/ig;

              	// 图文混排
								res.image_text = util.unescapeHTML(res.image_text);

								res.image_text = res.image_text.replace(regItem, '//m.elleshop.com.cn/#/product/');
								res.image_text = res.image_text.replace(regBrand, '//m.elleshop.com.cn/#/brand/');
								res.image_text = res.image_text.replace(regMidea, '//m.elleshop.com.cn/#/activity/comment?media_id=');

								util.getEl('.imgTxtList').innerHTML = res.image_text;
                break;
							case '2':
								// 图片
								me.imgData = res;
								break;
							case '3':
								// 视频
								me.videoData = res;
								break;
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
                format: 'jsonp'
              }
            }
          ).then(function (res) {
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
            'onMenuShareTimeline'
          ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
        });

        wx.onMenuShareTimeline({
          title: me.wxShareData.title, // 分享标题
          link: location.href, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          imgUrl: '', // 分享图标
          success: function () {
            // 用户确认分享后执行的回调函数
            console.log('share success');
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
      fetchMediaList(){
      	const me = this;
				util.fetchInterface(me, 0, {
          route: 'mapi/media/getMediaList',
					media_type_id: '2',
					order_id: '4',
					pageSize: '3',
					customer_id: '280887'
        }, function (res) {
					//Indicator.close();
					if(res === 'notMatch'){
						Toast({
							message: '暂无数据...',
							duration: 3000
						});
						return reject('暂无数据...');
					}

					if(res === 'notMatch'){
						Toast('网络错误...');
						return reject('网络错误...');
					}

//					 console.log(res);
          
					me.mediaListData = res;

        })
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

    },
		watch: {
			'$route' (to, from) {
				console.log(to, from);
				if(to.query.media_id !== from.query.media_id){
          location.reload();
        }
			}
		}
  }
</script>

